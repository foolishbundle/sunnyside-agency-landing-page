import classNames from 'classnames';

export default function Header(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <header
      {...props}
      className={classNames('header', props.className)}
    >
      {props.children}
      <picture className="header__picture">
        <source
          srcSet="/images/desktop/image-header.jpg"
          media="(min-width: 768px)"
        />
        <img
          src="/images/mobile/image-header.jpg"
          alt="orange with blue background"
        />
      </picture>
    </header>
  );
}
