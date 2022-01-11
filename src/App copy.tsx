import { useState } from 'react';
import './App.css';
import { Link } from './components/link';
import { PhotoStack } from './components/photo-stack';
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
    <div className="h-screen w-full flex justify-center bg-gradient-to-b from-pink-500 via-yellow-400 to-green-500 p-8">
      <main className="flex gap-8 max-h-96 text-xl p-8 border-4 border-red-400 bg-red-50 rounded-lg w-2/3 shadow-2xl">
        <img
          src={`/img/${IMAGES[imgIndex]}.png`}
          className="border-4 h-full border-red-400 rounded-lg cursor-pointer"
          onClick={rotateImgIndex}
        />

        <div className="flex flex-col justify-center w-2/3">
          <h1 className="text-6xl text-red-500 font-extrabold">
            Hi! I'm Anabella 👋🏻
          </h1>
          <Spacer height={6} />
          <p>I'm an Argentinian product engineer based in ⛰ Barcelona 🌊</p>
          <Spacer height={2} />
          <p>
            I love building clean and accessible UIs for products that
            intergrate into people's lives.
          </p>
          <Spacer height={6} />
          <section>
            <p>
              See{' '}
              <Link color="red" href="https://linkedin.com">
                where
              </Link>{' '}
              I've worked,{' '}
              <Link color="red" href="https://dev.to/anabella">
                read
              </Link>{' '}
              my articles, or{' '}
              <Link color="red" href="https://twitter.com/deutschevita">
                drop me a line!
              </Link>
            </p>
            <Spacer height={6} />
            <p>Thanks for stopping by, have a nice day!</p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
