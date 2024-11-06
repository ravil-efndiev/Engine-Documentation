interface Props {
  title: string;
  text: string;
  image: {
    src: string;
    alt: string;
  };
}

function Card({ title, text, image }: Props) {
  return (
    <div
      className={`
      flex flex-col items-center mx-auto
      bg-indigo-300 p-4 rounded-lg border border-indigo-500 
      shadow-gray-800 shadow-xl w-72 lg:w-96 md:w-80 sm:w-72
      hover:scale-[1.03] transition-transform`}
    >
      <img src={image.src} alt={image.alt} className="max-w-[90%] rounded" />
      <h3 className="mt-6 mb-2">{title}</h3>
      <p className="text-lg text-center max-w-[80%]">{text}</p>
    </div>
  );
}

export default Card;
