export default async function ArticlePage({ params }) {
  const { slug } = await params;

  return (
    <main className="max-w-4xl mx-auto py-20">
      <h1 className="text-5xl font-bold">
        {slug}
      </h1>
    </main>
  );
}