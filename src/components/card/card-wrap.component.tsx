type CardWrapProps = {
  srcSet: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  content: string;
};

export default function CardWrap({
  srcSet, imgSrc, imgAlt, title, content,
}: CardWrapProps) {
  return (
    <section className="card--wrap">
      <picture className="card__picture">
        <source media="(min-width: 768px)" srcSet={srcSet} />
        <img src={imgSrc} alt={imgAlt} />
      </picture>
      <div className="card__description">
        <h2 className="card__title">{title}</h2>
        <p className="card__paragraph">{content}</p>
      </div>
    </section>
  );
}
