import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function PracticeAreas() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto py-20">
        <h1 className="text-4xl font-bold">
          Practice Areas
        </h1>

        <ul className="mt-8 space-y-4">
          <li>Corporate Law</li>
          <li>Litigation</li>
          <li>Employment Law</li>
          <li>Intellectual Property</li>
        </ul>
      </main>

      <Footer />
    </>
  );
}