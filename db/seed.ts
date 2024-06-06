import { db, Todo } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Todo).values([
    { id: 1, content: "Coding", status: { value: "todo" } },
    { id: 2, content: "Prototype", status: { value: "todo" } },
    { id: 3, content: "User Testing", status: { value: "in progress" } },
    { id: 4, content: "Analysis", status: { value: "in progress" } },
    { id: 5, content: "Ideation", status: { value: "done" } },
    { id: 6, content: "Sketches", status: { value: "done" } },
    { id: 7, content: "Hypotesis", status: { value: "done" } },
    { id: 8, content: "Interviews", status: { value: "trash" } },
    { id: 9, content: "Research", status: { value: "trash" } },
  ]);
}
