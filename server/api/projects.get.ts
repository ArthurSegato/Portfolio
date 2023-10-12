import { sql } from "@vercel/postgres";

export default defineEventHandler(async (event) => {
  const { rows } =
    await sql`SELECT id, name, description, card FROM "Project" ORDER BY id DESC;`;
  return rows;
});
