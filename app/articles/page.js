import Link from "next/link";

const articles = [
  {
    title: "Understanding Business Contracts",
    slug: "understanding-business-contracts"
  },
  {
    title: "Legal Guide for Startups",
    slug: "legal-guide-for-startups"
  }
];

export default function Articles() {
  return (
    <main className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold mb-10">
        Articles
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {articles.map(article => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="border p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold">
              {article.title}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}