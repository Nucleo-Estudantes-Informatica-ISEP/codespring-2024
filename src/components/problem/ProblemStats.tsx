import { MaskContainer } from "@/lib/components/ui/svg-mask-effect";

const ProblemStats: React.FC = () => {
  return (
    <div className="flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden">
      <h2 className="text-5xl font-bold">Sabias que...</h2>
      <MaskContainer
        revealText={
          <div className="grid grid-cols-5 gap-3">
            <img
              className="hidden size-20 dark:block"
              src="/svg/person-white.svg"
              alt="Person"
            />
            <img
              className="hidden size-20 dark:block"
              src="/svg/person-white.svg"
              alt="Person"
            />
            <img
              className="hidden size-20 dark:block"
              src="/svg/person-white.svg"
              alt="Person"
            />
            <img
              className="hidden size-20 dark:block"
              src="/svg/person-white.svg"
              alt="Person"
            />
            <img
              className="hidden size-20 dark:block"
              src="/svg/person-white.svg"
              alt="Person"
            />
            <img
              className="hidden size-20 dark:block"
              src="/svg/person-white.svg"
              alt="Person"
            />
            <img
              className="hidden size-20 dark:block"
              src="/svg/person-white.svg"
              alt="Person"
            />
            <img
              className="hidden size-20 dark:block"
              src="/svg/person-white.svg"
              alt="Person"
            />
            <img
              className="hidden size-20 dark:block"
              src="/svg/person-white.svg"
              alt="Person"
            />
            <img
              className="hidden size-20 dark:block"
              src="/svg/person-white.svg"
              alt="Person"
            />
            <img
              className="block size-20 dark:hidden"
              src="/svg/person-black.svg"
              alt="Person"
            />
            <img
              className="block size-20 dark:hidden"
              src="/svg/person-black.svg"
              alt="Person"
            />
            <img
              className="block size-20 dark:hidden"
              src="/svg/person-black.svg"
              alt="Person"
            />
            <img
              className="block size-20 dark:hidden"
              src="/svg/person-black.svg"
              alt="Person"
            />
            <img
              className="block size-20 dark:hidden"
              src="/svg/person-black.svg"
              alt="Person"
            />
            <img
              className="block size-20 dark:hidden"
              src="/svg/person-black.svg"
              alt="Person"
            />
            <img
              className="block size-20 dark:hidden"
              src="/svg/person-black.svg"
              alt="Person"
            />
            <img
              className="block size-20 dark:hidden"
              src="/svg/person-black.svg"
              alt="Person"
            />
            <img
              className="block size-20 dark:hidden"
              src="/svg/person-black.svg"
              alt="Person"
            />
            <img
              className="block size-20 dark:hidden"
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
          desporto?
        </h3>
        <div className="grid grid-cols-5 gap-3 px-16">
          <img className="size-20" src="/svg/person-red.svg" alt="Person" />
          <img className="size-20" src="/svg/person-red.svg" alt="Person" />
          <img className="size-20" src="/svg/person-red.svg" alt="Person" />
          <img className="size-20" src="/svg/person-red.svg" alt="Person" />
          <img className="size-20" src="/svg/person-red.svg" alt="Person" />
          <img className="size-20" src="/svg/person-red.svg" alt="Person" />
          <img className="size-20" src="/svg/person-red.svg" alt="Person" />
          <img className="size-20" src="/svg/person-white.svg" alt="Person" />
          <img className="size-20" src="/svg/person-white.svg" alt="Person" />
          <img className="size-20" src="/svg/person-white.svg" alt="Person" />
        </div>
      </MaskContainer>
    </div>
  );
};

export default ProblemStats;
