import { useState } from 'react';
import './App.css';
import { Mountain } from './components/icons/mountain';
import { Ocean } from './components/icons/ocean';
import { Nav } from './components/nav';
import { Paragraph } from './components/paragraph';
import { Separator } from './components/separator';
import { Spacer } from './components/spacer';

const IMAGES = ['cat', 'sunset', 'bikes'];

function App(): JSX.Element | null {
  const [imgIndex, _setImgIndex] = useState<number>(0);

  const rotateImgIndex = () => {
    if (imgIndex === IMAGES.length - 1) {
      _setImgIndex(0);
      return;
    }

    _setImgIndex((currentImgIndex) => currentImgIndex + 1);
  };

  return (
    <div className="font-poster h-screen w-full flex flex-col items-center bg-gradient-to-b from-pink-500 via-yellow-400 to-green-500 pt-8">
      <div className="w-full h-full px-96 overflow-y-scroll">
        <Nav />

        <Spacer height={16} />
        <Separator />

        <Spacer height={16} />
        <h1 className="font-bold text-9xl text-center">HOLA! SOY ANABELLA.</h1>

        <Spacer height={8} />
        <Paragraph className="font-semibold">
          I'M A PRODUCT ENGINEER <br /> AND I'M BASED IN
          <div className="flex gap-4 w-full justify-center items-center">
            <Mountain /> BARCELONA <Ocean />
          </div>
        </Paragraph>

        <Spacer height={16} />
        <div>
          <Paragraph size="sm" className="font-normal max-w-4xl mx-auto">
            I LOVE BUILDING CLEAN AND ACCESSIBLE UIS FOR PRODUCTS THAT{' '}
            <span className="font-medium block">
              INTEGRATE INTO PEOPLE'S LIVES.
            </span>
          </Paragraph>
        </div>
        <Spacer height={16} />
        <Separator />
      </div>
    </div>
  );
}

export default App;
