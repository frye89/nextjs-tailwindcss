import Head from "next/head";

export default function Home() {
  return (
    <div className="container mx-auto text-center">
      <Head>
        <title>Create Next App & Tailwindcss</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Description" content="Create Next App & Tailwindcss" />
      </Head>

      <main>
        <h1 className="text-4xl pt-32">
          Welcome to{" "}
          <span className="text-blue-700 font-semibold">Next.js</span>, with{" "}
          <span className="text-green-700 font-semibold">Tailwindcss!</span>
        </h1>
      </main>
    </div>
  );
}
