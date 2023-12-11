import facebookIcon from '../../assets/icons/icon-facebook.svg';
import instagramIcon from '../../assets/icons/icon-instagram.svg';
import twitterIcon from '../../assets/icons/icon-twitter.svg';
import pinterestIcon from '../../assets/icons/icon-pinterest.svg';

export default function Social(props: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul {...props}>
      <li><a href="#"><img src={facebookIcon} alt="facebook's logo" /></a></li>
      <li>
        <a href="#"><img src={instagramIcon} alt="instagram's logo" /></a>
      </li>
      <li><a href="#"><img src={twitterIcon} alt="twitter's logo" /></a></li>
      <li>
        <a href="#"><img src={pinterestIcon} alt="pinterest's logo" /></a>
      </li>
    </ul>
  );
}
