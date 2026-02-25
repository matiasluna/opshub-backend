import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

type JwtPayload = { sub: string; role: "admin" | "ops" };

export async function registerAuthGuards(app: FastifyInstance) {
  app.decorate("requireAuth", async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      await req.jwtVerify<JwtPayload>();
    } catch {
      return reply.code(401).send({ error: "unauthorized" });
    }
  });

  app.decorate(
    "requireRole",
    (role: JwtPayload["role"]) =>
      async (req: FastifyRequest, reply: FastifyReply) => {
        const user = req.user as JwtPayload | undefined;
        if (!user) return reply.code(401).send({ error: "unauthorized" });
        if (user.role !== role) return reply.code(403).send({ error: "forbidden" });
      }
  );
}