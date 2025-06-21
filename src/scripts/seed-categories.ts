import { db } from "@/db";
import { categories } from "@/db/schema";

const categorNames = [
  "Cars and vehicles",
  "Comedy",
  "Education",
  "Entertainment",
  "Family",
  "Gaming",
  "Health",
  "Music",
  "News",
  "Religion",
  "Science",
  "Sports",
  "Technology",
  "Travel",
  "People and blogs",
  "Pets and animals",
  "Animals",
  "Astronomy",
  "Business",
  "Travel and events",
  "Food",
  "Lifestyle",
  "Fashion",
  "Home and garden",
  "Nature",
  "Photography",
  "Science and technology",
  "Film and animation",
  "Short films",
  "Documentary",
  "Howto and style",
  "Nonprofits and activism",
];

async function main() {
  console.log("Seeding categories...");

  try {
    const values = categorNames.map((name) => ({
      name,
      description: `Video related to ${name.toLowerCase()}`,
    }));

    await db.insert(categories).values(values);
    console.log("Categories seeded successfully.");
  } catch (error) {
    console.error("Error seeding categories:", error);
    process.exit(1);
  }
}

main();
