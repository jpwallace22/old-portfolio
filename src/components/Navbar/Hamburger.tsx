import { FC, MouseEventHandler, SetStateAction } from 'react';
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
};

const Hamburger: FC<HamburgerProps> = ({ setActive, active, ...props }) => (
  <Container {...props}>
    <button
      className="burger-button"
      onClick={({ currentTarget }) => {
        currentTarget.classList.toggle('active');
        setActive(!active);
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </Container>
);

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
    transform: translate(-1px, 9px) rotate(-45deg);
  }
  .burger-button.active span:nth-of-type(3) {
    transform: translate(-1px, -9px) rotate(45deg);
  }
`;

export default StyledHamburger;

Hamburger.defaultProps = {};
