import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-black">
          Yadav Properties Ayodhya
        </h1>

        <p className="mt-6 text-xl text-gray-900 max-w-2xl mx-auto">
          Buy • Sell • Rent Properties in Ayodhya with Trust.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/properties"
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800"
          >
            View Properties
          </Link>

          <Link
            href="/contact"
            className="bg-white text-black px-8 py-3 rounded-lg border border-black hover:bg-gray-100"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <div className="text-5xl">🏡</div>
            <h3 className="text-2xl font-bold mt-4">
              Residential Plots
            </h3>
            <p className="mt-3 text-gray-600">
              Premium residential plots in Ayodhya.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <div className="text-5xl">🏢</div>
            <h3 className="text-2xl font-bold mt-4">
              Commercial Property
            </h3>
            <p className="mt-3 text-gray-600">
              Shops, offices and commercial land.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <div className="text-5xl">📞</div>
            <h3 className="text-2xl font-bold mt-4">
              Property Consultation
            </h3>
            <p className="mt-3 text-gray-600">
              Expert guidance for buying and selling.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-3xl font-bold text-yellow-500">500+</h3>
              <p>Happy Clients</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-3xl font-bold text-yellow-500">200+</h3>
              <p>Properties Sold</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-3xl font-bold text-yellow-500">100%</h3>
              <p>Trusted Deals</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-3xl font-bold text-yellow-500">24×7</h3>
              <p>Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white text-center py-16">
        <h2 className="text-4xl font-bold">
          Looking for Your Dream Property?
        </h2>

        <p className="mt-4 text-lg">
          Contact Yadav Properties Ayodhya Today
        </p>

        <a
          href="https://wa.me/917084455074"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-green-500 px-8 py-3 rounded-lg font-bold hover:bg-green-600"
        >
          💬 Chat on WhatsApp
        </a>
      </section>
    </main>
  );
}