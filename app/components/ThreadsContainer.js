"use client";

import { useForumContext } from "@/context/ForumContext";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const ThreadsContainer = ({ id }) => {
  const { threads, posts, loading, getPostsByThread, getUserID } =
    useForumContext();

  const thisThread = threads.find((thre) => thre._id === id);

  useEffect(() => {
    if (id) getPostsByThread(id);
  }, [id, getPostsByThread]);

  return (
    <section className="px-6 py-8 max-w-3xl mx-auto">
      {loading && "Cargando threads..."}

      {!loading && (
        <>
          <div className="flex flex-row justify-between items-center">
            <Link href={`/`}>
              <h1 className="font-bold text-center"> ￩ Volver a la home</h1>
            </Link>
            <h1 className="text-3xl font-bold text-center mb-6 text-pink-500">
              {thisThread.title ? thisThread.title : "Thread"}
            </h1>
          </div>

          <div className="flex flex-col gap-4">
            {posts.length > 0 ? (
              posts.map((pos) => {
                const user = getUserID(pos.user._id);
                const fecha = new Date(pos.updated_at).toLocaleDateString(
                  "es-AR",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                );
                const hora = new Date(pos.updated_at).toLocaleTimeString(
                  "es-AR",
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                );

                return (
                  <div
                    key={pos._id}
                    className="p-4 bg-white rounded-xl border-4 border-purple-900 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-row items-center gap-4">
                      <Image
                        src={`/assets/${user.avatar_url}`}
                        height={60}
                        width={60}
                        alt={user.username}
                        className="rounded-full border border-black"
                      />
                      <p className="text-lg text-black font-semibold">
                        {user.username}
                      </p>
                    </div>

                    <p className="text-gray-800 mt-1">{pos.content}</p>
                    <p className="text-purple-300 mt-1">
                      {fecha} a las: {hora}
                    </p>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-500">
                No hay publicaciones aún.
              </p>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default ThreadsContainer;
