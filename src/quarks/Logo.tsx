import Container from 'quarks/Container';
import type { BasicProps } from 'quarks/interpolations/basic';

import type { FC } from 'react';

const StyledLogo: FC<BasicProps> = ({ ...props }) => {
  // const [angle, setAngle] = useState(0);

  // const handleMouseMove = (e: MouseEvent) => {
  //   const mouseX = e.pageX - document.body.offsetLeft;
  //   const mouseY = e.pageY - document.body.offsetTop;
  //   const rect = document.querySelector('#logo-svg')?.getBoundingClientRect();
  //   if (rect) {
  //     const midX = rect.left + (rect.right - rect.left) / 2;
  //     const midY = rect.top + (rect.bottom - rect.top) / 2;
  //     const degree = (Math.atan2(midY - mouseY, midX - mouseX) * 180) / Math.PI;

  //     return requestAnimationFrame(() => setAngle(degree));
  //   }
  // };

  // useEffect(() => {
  //   document.body.addEventListener('mousemove', e => requestAnimationFrame(() => handleMouseMove(e)), false);

  //   return () => {
  //     document.body.removeEventListener('mousemove', e => requestAnimationFrame(() => handleMouseMove(e)), false);
  //   };
  // });
  const size = '128px';

  return (
    <Container width={size} height={size} {...props}>
      <svg
        id="logo-svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 89.45 89.45"
      >
        <defs>
          <style>{'.cls-1{fill:url(#linear-gradient);}'}</style>
          <linearGradient
            // gradientTransform={`rotate(${angle}, 30, 30)`}
            id="linear-gradient"
            x1="-0.8"
            y1="-1.15"
            x2="85.73"
            y2="86.04"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#40367a" />
            <stop offset="0.63" stopColor="#195a76" />
            <stop offset="1" stopColor="#007173" />
          </linearGradient>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              className="cls-1"
              d="M0,0V89.45H89.45V0ZM56.42,68.1,50.65,82.44a1.34,1.34,0,0,1-1.34.87h-14a7.67,7.67,0,1,1,7.67-7.59A7.79,7.79,0,0,1,42.18,79a1.9,1.9,0,0,0,1.7,2.73h.66a2.18,2.18,0,0,0,2.08-2.91L30.76,39.26a1.41,1.41,0,0,1,1.29-1.94H43.58a1.38,1.38,0,0,1,1.28.87L56.42,67A1.39,1.39,0,0,1,56.42,68.1Zm17,0L67.65,82.44a1.37,1.37,0,0,1-2.56,0L47.76,39.26a1.41,1.41,0,0,1,1.29-1.94H60.58a1.38,1.38,0,0,1,1.28.87L73.42,67A1.39,1.39,0,0,1,73.42,68.1Zm1.2-15.45A7.67,7.67,0,1,1,82.29,45,7.67,7.67,0,0,1,74.62,52.65Z"
            />
          </g>
        </g>
      </svg>
    </Container>
  );
};

export default StyledLogo;
