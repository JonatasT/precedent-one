// server.js
const fastify = require("fastify")();
const saveConfirmation = require("./app/api/rsvp/saveConfirmation");
const fastifyCors = require("@fastify/cors");

// Registre o plugin CORS
fastify.register(fastifyCors, {
  origin: true, // Permite requisições de qualquer origem
});

// Registre o plugin saveConfirmation
fastify.register(saveConfirmation);

// Inicie o servidor
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log(`Server running at http://localhost:3000`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();