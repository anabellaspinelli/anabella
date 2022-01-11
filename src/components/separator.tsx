export function Separator(): JSX.Element {
  return (
    <div
      role="presentation"
      className="flex justify-around align-center w-full pt-8 h-10"
    >
      <div className="border-t-8 border-black w-2/5"></div>
      <div className="w-1/5 text-9xl font-medium text-center transform -translate-y-10">
        *
      </div>
      <div className="border-t-8 border-black w-2/5"></div>
    </div>
  );
}
