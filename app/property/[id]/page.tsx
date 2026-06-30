interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function PropertyDetails({ params }: Props) {
  const { id } = await params;

  let title = "";
  let price = "";
  let location = "Ayodhya, Uttar Pradesh";
  let description = "";
if (id === "1") {
  title = "Residential Plot";
  price = "Price on Request";
  description = "Premium residential plot in a prime location.";
} else if (id === "2") {
  title = "Commercial Plot";
  price = "Price on Request";
  description = "Best commercial investment opportunity.";
} else if (id === "3") {
  title = "Premium Land";
  price = "Price on Request";
  description = "Verified land with clear documents.";
}

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-yellow-400">{title}</h1>

      <img
        src="https://placehold.co/800x500"
        alt={title}
        className="w-full max-w-4xl rounded-xl mt-6"
      />

      <p className="mt-6 text-xl">📍 {location}</p>
      <p className="mt-3 text-xl font-bold">{price}</p>
      <p className="mt-6 text-gray-300">{description}</p>
    </main>
  );
}