"use client";

import { useForumContext } from "@/context/ForumContext";
import Image from "next/image";

const UsersContainer = () => {
  const { users } = useForumContext();

  return (
    <section className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Usuarios</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user._id}
            className="p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden mb-3 border">
              <Image
                src={`/assets/${user.avatar_url}`}
                height={200}
                width={200}
                alt={user.username}
                className="object-cover w-full h-full"
              />
            </div>

            <h2 className="text-lg font-semibold text-gray-800">
              {user.username}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UsersContainer;
