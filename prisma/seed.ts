import prisma from "../src/prisma";

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john@example.com",
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

  console.log("Seed complete:", user);
}

main()
  .then(async () => await prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
