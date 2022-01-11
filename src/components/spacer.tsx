import cn from 'classnames';

type SpacerProps = {
  height?: number;
  width?: number;
};

export function Spacer({ height, width }: SpacerProps): JSX.Element {
  return (
    <div
      className={cn({
        [`h-${height}`]: height !== undefined,
        [`h-${width}`]: width !== undefined,
      })}
    ></div>
  );
}
