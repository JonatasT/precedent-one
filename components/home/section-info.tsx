import { Button } from "../ui/button";

export function SectionInfo() {
  return (
    <div className="h-screen pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <section className="mx-auto mb-20 flex w-[61.063rem] max-w-full flex-row items-start justify-center text-center font-inter text-[0.938rem]">
            <div className="flex w-[44.688rem] max-w-full flex-col items-end justify-start gap-[0.75rem_0rem]">
              <div className="flex flex-row items-start justify-center self-stretch px-[1.25rem] py-[0rem]">
                <div className="relative inline-block w-[33.188rem] font-medium tracking-[1px]">{`Mantenha-se informado sobre tudo`}</div>
              </div>
              <h1 className="mq975:text-[3.688rem] mq975:leading-[4.5rem] relative m-0 self-stretch font-jomolhari text-[2.625rem] font-normal leading-[122%] mq450:text-[2.75rem] mq450:leading-[3.375rem]">
                Informações úteis sobre o casamento
              </h1>
            </div>
          </section>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-16 lg:space-y-0">
            <div className="group relative">
              <div className="sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1  relative h-[23.25rem] w-full overflow-hidden bg-white group-hover:opacity-75 sm:h-[23.25rem]">
                <img
                  src="/section-info-location.jpeg"
                  alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Localização
                </a>
              </h3>
              <p className="font-[jolmolhari] text-[1.3rem] text-base font-normal">
                Local do casamento
              </p>
              <Button className="mt-8" variant={"outline"}>
                Ler mais
              </Button>
            </div>
            <div className="group relative">
              <div className="sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1  relative h-[23.25rem] w-full overflow-hidden bg-white group-hover:opacity-75 sm:h-[23.25rem]">
                <img
                  src="/section-info-indumentaria.jpg"
                  alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Indumentária
                </a>
              </h3>
              <p className="font-[jolmolhari] text-[1.3rem] text-base font-normal">
                O que vestir?
              </p>
              <Button className="mt-8" variant={"outline"}>
                Ler mais
              </Button>
            </div>
            <div className="group relative">
              <div className="sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1  relative h-[23.25rem] w-full overflow-hidden bg-white group-hover:opacity-75 sm:h-[23.25rem]">
                <img
                  src="/section-info-fornecedores.jpg"
                  alt="Collection of four insulated travel bottles on wooden shelf."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Fornecedores
                </a>
              </h3>
              <p className="font-[jolmolhari] text-[1.3rem] text-base font-normal">
                Detalhes do nosso casamento
              </p>
              <Button className="z-100 mt-8" variant={"outline"}>
                Ler mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
