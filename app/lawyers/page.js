import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Lawyers() {
  const lawyers = [
    {
      name: "John Doe, S.H., M.H.",
      position: "Managing Partner",
      specialization: "Corporate Law",
    },
    {
      name: "Jane Smith, S.H.",
      position: "Senior Associate",
      specialization: "Litigation",
    },
    {
      name: "Michael Tan, S.H.",
      position: "Associate",
      specialization: "Employment Law",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-12">
          Our Lawyers
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lawyers.map((lawyer, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 shadow-md"
            >
              <h2 className="text-2xl font-semibold">
                {lawyer.name}
              </h2>

              <p className="text-gray-600">
                {lawyer.position}
              </p>

              <p className="mt-3">
                {lawyer.specialization}
              </p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}