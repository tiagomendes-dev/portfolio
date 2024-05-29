import Image from "next/image";

type BannerProps = {
  title: string;
};

export default function Banner({ title }: BannerProps) {
  return (
    <div className="h-full w-full max-w-full">
      <div className="relative rounded-xl shadow">
        <span className="font-outline-2 absolute left-1/2 top-1/2 m-auto max-w-full -translate-x-1/2 -translate-y-1/2 text-center text-3xl font-black uppercase text-white lg:text-4xl xl:text-5xl">
          {title}
        </span>
        <Image
          src="/banner.svg"
          width={1920}
          height={1080}
          alt={title}
          className="w-full rounded-xl"
        />
      </div>
    </div>
  );
}
