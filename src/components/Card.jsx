const Card = ({ children, className, onClick }) => {
  return (
    <article
      className={`bg-[#3C5B6F] p-6 rounded-lg transition hover:opacity-80 hover:-translate-y-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </article>
  );
};

export default Card;
