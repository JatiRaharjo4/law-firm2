const faqs = [
  {
    question: "How do I schedule a consultation?",
    answer: "Contact us via WhatsApp."
  },
  {
    question: "Do you handle corporate legal matters?",
    answer: "Yes."
  }
];

export default function FAQ() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold mb-10">
        FAQ
      </h1>

      {faqs.map((faq, index) => (
        <details
          key={index}
          className="border rounded-lg p-4 mb-4"
        >
          <summary className="font-semibold cursor-pointer">
            {faq.question}
          </summary>

          <p className="mt-3">
            {faq.answer}
          </p>
        </details>
      ))}
    </main>
  );
}