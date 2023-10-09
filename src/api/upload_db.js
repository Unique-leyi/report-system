import { Low, JSONFile } from 'lowdb';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json');
const adapter = new JSONFile(file);
const defaultData = { reports: [] };
const db = new Low(adapter);

export async function initDatabase() {
  await db.read();
  db.data = db.data || defaultData;
  await db.write();
}

export function getDatabase() {
  return db;
}