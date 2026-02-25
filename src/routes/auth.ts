import { FastifyInstance } from "fastify";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export async function registerAuthRoutes(app: FastifyInstance) {
  app.post("/login", async (req, reply) => {
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success) return reply.code(400).send({ error: "invalid-body" });

    // MVP: user hardcodeado
    const { email } = parsed.data;
    const role = email.includes("admin") ? "admin" : "ops";

    const token = app.jwt.sign({ sub: email, role });

    return { accessToken: token };
  });

  app.get("/me", { preHandler: app.requireAuth }, async (req) => {
    return { user: req.user };
  });

  app.get(
    "/admin/ping",
    { preHandler: [app.requireAuth, app.requireRole("admin")] },
    async () => ({ ok: true, area: "admin" })
  );
}