# 🚀 OpsHub Backend

Backend de entrenamiento técnico diseñado para desarrollar y afilar habilidades de arquitectura, seguridad y diseño de sistemas en Node.js + TypeScript.

Este proyecto **no es un producto comercial**, sino un entorno controlado para practicar criterios de ingeniería backend moderna.

---

## 🎯 Propósito del Proyecto

OpsHub existe para:

- Practicar diseño de APIs versionadas (`/v1`)
- Implementar autenticación JWT y control de roles (RBAC)
- Diseñar sistemas con separación clara de responsabilidades
- Trabajar con Prisma + PostgreSQL
- Implementar rate limiting, idempotencia y manejo de errores
- Aplicar logging estructurado y health checks
- Simular entornos productivos con Docker
- Entrenar criterio arquitectónico en lugar de velocidad de implementación

---

## 🧠 Objetivo Personal

Este proyecto forma parte de un plan de evolución técnica hacia un perfil de:

- Backend Engineer sólido
- Diseñador de sistemas medianos
- Tech Lead en formación
- Ingeniero con criterio en seguridad, infra y observabilidad

OpsHub es el “gimnasio backend”.

---

## 🏗 Arquitectura Base

### Stack principal

- Node.js (LTS)
- TypeScript
- Fastify
- Prisma ORM
- PostgreSQL
- Redis (para cache y rate limiting)
- Docker / Docker Compose

---

## 📦 Dominio Funcional (Base)

OpsHub simula un sistema interno de operaciones con:

- Usuarios (`admin`, `ops`)
- Autenticación JWT
- Tickets
- Knowledge Base
- Idempotency Keys
- Control de roles

El dominio puede evolucionar, pero el foco está en arquitectura.

---

## 🧩 Estructura del Proyecto
