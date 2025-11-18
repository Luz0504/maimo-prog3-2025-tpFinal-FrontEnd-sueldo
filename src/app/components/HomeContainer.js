"use client";

import { useForumContext } from "@/context/ForumContext";
import Link from "next/link";

const HomeContainer = () => {
  const { forums, loading, error } = useForumContext();

  return (
    <div
      className="px-6 py-8 max-w-3xl mx-auto
      min-h-screen text-purple-900 font-semibold"
    >
      {!loading && !error && (
        <>
          <h1
            className="text-3xl font-bold mb-6
            text-pink-500
          "
          >
            Foros
          </h1>

          <div className="flex flex-col gap-4">
            {forums.map((forum) => (
              <Link
                key={forum._id}
                href={`forums/${forum._id}`}
                className="
                  block p-5 rounded-2xl border-4
                  bg-cyan-50
                  hover:scale-[1.02] transition-all duration-200
                "
              >
                <h2 className="text-2xl font-bold text-purple-700 mb-2">
                  {forum.name}
                </h2>
                <p className="text-sm text-blue-600 mt-1">
                  {forum.description}
                </p>
              </Link>
            ))}
          </div>
        </>
      )}

      {loading && <p className="text-center py-6">Cargando foros...</p>}

      {!loading && error && (
        <p className="text-center py-6 text-red-500">Error cargando foros</p>
      )}
    </div>
  );
};

export default HomeContainer;
