import "fastify";
import type { FastifyRequest, FastifyReply } from "fastify";

type JwtPayload = { sub: string; role: "admin" | "ops" };

declare module "fastify" {
  interface FastifyInstance {
    requireAuth: (req: FastifyRequest, reply: FastifyReply) => Promise<void>;
    requireRole: (role: JwtPayload["role"]) => (req: FastifyRequest, reply: FastifyReply) => Promise<void>;
  }
}