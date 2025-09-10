import Image from "next/image";
import Badge from "./Badge";

type ServiceCardProps = {
  id: number;
  title: string;
  step: string;
  description: string;
  imageSrc: string;
};

export default function ServiceCard({
  id,
  imageSrc,
  step,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className={`flex flex-col  ${id === 2 || id === 4 ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-3 bg-transparent p-4`}>
      <div className="flex flex-col items-start text-left gap-3 max-w-sm w-full">
        <Badge title={step} />
        <h2 className="font-bold text-white text-3xl">{title}</h2>
        <p className="text-lg font-normal text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="flex-1 w-full max-w-md sm:max-w-xl">
        <div className="bg-accent p-1.5 xs:p-2 sm:p-3 rounded-xl xs:rounded-2xl border border-white/10 overflow-hidden shadow-xl">
          <div className="relative w-full aspect-[4/2.5] xs:aspect-[4/2.3] sm:aspect-[4/2]">
            <Image
              src={imageSrc}
              alt={title}
              fill
              sizes="(max-width: 480px) 95vw, (max-width: 768px) 90vw, (min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
