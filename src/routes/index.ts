import { type FastifyInstance } from "fastify";
import { registerAuthRoutes } from "./auth";

export async function registerV1Routes(app: FastifyInstance) {
  app.get("/ping", async () => ({ message: "v1 alive" }));

  app.register(registerAuthRoutes, { prefix: "/auth" });

  app.get("/me", { preHandler: app.requireAuth }, async (req) => ({ user: req.user }));
}