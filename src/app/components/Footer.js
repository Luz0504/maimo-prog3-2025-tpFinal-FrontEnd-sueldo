import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 mt-10 py-4">
      <div className="px-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} WindieCity — Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
