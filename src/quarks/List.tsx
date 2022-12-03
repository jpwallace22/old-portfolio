import styled from 'styled-components';

import check from 'assets/svg/check.svg';

import type { ColorList } from 'atoms/colors/colors';
import { colorParser } from 'atoms/colors/colors';

import type { BasicProps } from 'quarks/interpolations/basic';
import { basic } from 'quarks/interpolations/basic';

interface ListProps extends BasicProps {
  discColor: ColorList;
}

const List = styled.ul<ListProps>`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 1rem;
  li {
    display: grid;
    grid-template-columns: 0 1fr;
    gap: 40px;
    align-items: start;
  }
  li::before {
    content: '';
    width: 19px;
    height: 19px;
    background-color: ${props => colorParser(props.discColor)};
    background-image: url(${check});
    border-radius: 50%;
    margin-top: 4px;
  }
  & {
    ${basic}
  }
`;

export default List;
