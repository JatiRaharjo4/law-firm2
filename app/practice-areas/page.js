import Navbar from "../components/navbar";
import Footer from "../components/footer";

const services = [
  "Corporate Law",
  "Litigation",
  "Employment Law",
  "Intellectual Property",
  "Tax Law",
  "Family Law",
];

export default function PracticeAreas() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto py-20 px-5">
        <h1 className="text-4xl font-bold">
          Practice Areas
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {services.map((service) => (
            <div
              key={service}
              className="border rounded-lg p-6 shadow"
            >
              <h3 className="font-bold text-xl">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}