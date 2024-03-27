import React from "react";
import { useForm } from "react-hook-form";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function RsvpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      cellPhone: "",
    },
  });

  //console.log(watch("example")); // you can watch individual input by pass the name of the input

  const handleSubmitSend = async (data: any) => {
    try {
      const response = await fetch("http://localhost:3005/saveConfirmation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const responseData = await response.json();
      alert("Confirmação de presença salva com sucesso!");
      console.log(responseData);
    } catch (error: any) {
      console.error("Erro ao salvar a confirmação de presença:", error);
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitSend)}>
      <div className="m-8 mx-auto my-20 max-w-[400px]">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-extrabold">
            Confirmação de presença!
          </h1>
          <p className="text-gray-600">
            Será uma alegria para nós tê-lo em nosso casamento. Preencha o
            fomulário abaixo:
          </p>
        </div>
        <div className="mb-8 mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="relative">
            <label className="text-sm font-bold tracking-wide text-gray-700">
              Nome completo:
            </label>
            <VerificationIcon fieldName="example" watch={watch} />
            <input
              {...register("fullName", {
                required: true,
                maxLength: 30,
              })}
              defaultValue="test"
              className=" w-full border-b border-gray-300 py-2 text-base focus:border-green-500 focus:outline-none"
              type=""
              placeholder="Digite seu nome aqui..."
            />
            {errors.fullName && (
              <p className="text-sm text-red-300">
                Por favor, insira o seu nome completo
              </p>
            )}
          </div>
          <div className="mt-8 content-center">
            <label className="text-sm font-bold tracking-wide text-gray-700">
              Número whatsapp:
            </label>
            <VerificationIcon fieldName="exampleRequired" watch={watch} />
            <input
              {...register("cellPhone", {
                required: true,
                maxLength: 16,
              })}
              className="w-full content-center border-b border-gray-300 py-2 text-base focus:border-green-500 focus:outline-none"
              type=""
              maxLength={15}
              placeholder="(61) 99999-9999"
              onChange={(e) =>
                (e.target.value = formatWhatsAppNumber(e.target.value))
              }
            />
            {errors.cellPhone && (
              <p className="text-sm text-red-300">
                Por favor, insira o seu número de celular
              </p>
            )}
          </div>
        </div>
        <div className="space-y-4">
          <input
            type="submit"
            className="w-full rounded-full bg-black p-3 font-semibold text-white"
          />
          <button
            type="button" // Mude o tipo para button para evitar a submissão do formulário
            onClick={() => handleSubmit(() => {})()} // Chama handleSubmit com uma função vazia
            className="w-full rounded-full border bg-white p-3 font-semibold"
          >
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
}

const formatWhatsAppNumber = (value: string) => {
  let formattedValue = value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  formattedValue = formattedValue.replace(/(\d{2})(\d)/, "($1) $2"); // Insere parênteses e espaço após os dois primeiros dígitos
  formattedValue = formattedValue.replace(/(\d{5})(\d)/, "$1-$2"); // Insere hífen após os cinco primeiros dígitos
  return formattedValue;
};

const VerificationIcon = ({ fieldName, watch }: any) => {
  const fieldValue = watch(fieldName);
  return fieldValue ? (
    <div className="absolute right-0 mt-[10px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-green-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </div>
  ) : null;
};
