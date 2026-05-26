import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GameProvider } from "@/lib/gameState";
import { AuthProvider } from "@/lib/authContext";
import AuthGuard from "@/components/AuthGuard";

export const metadata: Metadata = {
  title: "Mallu - Aprende divirtiéndote",
  description: "Idiomas, programación y cocina en una app gamificada con tu perro Mallu.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#58CC02",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text-primary">
        <AuthProvider>
          <GameProvider>
            <AuthGuard>{children}</AuthGuard>
          </GameProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
