import { styled } from "styled-components";
import { FaChevronDown } from "react-icons/fa";

export const ToggleExpandButton = styled.button`
  width: ${(props) => props.theme.appWidth};
  min-height: 48px;
  padding: 1rem 2rem;
  background-color: #f2f2f2;
  text-decoration: none;
  cursor: pointer;
  border: none;
  text-align: start;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: ${(props) => props.theme.appWidthDesktop};
  }
`;

export const ToggleIcon = styled(FaChevronDown)<{ $expanded: boolean }>`
  transition: transform 200ms ease-out;
  transform: rotate(${(props) => (props.$expanded ? `180deg` : "0deg")});
`;
