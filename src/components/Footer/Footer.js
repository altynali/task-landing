import logo from '../../images/logo.png';
import vk from '../../images/vk.png';
import inst from '../../images/inst.png';

import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='footer-blocks'>
          <div className='footer-block'>Cвязаться с нами</div>
          <div className='footer-block'>reklama@wildjam.ru</div>
          <div className='footer-block'>ул. Сущевская, д. 27, стр. 2</div>
          <div className='footer-block'>+7 (499) 393-39-62</div>
        </div>
      </div>
      <div className='footer-sites'>
        <img src={vk} alt='vk' />
        <img src={inst} alt='inst' />
      </div>
    </>
  );
};

export default Footer;
