import { NextResponse } from "next/server";
import { validateUser } from "@/lib/auth";

export async function POST(request: Request) {
  const { username, password } = await request.json();
  const user = validateUser(username, password);

  if (!user) {
    return NextResponse.json({ error: "Usuario o contraseña incorrectos" }, { status: 401 });
  }

  return NextResponse.json({
    username: user.username,
    name: user.name,
  });
}
