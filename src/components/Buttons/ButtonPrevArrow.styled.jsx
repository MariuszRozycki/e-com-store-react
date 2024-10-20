import styled from "styled-components";
import { ButtonBase } from "./ButtonBase.styled";

export const ButtonPrevArrow = styled(ButtonBase).attrs({ className: "btn-prev" })`
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
