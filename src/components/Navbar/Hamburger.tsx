import { FC, MouseEventHandler, MutableRefObject, SetStateAction, useEffect, useRef } from 'react';
import styled from 'styled-components';

// Quarks
import Container from 'quarks/Container';
import { BasicProps } from 'quarks/interpolations/basic';

// Theme
import { CSSProps } from 'theme/getAppTheme';

type HamburgerProps = BasicProps & {
  onClick?: MouseEventHandler<HTMLDivElement>;
  setActive: (value: SetStateAction<boolean>) => void;
  active: boolean;
  className?: string;
  navRef: MutableRefObject<HTMLDivElement | null>;
};

const NoClickSpan = styled.span`
  pointer-events: none;
`;

const Hamburger: FC<HamburgerProps> = ({ setActive, active, navRef, ...props }) => {
  const burgerRef = useRef<HTMLButtonElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (!navRef?.current?.contains(e?.target as Node) && e?.target !== burgerRef?.current) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return (
    <Container {...props}>
      <button
        className={active ? 'active burger-button' : 'burger-button'}
        ref={burgerRef}
        onClick={() => setActive(!active)}
        aria-label="button"
      >
        <NoClickSpan></NoClickSpan>
        <NoClickSpan></NoClickSpan>
        <NoClickSpan></NoClickSpan>
      </button>
    </Container>
  );
};

// https://codepen.io/nxworld/pen/RPLLbm
const StyledHamburger = styled(Hamburger)`
  .burger-button,
  .burger-button span {
    display: inline-block;
    transition: all 0.4s;
    box-sizing: border-box;
  }
  .burger-button {
    position: relative;
    width: 50px;
    height: 35px;
    background: none;
    border: none;
    appearance: none;
    cursor: pointer;
  }
  .burger-button span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${(cssProps: CSSProps) =>
      cssProps.theme.palette.mode === 'dark'
        ? cssProps.theme.palette.common.white
        : cssProps.theme.palette.common.black};
    border-radius: 4px;
  }
  .burger-button span:nth-of-type(1) {
    top: 0;
  }
  .burger-button span:nth-of-type(2) {
    top: 15px;
  }
  .burger-button span:nth-of-type(3) {
    bottom: 0;
  }
  .burger-button.active span:nth-of-type(1),
  .burger-button.active span:nth-of-type(3) {
    width: 20px;
  }
  .burger-button.active span:nth-of-type(1) {
    transform: translate(-4px, 9.5px) rotate(-45deg);
  }
  .burger-button.active span:nth-of-type(3) {
    transform: translate(-4px, -9.5px) rotate(45deg);
  }
`;

export default StyledHamburger;
