"use client";

import { useForumContext } from "@/context/ForumContext";
import { useEffect } from "react";
import Image from "next/image";

const ThreadsContainer = ({ id }) => {
  const { threads, posts, loading, error, getPostsByThread, getUserID } =
    useForumContext();

  const thisThread = threads.find((thre) => thre._id === id);

  useEffect(() => {
    if (id) getPostsByThread(id);
  }, [id, getPostsByThread]);

  if (loading)
    return (
      <p className="text-center py-6 text-gray-600">Cargando threads...</p>
    );

  if (error)
    return <p className="text-center py-6 text-red-500">Error al cargar</p>;

  return (
    <section className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        {thisThread?.title ?? "Thread"}
      </h1>

      <div className="flex flex-col gap-4">
        {posts.length > 0 ? (
          posts.map((pos) => {
            const user = getUserID(pos.user._id);

            return (
              <div
                key={pos._id}
                className="p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-row items-center gap-4">
                <Image
                src={`/assets/${user.avatar_url}`}
                height={60}
                width={60}
                alt={user}
                className="rounded-full border border-black"
                />
                <p className="text-sm text-black font-semibold">
                  {user.username}
                </p>
                </div>

                <p className="text-gray-800 mt-1">{pos.content}</p>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500">No hay publicaciones aún.</p>
        )}
      </div>
    </section>
  );
};

export default ThreadsContainer;
