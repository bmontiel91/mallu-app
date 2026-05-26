"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useAuth } from "@/lib/authContext";
import Mascot from "@/components/Mascot";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const ok = await login(username, password);
    setLoading(false);
    if (ok) {
      router.push("/home");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm flex flex-col items-center gap-6"
      >
        <Mascot expression="waving" size="lg" />

        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-text-primary">Mallu</h1>
          <p className="mt-1 text-sm text-text-secondary">Inicia sesión para aprender</p>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div>
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-12 px-4 rounded-2xl border-[2px] border-[#E5E5E5] bg-white text-text-primary text-sm font-medium outline-none focus:border-accent transition-colors"
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 px-4 rounded-2xl border-[2px] border-[#E5E5E5] bg-white text-text-primary text-sm font-medium outline-none focus:border-accent transition-colors"
              required
            />
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-error font-medium text-center"
            >
              {error}
            </motion.p>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-accent text-white font-bold text-[15px] rounded-2xl shadow-[0_4px_0_#3d8b00] active:shadow-[0_1px_0_#3d8b00] active:translate-y-[3px] transition-all disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Entrar"}
          </motion.button>
        </form>

        <div className="w-full p-4 bg-surface rounded-2xl border-[2px] border-[#E5E5E5]">
          <p className="text-xs font-bold text-text-tertiary uppercase tracking-wider mb-2 text-center">
            Usuarios de prueba
          </p>
          <div className="flex flex-col gap-1">
            {[
              { u: "admin", p: "admin123" },
              { u: "user1", p: "pass123" },
              { u: "user2", p: "pass123" },
            ].map((cred) => (
              <button
                key={cred.u}
                onClick={() => { setUsername(cred.u); setPassword(cred.p); }}
                className="text-xs text-text-secondary hover:text-accent transition-colors text-center py-1"
              >
                {cred.u} / {cred.p}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
