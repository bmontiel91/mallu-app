export const USERS = [
  { username: "admin", password: "admin123", name: "Admin" },
  { username: "user1", password: "pass123", name: "María" },
  { username: "user2", password: "pass123", name: "Carlos" },
];

export function validateUser(username: string, password: string) {
  return USERS.find(
    (u) => u.username === username.toLowerCase() && u.password === password
  ) || null;
}
