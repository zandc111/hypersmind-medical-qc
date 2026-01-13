import { drizzle } from 'drizzle-orm/mysql2';
import * as schema from './drizzle/schema.ts';

const db = drizzle(process.env.DATABASE_URL);

const applications = await db.select().from(schema.trialApplications);
console.log('Trial Applications:', applications.length);
console.log(JSON.stringify(applications, null, 2));

const users = await db.select().from(schema.users);
console.log('\nUsers:', users.length);
console.log(JSON.stringify(users, null, 2));
