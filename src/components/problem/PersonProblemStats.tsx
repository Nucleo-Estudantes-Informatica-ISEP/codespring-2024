import { MaskContainer } from "@/lib/components/ui/svg-mask-effect";

const PersonProblemStats: React.FC = () => {
  return (
    <div className="relative flex h-[32rem] w-full flex-col items-center justify-center overflow-hidden">
      <h2 className="text-5xl font-bold">Sabias que...</h2>
      <p className="text-lg italic">
        (Hover me)...{" "}
        <a
          href="https://www.dn.pt/sociedade/73-dos-portugueses-nao-fazem-exercicio-fisico-15179168.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          [fonte]
        </a>
      </p>
      <MaskContainer
        revealText={
          <div className="grid grid-cols-5 gap-3">
            <img
              className="hidden size-24 dark:block"
              src="/svg/person-white.svg"
              alt="Person"
            />
            <img
              className="hidden size-24 dark:block"
              src="/svg/person-white.svg"
              alt="Person"
            />
            <img
              className="hidden size-24 dark:block"
              src="/svg/person-white.svg"
              alt="Person"
            />
            <img
              className="hidden size-24 dark:block"
              src="/svg/person-white.svg"
              alt="Person"
            />
            <img
              className="hidden size-24 dark:block"
              src="/svg/person-white.svg"
              alt="Person"
            />
            <img
              className="hidden size-24 dark:block"
              src="/svg/person-white.svg"
              alt="Person"
            />
            <img
              className="hidden size-24 dark:block"
              src="/svg/person-white.svg"
              alt="Person"
            />
            <img
              className="hidden size-24 dark:block"
              src="/svg/person-white.svg"
              alt="Person"
            />
            <img
              className="hidden size-24 dark:block"
              src="/svg/person-white.svg"
              alt="Person"
            />
            <img
              className="hidden size-24 dark:block"
              src="/svg/person-white.svg"
              alt="Person"
            />
            <img
              className="block size-24 dark:hidden"
              src="/svg/person-black.svg"
              alt="Person"
            />
            <img
              className="block size-24 dark:hidden"
              src="/svg/person-black.svg"
              alt="Person"
            />
            <img
              className="block size-24 dark:hidden"
              src="/svg/person-black.svg"
              alt="Person"
            />
            <img
              className="block size-24 dark:hidden"
              src="/svg/person-black.svg"
              alt="Person"
            />
            <img
              className="block size-24 dark:hidden"
              src="/svg/person-black.svg"
              alt="Person"
            />
            <img
              className="block size-24 dark:hidden"
              src="/svg/person-black.svg"
              alt="Person"
            />
            <img
              className="block size-24 dark:hidden"
              src="/svg/person-black.svg"
              alt="Person"
            />
            <img
              className="block size-24 dark:hidden"
              src="/svg/person-black.svg"
              alt="Person"
            />
            <img
              className="block size-24 dark:hidden"
              src="/svg/person-black.svg"
              alt="Person"
            />
            <img
              className="block size-24 dark:hidden"
              src="/svg/person-black.svg"
              alt="Person"
            />
          </div>
        }
        className="h-[35rem] w-full rounded-md"
      >
        <h3 className="absolute -top-16 text-4xl">
          <span className="font-bold text-red-600">7 a cada 10</span>{" "}
          portugueses <span className="font-bold text-red-600">NÃO</span> fazem
          exercício físico?
        </h3>
        <div className="grid grid-cols-5 gap-3 px-16">
          <img className="size-24" src="/svg/person-red.svg" alt="Person" />
          <img className="size-24" src="/svg/person-red.svg" alt="Person" />
          <img className="size-24" src="/svg/person-red.svg" alt="Person" />
          <img className="size-24" src="/svg/person-red.svg" alt="Person" />
          <img className="size-24" src="/svg/person-red.svg" alt="Person" />
          <img className="size-24" src="/svg/person-red.svg" alt="Person" />
          <img className="size-24" src="/svg/person-red.svg" alt="Person" />
          <img className="size-24" src="/svg/person-white.svg" alt="Person" />
          <img className="size-24" src="/svg/person-white.svg" alt="Person" />
          <img className="size-24" src="/svg/person-white.svg" alt="Person" />
        </div>
      </MaskContainer>
    </div>
  );
};

export default PersonProblemStats;
