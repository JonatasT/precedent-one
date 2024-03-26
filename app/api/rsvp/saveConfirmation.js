// app/api/saveConfirmation.ts
/*import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    try {
      const { fullName, cellPhone } = req.body;
      const confirmation = await prisma.attendanceConfirmation.create({
        data: {
          fullName,
          cellPhone,
        },
      });
      res
        .status(200)
        .json({
          message: "Confirmação de presença salva com sucesso!",
          confirmation,
        });
    } catch (error) {
      console.error("Erro ao salvar a confirmação de presença:", error);
      res
        .status(500)
        .json({
          message:
            "Erro ao salvar a confirmação de presença. Por favor, tente novamente.",
        });
    }
  } else {
    // Método não suportado
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
*/

// app/api/saveConfirmation.ts
// app/api/rsvp/saveConfirmation.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async function (fastify, opts) {
 fastify.post('/saveConfirmation', async (request, reply) => {
    try {
      const { fullName, cellPhone } = request.body;
      const confirmation = await prisma.attendanceConfirmation.create({
        data: {
          fullName,
          cellPhone,
        },
      });
      reply
        .code(200)
        .send({
          message: "Confirmação de presença salva com sucesso!",
          confirmation,
        });
    } catch (error) {
      console.error("Erro ao salvar a confirmação de presença:", error);
      reply
        .code(500)
        .send({
          message: "Erro ao salvar a confirmação de presença. Por favor, tente novamente.",
        });
    }
 });

  // Endpoint GET para recuperar as confirmações de presença
  // Endpoint GET para recuperar as confirmações de presença
fastify.get('/confirmations', async (request, reply) => {
  try {
     const confirmations = await prisma.attendanceConfirmation.findMany();
     reply
       .code(200)
       .send({
         message: "Confirmações de presença recuperadas com sucesso!",
         confirmations,
       });
  } catch (error) {
     console.error("Erro ao recuperar as confirmações de presença:", error);
     reply
       .code(500)
       .send({
         message: "Erro ao recuperar as confirmações de presença. Por favor, tente novamente.",
       });
  }
 });
 
};
