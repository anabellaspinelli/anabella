export function Nav(): JSX.Element {
  return (
    <nav className="flex justify-around w-full text-center font-light">
      <div className="flex flex-col text-5xl w-1/3">
        <div>
          SEE <br /> WHERE I'VE
        </div>
        <div className="font-bold hover:bg-black hover:bg-opacity-70 hover:text-white transition-colors duration-200">
          <a href="https://google.com" target="_blank" rel="noopener noreferer">
            WORKED
          </a>
        </div>
      </div>
      <div className="flex flex-col text-5xl w-1/3">
        <div>READ</div>
        <div>MY</div>
        <div className="font-bold hover:bg-black hover:bg-opacity-70 hover:text-white transition-colors duration-200">
          <a href="https://google.com" target="_blank" rel="noopener noreferer">
            ARTICLES
          </a>
        </div>
      </div>
      <div className="flex flex-col text-5xl w-1/3">
        <div>DROP</div>
        <div>ME</div>
        <a
          className="font-bold hover:bg-black hover:bg-opacity-70 hover:text-white transition-colors duration-200"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferer"
        >
          A LINE
        </a>
      </div>
    </nav>
  );
}
