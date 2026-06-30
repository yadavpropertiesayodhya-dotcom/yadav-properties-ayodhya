export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-yellow-500 mb-6">
          About Yadav Properties Ayodhya
        </h1>

        <p className="text-lg text-gray-700 leading-8">
          Yadav Properties Ayodhya एक भरोसेमंद रियल एस्टेट कंपनी है जो
          Ayodhya में Residential और Commercial Properties उपलब्ध कराती है।
          हमारा उद्देश्य ग्राहकों को सही कीमत पर सुरक्षित और कानूनी प्रॉपर्टी
          उपलब्ध कराना है।
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">हमारी सेवाएँ</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>🏡 Residential Plots</li>
            <li>🏢 Commercial Plots</li>
            <li>📜 Registry & Documentation</li>
            <li>💼 Investment Consultancy</li>
          </ul>
        </div>
      </div>
    </main>
  );
}