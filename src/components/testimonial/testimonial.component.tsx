export default function Testimonial({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <article className="testimonial">
      <h2 className="testimonial__title">Client Testimonials</h2>
      <ul className="testimonial__list">{children}</ul>
    </article>
  );
}
