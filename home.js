import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Sophie Mäder | Portfolio</title>
        <meta name="description" content="A simple Next.js portfolio" />
      </Head>
      
      <header className="text-center py-10 bg-blue-600 text-white shadow-lg">
        <h1 className="text-5xl font-extrabold">Sophie Mäder</h1>
        <p className="text-lg mt-2 italic">Web Developer | Designer | Creator</p>
      </header>
      
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-blue-600 pb-2">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow-md rounded-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold">Project 1</h3>
            <p className="text-gray-600 mt-2">A brief description of this project.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold">Project 2</h3>
            <p className="text-gray-600 mt-2">Another cool project description.</p>
          </div>
        </div>
      </section>
      
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-blue-600 pb-2">Contact</h2>
        <p className="text-lg">If you'd like to get in touch, reach out via email at <a href="mailto:your@email.com" className="text-blue-600 font-medium underline">your@email.com</a></p>
      </section>
    </div>
  );
}
