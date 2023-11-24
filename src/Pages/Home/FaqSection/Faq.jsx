import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

// Demo styles, see 'Styles' section below for some notes on use.

const Faq = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-around items-center gap-3">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {/* 1st */}
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How can I access Jim`s training programs?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                Visit our website, sign up for exclusive access to Jim`s expert
                training sessions, and tailor your workouts based on your
                fitness level, preferences, and goals.
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          {/* 2nd */}
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Are Jim`s workouts suitable for all fitness levels?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                Absolutely, Jim`s programs cater to all levels, offering
                beginner-friendly routines and advanced options for those
                seeking a challenge.
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          {/* 3rd */}
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Can I customize my workout with Jim?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                Yes, Jim`s programs are designed for personalization. Tailor
                your workouts based on your fitness level, preferences, and
                specific goals.
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {/* 1st */}
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  What nutritional guidance does Jim provide?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                Jim emphasizes a balanced diet. Access personalized nutrition
                advice and meal plans that complement your fitness goals and
                enhance overall well-being.
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          {/* 2nd */}
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How does Jim keep clients motivated?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                Jim uses positive reinforcement, goal-setting, and regular
                check-ins to create a supportive environment that keeps clients
                motivated and committed to their fitness journey.
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          {/* 3rd */}
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  What sets Jim`s training philosophy apart?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                Jim`s holistic approach integrates strength, flexibility, and
                cardiovascular exercises, ensuring a well-rounded fitness
                experience that promotes overall health and long-term
                well-being.
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Faq;
