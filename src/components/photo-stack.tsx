export function PhotoStack(): JSX.Element {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="p-1 bg-white absolute transform shadow-xl rotate-3">
        <img src="/img/bikes.png" className="w-96" />
      </div>
      <div className="p-1 bg-white absolute transform shadow-xl -rotate-6">
        <img src="/img/sunset.png" className="w-96" />
      </div>
      <div className="p-1 bg-white absolute transform shadow-xl rotate-12">
        <img src="/img/cat.png" className="w-96" />
      </div>
    </div>
  );
}
