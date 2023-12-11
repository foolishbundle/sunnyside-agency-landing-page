type TestimonialItemProps = {
  imgSrc: string;
  name: string;
  text: string;
  position: string;
};

export default function TestimonialItem({
  imgSrc, name, text, position,
}: TestimonialItemProps) {
  return (
    <li className="testimonial__item">
      <img className="testimonial__avatar" src={imgSrc} alt={name} />
      <p className="testimonial__paragraph">{text}</p>
      <p className="testimonial__name">{name}</p>
      <p className="testimonial__position">{position}</p>
    </li>
  );
}
