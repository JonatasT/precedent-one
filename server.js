const next = require("next");
const fastify = require("fastify")();
const saveConfirmation = require("./app/api/rsvp/saveConfirmation");
const fastifyCors = require("@fastify/cors");

// Registre o plugin CORS
fastify.register(fastifyCors, {
  origin: true, // Permite requisições de qualquer origem
  //preflight: false, // Desativa o tratamento de requisições OPTIONS pelo plugin CORS
});

// Registre o plugin saveConfirmation
fastify.register(saveConfirmation);

// Inicialize o Next.js
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // Inicie o servidor Fastify
  const startFastify = async () => {
    try {
      await fastify.listen({ port: 3005 });
      console.log(`Fastify server running at http://localhost:3005`);
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  };

  startFastify();

  // Rotas Fastify
  fastify.get("/api/rsvp", async (request, reply) => {
    return { hello: "world" }; // Ajuste esta rota conforme necessário
  });

  // Mova a rota '/*' para o final
  fastify.all("/api/rsvp/*", (req, res) => {
    return handle(req, res);
  });
});
