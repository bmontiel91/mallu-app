"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthUser {
  username: string;
  name: string;
}

interface AuthContextType {
  user: AuthUser | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

const storage = typeof window !== "undefined" ? sessionStorage : null;

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!storage) { setLoading(false); return; }
    const saved = storage.getItem("mallu-user");
    if (saved) setUser(JSON.parse(saved));
    setLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (!res.ok) return false;
    const data = await res.json();
    setUser(data);
    if (storage) storage.setItem("mallu-user", JSON.stringify(data));
    return true;
  };

  const logout = () => {
    const currentUser = user;
    setUser(null);
    if (storage) {
      storage.removeItem("mallu-user");
      if (currentUser) {
        const keys = [
          `mallu-progress-${currentUser.username}`,
          `mallu-onboarded-${currentUser.username}`,
          `mallu-track-${currentUser.username}`,
          `mallu-subtrack-${currentUser.username}`,
        ];
        keys.forEach(k => storage.removeItem(k));
        localStorage.removeItem("mallu-user");
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
