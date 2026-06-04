import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen">
      <Image
        src="/kGT6S73d-oLym8zoteAucyVAxgeZv8d5pWV6_4H_Qk1UqDiWNkzzQr37fRk8LDkvRAebS-rc4YOkXzH8AoTc2s3f3euZ7dp0WY450AHveYz1Bgyx2omnOad7O06DGDpm-rbL0Hh5vJ4sXGDOr_h1silNBoSYsJ9XjmaujKQaOj0.jpg"
        alt="Law Firm"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold">
          Trusted Legal Solutions
        </h1>

        <p className="mt-4 text-xl">
          Professional legal services for businesses and individuals.
        </p>
      </div>
    </section>
  );
}