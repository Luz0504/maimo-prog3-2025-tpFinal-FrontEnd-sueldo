"use client";

import { useForumContext } from "@/context/ForumContext";
import { useEffect } from "react";
import Link from "next/link";

const ForumContainer = ({ id }) => {
  const { forums, threads, loading, error, getThreadsByForum } =
    useForumContext();

  const thisForum = forums.find((foru) => foru._id === id);

  useEffect(() => {
    if (id) getThreadsByForum(id);
  }, [id, getThreadsByForum]);

  if (loading)
    return <p className="text-center py-6 text-gray-600">Cargando threads...</p>;

  if (error)
    return <p className="text-center py-6 text-red-500">Error al cargar</p>;

  if (!thisForum)
    return <p className="text-center py-6 text-gray-500">Foro no encontrado</p>;

  return (
    <section className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        {thisForum.name}
      </h1>

      <div className="flex flex-col gap-4">
        {threads.length > 0 ? (
          threads.map((thread) => (
            <Link
              key={thread._id}
              href={`/threads/${thread._id}`}
              className="block p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-lg font-medium text-gray-800">
                {thread.title}
              </p>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No hay threads en este foro todavía.
          </p>
        )}
      </div>
    </section>
  );
};

export default ForumContainer;
