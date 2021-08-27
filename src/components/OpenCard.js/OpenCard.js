import Card from './../Blogers/Card';
import './OpenCard.css';
import card6Open from '../../images/card6Open.png';
import { useEffect } from 'react';
import ytOpen from '../../images/ytOpen.png';
import vkOpen from '../../images/vkOpen.png';
import instOpen from '../../images/instOpen.png';
import VideoCard from './VideoCard';

const OpenCard = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className='open-cont'>
      <div className='open-card'>
        <img src={card6Open} alt='card6' className='open-img' />
        <div className='open-right'>
          <h1>Максим Максимов</h1>
          <div className='open-subtitles'>
            <span className='open-block'>
              <img src={ytOpen} alt='open-subt' />{' '}
              <div className='ob-subt'>
                <span>3 160 000+</span>
                <div>Подписчиков</div>
              </div>
            </span>
            <span className='open-block'>
              <img src={vkOpen} alt='open-subt' />
              <div className='ob-subt'>
                <span>134 000+</span>
                <div>Подписчиков</div>
              </div>
            </span>
            <span className='open-block'>
              <img src={instOpen} alt='open-subt' />
              <div className='ob-subt'>
                <span>128 000+</span>
                <div>Подписчиков</div>
              </div>
            </span>
          </div>
          <div>
            <h3>Информация о канале</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
              elit lobortis pellentesque tellus mi nulla morbi. Risus, quis
              consectetur sagittis pharetra, urna, leo. Egestas porta habitasse
              fermentum nulla neque. At eget leo sed bibendum nunc. Diam neque,
              eu velit urna, feugiat vulputate elit justo. Lectus diam lacus vel
              donec sit. Vitae venenatis amet suscipit enim nec tincidunt sit
              lacus. Morbi orci, eget vitae tortor cras at eu duis. Sit est,
              cursus sem facilisis sed ac
            </p>
          </div>
        </div>
      </div>

      <div className='video'>
        <h1>Последние ролики</h1>
        <div className='videos'>
          {[0, 1, 2, 3, 4, 5].map((item, i) => (
            <VideoCard i={i + 1} key={i} />
          ))}
        </div>
      </div>

      <div className='blogers'>
        <h1>Другие блогеры</h1>

        <div className='cards'>
          {[0, 1, 2, 3].map((item, i) => (
            <Card i={i + 1} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenCard;
