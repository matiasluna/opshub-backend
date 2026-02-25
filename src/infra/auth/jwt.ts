import { FastifyInstance } from "fastify";
import jwt from "@fastify/jwt";

export async function registerJwt(app: FastifyInstance) {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET is missing");

  await app.register(jwt, { secret });
}