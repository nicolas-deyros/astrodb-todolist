import { defineDb, defineTable, column, NOW } from "astro:db";

const Todo = defineTable({
  columns: {
    id: column.number({ primaryKey: true, unique: true }),
    content: column.text(),
    published: column.date({ default: NOW }),
    status: column.json(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Todo },
});
