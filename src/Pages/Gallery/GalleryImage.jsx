import { useState } from 'react';

import PhotoAlbum from 'react-photo-album';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Loader from '../../Components/Shared/Loading/Loader';
import useGallery from '../../hooks/Gallery/useGallery';

export default function GalleryImage() {
  const [index, setIndex] = useState(-1);
  const [category, setCategory] = useState('');

  const [galleryImages, loading] = useGallery({ category });

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <div>
        <div className="text-center py-8">
          <h2 className="font-semibold dark:text-white lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">
            Images From Our Community
          </h2>
          <p className="font-normal text-base leading-6 dark:text-gray-400 text-gray-600 mt-4 lg:w-5/12 md:w-9/12 mx-auto">
            Follow us on instagram @
            <span className="underline cursor-pointer">followuspleaseee</span>
            and tag us to get featured on our timeline
          </p>
        </div>
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 w-fit mx-auto mb-8 items-center justify-center">
          <li className="m-2">
            <button
              onClick={() => setCategory('')}
              className={
                category === ''
                  ? 'inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active'
                  : 'inline-block px-4 py-3 text-white bg-blue-600 rounded-lg'
              }
              aria-current="page"
            >
              All
            </button>
          </li>
          <li className="m-2">
            <button
              onClick={() => setCategory('cycling')}
              className={
                category === 'cycling'
                  ? 'inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active'
                  : 'inline-block px-4 py-3 text-white bg-blue-600 rounded-lg'
              }
              aria-current="page"
            >
              Cycling
            </button>
          </li>
          <li className="me-2">
            <button
              onClick={() => setCategory('yoga')}
              className={
                category === 'yoga'
                  ? 'inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active'
                  : 'inline-block px-4 py-3 text-white bg-blue-600 rounded-lg'
              }
              aria-current="page"
            >
              Yoga
            </button>
          </li>
          <li className="m-2">
            <button
              onClick={() => setCategory('musculation')}
              className={
                category === 'musculation'
                  ? 'inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active'
                  : 'inline-block px-4 py-3 text-white bg-blue-600 rounded-lg'
              }
              aria-current="page"
            >
              Musculation
            </button>
          </li>
          <li className="m-2">
            <button
              onClick={() => setCategory('running')}
              className={
                category === 'running'
                  ? 'inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active'
                  : 'inline-block px-4 py-3 text-white bg-blue-600 rounded-lg'
              }
              aria-current="page"
            >
              Running
            </button>
          </li>
          <li className="m-2">
            <button
              onClick={() => setCategory('bodyBuilding')}
              className={
                category === 'bodyBuilding'
                  ? 'inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active'
                  : 'inline-block px-4 py-3 text-white bg-blue-600 rounded-lg'
              }
              aria-current="page"
            >
              Body Building
            </button>
          </li>
          <li className="m-2">
            <button
              onClick={() => setCategory('weightLifting')}
              className={
                category === 'weightLifting'
                  ? 'inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active'
                  : 'inline-block px-4 py-3 text-white bg-blue-600 rounded-lg'
              }
              aria-current="page"
            >
              Weight Lifting
            </button>
          </li>
          {/* cycling, yoga, musculation, running, bodyBuilding,  weightLifting */}
        </ul>
        <PhotoAlbum
          styles={{ backgroundColor: 'red' }}
          photos={galleryImages}
          layout="rows"
          spacing={30}
          targetRowHeight={250}
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
          slides={galleryImages}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div>
    </>
  );
}
