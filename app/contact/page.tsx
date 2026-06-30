export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-yellow-500 mb-6">
          Contact Us
        </h1>

        <p className="text-lg mb-4">
          📞 Mobile: +91 7084455074
        </p>

        <p className="text-lg mb-6">
          📍 Ayodhya, Uttar Pradesh
        </p>

        <a
          href="https://wa.me/917084455074?text=Namaste,%20Mujhe%20property%20ke%20baare%20mein%20jaankari%20chahiye."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          💬 Chat on WhatsApp
        </a>

        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps?q=Ayodhya,Uttar%20Pradesh&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  );
}