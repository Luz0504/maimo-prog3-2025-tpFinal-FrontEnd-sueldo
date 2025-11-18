"use client";

import { useForumContext } from "@/context/ForumContext";
import Link from "next/link";

const HomeContainer = () => {
  const { forums, loading, error } = useForumContext();

  if (loading) return <p className="text-center py-6">Cargando foros...</p>;
  if (error) return <p className="text-center py-6 text-red-500">Error cargando foros</p>;

  return (
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Foros</h1>

      <div className="flex flex-col gap-4">
        {forums.map((forum) => (
          <Link
            key={forum._id}
            href={`forums/${forum._id}`}
            className="block p-4 border rounded-xl shadow-sm bg-white hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-1">{forum.name}</h2>
            <p className="text-gray-600 text-sm">{forum.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeContainer;
