import yt from '../../images/yt.png';
import vkCard from '../../images/vkCard.png';
import instCard from '../../images/instCard.png';
import card1 from '../../images/card1.png';
import card2 from '../../images/card2.png';
import card3 from '../../images/card3.png';
import card4 from '../../images/card4.png';
import card5 from '../../images/card5.png';
import card6 from '../../images/card6.png';
import card7 from '../../images/card7.png';
import card8 from '../../images/card8.png';
import Hoc from './Hoc';

const Card = ({ i }) => {
  let img;
  let filter;

  switch (i) {
    case 1:
      img = card1;
      break;
    case 2:
      img = card2;
      break;
    case 3:
      img = card3;
      break;
    case 4:
      img = card4;
      break;
    case 5:
      img = card5;
      break;
    case 6:
      img = card6;
      break;
    case 7:
      img = card7;
      break;
    case 8:
      img = card8;
      break;

    default:
      break;
  }

  if (i !== 6) filter = { filter: 'opacity(0.4)' };

  return (
    <Hoc i={i}>
      <img src={img} alt='card' className='card-img' style={filter} />
      <span className='card-title'>{i !== 6 && <h2>Макс Максимов</h2>}</span>
      <div className='card-subtitles'>
        {i !== 6 && (
          <>
            <span>
              <img src={yt} alt='card' /> <span>3 160 000+</span>
            </span>
            <span>
              <img src={vkCard} alt='card' /> <span>134 000+</span>
            </span>
            <span>
              <img src={instCard} alt='card' /> <span>128 000+</span>
            </span>
          </>
        )}
      </div>
    </Hoc>
  );
};

export default Card;
