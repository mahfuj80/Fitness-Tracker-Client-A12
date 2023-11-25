import { Carousel } from 'react-carousel-minimal';
import img1 from '../../../assets/images/Banner/img1.jpg';
import img2 from '../../../assets/images/Banner/img2.jpg';
import img3 from '../../../assets/images/Banner/img3.jpg';
import img4 from '../../../assets/images/Banner/img4.jpg';
import img5 from '../../../assets/images/Banner/img5.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
  const data = [
    {
      image: img1,
      caption: 'Sculpting Body and Mind.',
    },
    {
      image: img2,
      caption: 'Champion Within: A Fitness Odyssey.',
    },
    {
      image: img3,
      caption: 'Harmony of Body, Mind, Spirit.',
    },
    {
      image: img4,
      caption: 'Ignite Your Inner Athlete.',
    },
    {
      image: img5,
      caption: 'Conquer Your Goals.',
    },
  ];

  const captionStyle = {
    fontSize: '3em',
    fontWeight: 'bold',
  };
  return (
    <div className="App mx-auto overflow-hidden ">
      <div style={{ textAlign: 'center' }}>
        <div
          className="relative"
          style={{
            padding: '0 auto',
          }}
        >
          <div className="absolute z-10 top-[20%] sm:top-1/2 left-[6%]">
            <p className="text-white sm:font-semibold px-12  sm:w-1/2 mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              quis recusandae enim at qui, cum praesentium non voluptate! Neque,
              tempore.
            </p>
            <Link to={'/classes'}>
              <button className="btn mt-4 btn-sm sm:btn sm:btn-primary btn-primary">
                View Classes
              </button>
            </Link>
          </div>
          <Carousel
            data={data}
            time={2000}
            width="full"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            captionPosition="top"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: 'center',
              minWidth: 'full',
              maxHeight: '500px',
              margin: 'auto',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
