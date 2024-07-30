import Image from "next/image";

type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  image,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="cursor-default flex flex-col  gap-3 bg-white p-4 max-md:w-[310px] w-[295px] h-[175px] hover:bg-secondary duration-500 ease-in-out text-primary hover:text-white">
      <div className="flex items-center justify-center gap-4">
        <Image src={image} alt={title} width={25} height={25} />
        <h2 className="uppercase font-bold">{title}</h2>
      </div>
      <p className="font-regular text-sm leading-[26px]">{description}</p>
    </div>
  );
}
