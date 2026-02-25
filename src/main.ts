import { buildApp } from "./app";

async function main() {
  const app = await buildApp();

  await app.listen({
    port: Number(process.env.PORT ?? 3000),
    host: "0.0.0.0",
  });

  app.log.info("Server running");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});