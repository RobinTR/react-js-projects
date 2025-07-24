export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          About This Website
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-4">
          Welcome! This site lets you explore countries around the world using
          the{" "}
          <span className="font-semibold text-rose-600">
            REST Countries API
          </span>
          .
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Find details like country names, capitals, regions, populations,
          flags, and more. Whether you're curious about a specific country or
          want to compare global regions, our interactive explorer makes it
          simple.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          This modern web app is built with React Router v7 for smooth
          navigation and Tailwind CSS for a clean, responsive design.
        </p>
      </div>
    </div>
  );
}
