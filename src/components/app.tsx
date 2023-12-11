import { Button, Content, Footer, Header } from './ui';
import hamburgerIcon from '../assets/icons/icon-hamburger.svg';
import arrowDownIcon from '../assets/icons/icon-arrow-down.svg';
import { NavigationBar, NavigationFooter, NavigationPopup } from './navigation';
import { CardSplit, CardWrap } from './card';
import { Testimonial, TestimonialItem } from './testimonial';
import { Gallery } from './gallery';
import { Logo } from './logo';
import { Social } from './social';

export default function App() {
  const cards = {
    split: [
      {
        srcSet: '/images/desktop/image-transform.jpg',
        imgSrc: '/images/mobile/image-transform.jpg',
        imgAlt: 'egg with yellow background',
        title: 'Transform your brand',
        content: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
      },
      {
        srcSet: '/images/desktop/image-stand-out.jpg',
        imgSrc: '/images/mobile/image-stand-out.jpg',
        imgAlt: 'pink stand with pink background',
        title: 'Stand out to the right audience',
        content: 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we\'ll build and extend your brand in digital places.'
      },
    ],
    wrap: [
      {
        srcSet: '/images/desktop/image-graphic-design.jpg',
        imgSrc: '/images/mobile/image-graphic-design.jpg',
        imgAlt: 'cherry with green background',
        title: 'Graphic Design',
        content: 'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients` attention.'
      },
      {
        srcSet: '/images/desktop/image-photography.jpg',
        imgSrc: '/images/mobile/image-photography.jpg',
        imgAlt: 'orange with blue background',
        title: 'Photography',
        content: 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
      },
    ],
  };

  const testimonials = [
    {
      imgSrc: '/images/image-emily.jpg',
      name: 'Emily R.',
      position: 'Marketing Director',
      text: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    },
    {
      imgSrc: '/images/image-thomas.jpg',
      name: 'Thomas S.',
      position: 'Chief Operating Officer',
      text: 'Sunnyside\'s enthusiasm coupled with their keen interest with our brand\'s success made it a satisfying and enjoyable experience.',
    },
    {
      imgSrc: '/images/image-jennie.jpg',
      name: 'Jennie F.',
      position: 'Business Owner',
      text: 'Incredible and result! Our sales increased over 400% when we work with Sunnyside. Highly recommended!',
    },
  ];

  const cardSplitElements = cards.split.map((card, index) => (
    <CardSplit
      key={index}
      srcSet={card.srcSet}
      imgSrc={card.imgSrc}
      imgAlt={card.imgAlt}
      title={card.title}
      content={card.content}
    />
  ));

  const cardWrapElements = cards.wrap.map((card, index) => (
    <CardWrap
      key={index}
      srcSet={card.srcSet}
      imgSrc={card.imgSrc}
      imgAlt={card.imgAlt}
      title={card.title}
      content={card.content}
    />
  ));

  const testimonialItemElements = testimonials.map((testimonial, index) => (
    <TestimonialItem
      key={index}
      imgSrc={testimonial.imgSrc}
      name={testimonial.name}
      text={testimonial.text}
      position={testimonial.position}
    />
  ));

  const enablePopupClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    const element = document.querySelector<HTMLElement>('.navigation--popup')!;
    const isEnabled = element.classList.contains('navigation--enabled');

    if (!isEnabled) {
      element.classList.add('navigation--enabled');
    } else {
      element.classList.remove('navigation--enabled');
    }
  };

  return (
    <>
      <Header>
        <div className="header__navbar">
          <Logo className="header__logo" />
          <Button
            className="button--menu"
            id="hamburgerButton"
            aria-label="open navigation popup"
            onClick={enablePopupClick}
          >
            <img src={hamburgerIcon} alt="" />
          </Button>
          <NavigationBar />
          <NavigationPopup />
        </div>
        <div className="header__content">
          <h1 className="header__title">We are creatives</h1>
          <img src={arrowDownIcon} alt="" />
        </div>
      </Header>
      <Content>
        <article className="card">
          {cardSplitElements}
          <div className="card__wrapper">
            {cardWrapElements}
          </div>
        </article>
        <Testimonial>
          {testimonialItemElements}
        </Testimonial>
        <Gallery />
      </Content>
      <Footer>
        <Logo className="footer__logo" />
        <NavigationFooter />
        <Social className="footer__social" />
      </Footer>
    </>
  );
}
