import card1 from '../../images/videoCard1.png';
import card2 from '../../images/videoCard2.png';
import card3 from '../../images/videoCard3.png';
import card4 from '../../images/videoCard4.png';
import card5 from '../../images/videoCard5.png';
import card6 from '../../images/videoCard6.png';
import play from '../../images/play.png';

const VideoCard = ({ i }) => {
  let img;

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
    default:
      break;
  }
  return (
    <div className='video-card'>
      <img src={img} alt='video card' className='video-img' />
      <img src={play} alt='video play' className='video-play' />
    </div>
  );
};

export default VideoCard;
