import { sql } from "drizzle-orm";
import { boolean } from "drizzle-orm/gel-core";
import { pgTable,uuid,text,timestamp, uniqueIndex } from "drizzle-orm/pg-core";


export const users = pgTable('users',{
    id : uuid('id').primaryKey().default(sql`uuidv7()`),
    firstName : text('first_name').notNull(),
    lastName : text('last_name').notNull(),
    email : text('email').notNull(),
    mobileNumber : text('mobile_number').notNull(),
    isActive : boolean('is_active').default(true).notNull(),
    createdAt : timestamp('created_at',{withTimezone : true}).defaultNow().notNull(),
    updatedAt : timestamp('created_at',{withTimezone : true}).defaultNow().notNull()
},(t) => [
  uniqueIndex("users_email_unique").on(sql`lower(${t.email})`),
])


