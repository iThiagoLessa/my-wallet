import styled from "styled-components";

export const StAsite = styled.aside`
  grid-area: AS;
  background-color: ${({ theme }) => theme.colors.secodary};
  display: flex;
  flex-direction: column;
`;

export const StHeader = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const StLogoText = styled.h1`
  font-size: 25px;
  margin-left: 10px;
`;
