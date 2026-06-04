import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen">
      <Image
        src="/images/hero.jpg"
        alt="Law Firm"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
        <h1 className="text-6xl font-bold">
          Trusted Legal Solutions
        </h1>

        <p className="mt-4 text-xl">
          Professional Legal Services in Indonesia
        </p>
      </div>
    </section>
  );
}