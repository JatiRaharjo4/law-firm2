import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto py-20 px-5">
        <h1 className="text-4xl font-bold">
          About Us
        </h1>

        <p className="mt-5">
          We provide trusted legal services
          across corporate, litigation,
          employment, and commercial law.
        </p>
      </main>

      <Footer />
    </>
  );
}