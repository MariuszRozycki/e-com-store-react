import styled from "styled-components";
import { ButtonBase } from "./ButtonBase.styles";

export const ButtonPrimary = styled(ButtonBase)`
  background: ${(props) => props.theme.color.btn};
`;
