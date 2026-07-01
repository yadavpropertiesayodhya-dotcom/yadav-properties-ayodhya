export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-yellow-600">
          Yadav Properties Ayodhya
        </h1>

        <p className="mt-4 text-lg text-gray-700">
          Welcome to our Real Estate Website
        </p>

        <a
          href="https://wa.me/917084455074?text=Namaste,%20Mujhe%20property%20ke%20baare%20mein%20jaankari%20chahiye."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          💬 Chat on WhatsApp
        </a>
      </div>
    </main>
  );
}