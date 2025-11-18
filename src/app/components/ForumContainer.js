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

  return (
    <section className="px-6 py-8 max-w-3xl mx-auto">
      {!loading && !error && thisForum && (
        <>
          <div className="flex flex-row justify-between items-center">
            <Link href={"/"}>
              <h1 className="font-bold text-center"> ￩ Volver a la home</h1>
            </Link>
            <h1 className="text-3xl font-bold text-center mb-6 text-pink-500">
              {thisForum.name}
            </h1>
          </div>

          <div className="flex flex-col gap-4">
            {threads.length > 0 ? (
              threads.map((thread) => (
                <Link
                  key={thread._id}
                  href={`/threads/${thread._id}`}
                  className="p-4 bg-cyan-50  rounded-2xl border-4 border-purple-900 shadow-sm hover:shadow-md shadow-pink-300 hover:scale-[1.02] duration-200 transition-all"
                >
                  <p className="text-xl font-bold text-purple-900">
                    {thread.title}
                  </p>
                </Link>
              ))
            ) : (
              <p className="text-center text-white">
                No hay threads en este foro todavía.
              </p>
            )}
          </div>
        </>
      )}

      {loading && (
        <p className="text-center py-6 text-white">Cargando threads...</p>
      )}

      {!loading && error && (
        <p className="text-center py-6 text-pink-500">Error al cargar</p>
      )}
    </section>
  );
};

export default ForumContainer;
