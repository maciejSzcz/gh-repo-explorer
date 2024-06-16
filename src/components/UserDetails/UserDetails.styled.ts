import { styled } from "styled-components";
import { FaChevronDown } from "react-icons/fa";

export const ToggleExpandButton = styled.button`
  width: ${(props) => props.theme.appWidth};
  min-height: 48px;
  padding: 1rem 2rem;
  text-decoration: none;
  cursor: pointer;
  border: none;
  text-align: start;
  display: flex;
  justify-content: space-between;
`;

export const ToggleIcon = styled(FaChevronDown)<{ $expanded: boolean }>`
  transition: transform 200ms ease-out;
  transform: rotate(${(props) => (props.$expanded ? `180deg` : "0deg")});
`;
