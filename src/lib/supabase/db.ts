import { drizzle } from "drizzle-orm/postgres-js";
import postgress from "postgres";
import * as dotenv from "dotenv";
import * as schema from "../../../migrations/schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";
dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  console.log("🔴 Cannot find database URL");
}

const client = postgress(process.env.DATABASE_URL as string, { max: 1 });
const db = drizzle(client, schema);

// Migrate database
const migrateDb = async () => {
  try {
    console.log("🟠 Migrating client");
    await migrate(db, { migrationsFolder: "migrations" });
    console.log("🟢 Migrations completed");
  } catch (error) {
    console.log("🔴 Migrations failed");
  }
};

migrateDb();

export default db;
