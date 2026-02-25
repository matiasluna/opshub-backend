import Fastify, { FastifyInstance } from "fastify";
import { checkDb } from "./infra/db/health";
import { registerJwt } from "./infra/auth/jwt";
import { registerAuthGuards } from "./infra/auth/guards";
import { registerAuthRoutes } from "./routes/auth";
import { registerV1Routes } from "./routes";

export async function buildApp(): Promise<FastifyInstance> {
  const app = Fastify({ logger: true });

  // health checks
  app.get("/health", async () => ({ status: "ok" }));
  app.get("/ready", async (_, reply) => {
    const dbOk = await checkDb();
    if (!dbOk) return reply.code(503).send({ status: "not-ready", db: "down" });
    return { status: "ready", db: "ok" };
  });

  // plugins/guards/routes
  await registerJwt(app);
  await registerAuthGuards(app);

  app.register(async function (v1) {
    await registerV1Routes(v1);
  }, { prefix: "/v1" });

  return app;
}