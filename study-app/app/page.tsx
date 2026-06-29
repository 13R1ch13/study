type CardProps = {
  title: string;
  description: string;
  color: string;
};

function Card({ title, description, color }: CardProps) {
  return (
    <div
      className="rounded-2xl p-6 shadow-md text-white"
      style={{ backgroundColor: color }}
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-sm opacity-90">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6 p-10">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        Демонстрация пропсов в React
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
        <Card
          title="Природа"
          description="Леса, горы и реки — неотъемлемая часть нашей жизни."
          color="#4CAF50"
        />
        <Card
          title="Технологии"
          description="Современные технологии меняют мир быстрее, чем мы успеваем за ними."
          color="#2196F3"
        />
        <Card
          title="Искусство"
          description="Искусство — это язык, который понимают все, независимо от культуры."
          color="#9C27B0"
        />
      </div>
    </main>
  );
}
