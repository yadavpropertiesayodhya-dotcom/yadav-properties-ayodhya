export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8">
        Our Properties
      </h1>

      <div className="space-y-6">

        <div className="border border-yellow-500 rounded-xl p-6">
          <h2 className="text-2xl font-bold">Residential Plot</h2>
          <p>📍 Ayodhya, Uttar Pradesh</p>
          <p>Price on Request</p>

          <a
            href="/property/1"
            className="inline-block mt-4 bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold"
          >
            View Details
          </a>
        </div>

        <div className="border border-yellow-500 rounded-xl p-6">
          <h2 className="text-2xl font-bold">Commercial Plot</h2>
          <p>📍 Ayodhya, Uttar Pradesh</p>
          <p>Price on Request
          </p>

          <a
            href="/property/2"
            className="inline-block mt-4 bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold"
          >
            View Details
          </a>
        </div>

        <div className="border border-yellow-500 rounded-xl p-6">
          <h2 className="text-2xl font-bold">Premium Land</h2>
          <p>📍 Ayodhya, Uttar Pradesh</p>
          <p>Price on Request</p>

          <a
            href="/property/3"
            className="inline-block mt-4 bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold"
          >
            View Details
          </a>
        </div>

      </div>
    </main>
  );
}