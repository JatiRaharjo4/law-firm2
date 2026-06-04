import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto py-20">
        <h1 className="text-4xl font-bold">
          Contact Us
        </h1>

        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 w-full"
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-3 w-full"
          />

          <textarea
            placeholder="Message"
            className="border p-3 w-full h-40"
          />

          <button className="bg-black text-white px-5 py-3">
            Send Message
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
}