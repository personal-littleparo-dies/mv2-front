import { useEffect, useId } from "react";
import P5 from "p5";
import 'p5/lib/addons/p5.sound';

const visualisation = ({ width, height }: { width: number; height: number }) => {
  const sketch = (p5: P5) => {
    p5.setup = () => {
      p5.createCanvas(width, height);
    };
    p5.draw = () => {
      p5.line(0, 0, width, height);
    };
  };

  const p5 = new P5(sketch);
};

const P5Component = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  const id = useId();

  useEffect(() => {
    visualisation({
      width,
      height,
    });
  }, [height, width]);

  return <div id={id}></div>;
};

export default P5Component;