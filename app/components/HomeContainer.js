"use client";

import { useForumContext } from "@/context/ForumContext";
import Link from "next/link";

const HomeContainer = () => {
  const { forums, loading, error } = useForumContext();

  return (
    <div className="m-10 text-purple-900 font-semibold md:mx-5 md:p-5">
      {!loading && !error && (
        <>
          <h1 className="text-3xl font-bold mb-6 text-pink-500">Foros</h1>

          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 ">
            {forums.map((forum) => (
              <Link
                key={forum._id}
                href={`/forums/${forum._id}`}
                className="p-4 bg-cyan-50  rounded-2xl border-4 border-purple-900 shadow-sm hover:shadow-md shadow-pink-300 hover:scale-[1.02] duration-200 transition-all"
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

      {loading && <p className="text-center py-6 text-white">Cargando foros...</p>}

      {!loading && error && (
        <p className="text-center py-6 text-pink-500">Error cargando foros</p>
      )}
    </div>
  );
};

export default HomeContainer;
