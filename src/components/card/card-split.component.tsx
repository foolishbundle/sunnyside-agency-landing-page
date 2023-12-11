import { Button } from '../ui';

type SplitCardProps = {
  srcSet: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  content: string;
};

export default function SplitCard({
  srcSet, imgSrc, imgAlt, title, content,
}: SplitCardProps) {
  return (
    <section className="card--split">
      <picture className="card__picture">
        <source media="(min-width: 768px)" srcSet={srcSet} />
        <img src={imgSrc} alt={imgAlt} />
      </picture>
      <div className="card__description">
        <h2 className="card__title">{title}</h2>
        <p className="card__paragraph">{content}</p>
        <Button
          className="button--custom"
          type="button"
          aria-label={`learn more about ${title}`}
        >
          Learn more
        </Button>
      </div>
    </section>
  );
}
