"use client";

import axios from "axios";
import {
  useState,
  useContext,
  createContext,
  useEffect,
  useCallback,
} from "react";

const ForumContext = createContext();

export const ForumContextProvider = ({ children }) => {
  const API = process.env.NEXT_PUBLIC_API_URL;

  const [forums, setForums] = useState([]);
  const [threads, setThreads] = useState([]);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getAllForums = useCallback(async () => {
    try {
      const res = await axios.get(`${API}/forums`);
      setForums(res.data.forums);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, [API]);

  const getThreadsByForum = useCallback(
    async (forumId) => {
      try {
        const res = await axios.get(`${API}/forums/${forumId}/threads`);
        setThreads(res.data.threads);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    },
    [API]
  );

  const getPostsByThread = useCallback(
    async (threadId) => {
      try {
        const res = await axios.get(`${API}/threads/${threadId}/posts`);
        setPosts(res.data.posts);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    },
    [API]
  );

  const getAllUsers = useCallback(async () => {
    try {
      const res = await axios.get(`${API}/users`);
      setUsers(res.data.users);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, [API]);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      await getAllForums();
      await getAllUsers();
      setLoading(false);
    };

    init();
  }, [getAllForums, getAllUsers]);

  return (
    <ForumContext.Provider
      value={{
        forums,
        threads,
        posts,
        users,
        loading,
        error,
        getAllForums,
        getThreadsByForum,
        getPostsByThread,
        getAllUsers,
      }}
    >
      {children}
    </ForumContext.Provider>
  );
};

export const useForumContext = () => {
  const context = useContext(ForumContext);
  if (!context) {
    throw new Error(
      "useForumContext debe usarse dentro de ForumContextProvider"
    );
  }
  return context;
};

export default ForumContext;
