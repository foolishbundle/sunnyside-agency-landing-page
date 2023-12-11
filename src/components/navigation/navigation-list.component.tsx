import { Button } from '../ui';

export default function NavigationList() {
  return (
    <ul className="navigation__list">
      <li className="navigation__item"><a href="#about">About</a></li>
      <li className="navigation__item"><a href="#services">Services</a></li>
      <li className="navigation__item"><a href="#projects">Projects</a></li>
      <li className="navigation__item">
        <Button
          id="contactButton"
          className="button--primary"
          aria-label="contact us"
        >
          Contact
        </Button>
      </li>
    </ul>
  );
}
