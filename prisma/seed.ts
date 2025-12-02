import prisma from "../src/prisma";
import bcrypt from "bcrypt";

async function main() {
  // Create admin user
  const adminPassword = await bcrypt.hash("admin123", 10);
  const admin = await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@example.com",
      password: adminPassword,
      role: "ADMIN",
    },
  });

  // Create regular user with a post + comment
  const userPassword = await bcrypt.hash("password123", 10);
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john@example.com",
      password: userPassword,
      posts: {
        create: [
          {
            title: "My first post",
            content: "Hello world!",
            comments: {
              create: [
                {
                  content: "Nice post!",
                  author: {
                    create: {
                      name: "Jane Doe",
                      email: "jane@example.com",
                      password: await bcrypt.hash("jane123", 10),
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.log("Seed complete:", { admin, user });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
