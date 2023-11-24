import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import './styles.css';

const Review = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1500);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1 rounded-lg">
          <div className="m-8 border border-gray-800 rounded-lg shadow-sm dark:border-gray-700 bg-white dark:bg-gray-800">
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Very easy this was to integrate
                </h3>
                <p className="my-4">
                  If you care for your time, I hands down would go with this.
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img
                  className="rounded-full w-9 h-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div>Bonnie Green</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 ">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2 rounded-lg">
          <div className="m-8 border border-gray-800 rounded-lg shadow-sm dark:border-gray-700 bg-white dark:bg-gray-800">
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Very easy this was to integrate
                </h3>
                <p className="my-4">
                  If you care for your time, I hands down would go with this.
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img
                  className="rounded-full w-9 h-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div>Bonnie Green</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 ">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="keen-slider__slide number-slide3 rounded-lg">
          <div className="m-8 border border-gray-800 rounded-lg shadow-sm dark:border-gray-700 bg-white dark:bg-gray-800">
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Very easy this was to integrate
                </h3>
                <p className="my-4">
                  If you care for your time, I hands down would go with this.
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img
                  className="rounded-full w-9 h-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div>Bonnie Green</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 ">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="keen-slider__slide number-slide4 rounded-lg">
          <div className="m-8 border border-gray-800 rounded-lg shadow-sm dark:border-gray-700 bg-white dark:bg-gray-800">
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Very easy this was to integrate
                </h3>
                <p className="my-4">
                  If you care for your time, I hands down would go with this.
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img
                  className="rounded-full w-9 h-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div>Bonnie Green</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 ">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="keen-slider__slide number-slide5 rounded-lg">
          <div className="m-8 border border-gray-800 rounded-lg shadow-sm dark:border-gray-700 bg-white dark:bg-gray-800">
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Very easy this was to integrate
                </h3>
                <p className="my-4">
                  If you care for your time, I hands down would go with this.
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img
                  className="rounded-full w-9 h-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div>Bonnie Green</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 ">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="keen-slider__slide number-slide6 rounded-lg">
          <div className="m-8 border border-gray-800 rounded-lg shadow-sm dark:border-gray-700 bg-white dark:bg-gray-800">
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Very easy this was to integrate
                </h3>
                <p className="my-4">
                  If you care for your time, I hands down would go with this.
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img
                  className="rounded-full w-9 h-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div>Bonnie Green</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 ">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
