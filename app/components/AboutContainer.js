import Image from "next/image";

const AboutContainer = () => {
  return (
    <div className="mx-5 my-10 text-white bg-black/80 p-6 rounded-2xl border md:mx-20 md:p-20">
      
      <div className="flex flex-col justify-center items-center gap-4 md:flex-row md:gap-5">
        <h1 className="text-3xl font-black uppercase text-center md:text-5xl">
          ¡Bienvenido a <span className="text-purple-400">WindieCity</span>!
        </h1>

        <Image
          src={"/assets/pfp-final.png"}
          width={130}
          height={200}
          alt="holi"
          className="w-28 h-auto md:w-[130px]"
        />
      </div>
      <h2 className="text-2xl font-bold mt-6 text-blue-300 md:text-3xl">
        Quién soy
      </h2>
      <p className="text-base leading-relaxed mt-2 text-white md:text-xl">
        Me llamo María Luz Sueldo, tengo 21 años y estudio Tecnología Multimedial
        en la Universidad de Maimónides.
      </p>
      <h2 className="text-2xl font-bold mt-6 text-blue-300 md:text-3xl">
        Sobre este proyecto
      </h2>
      <p className="text-base leading-relaxed mt-2 text-pink-100 md:text-xl">
        Esta página web fue inspirada en el foro "Earthboundeternal.net" del cual
        formo parte. Siempre me gustó la estética de los foros y las páginas web
        de los años 2000, y por eso decidí crear esta página como mi proyecto final
        de la materia de Programación 3.
      </p>
    </div>
  );
};

export default AboutContainer;
