import React from "react";
import styled from "styled-components";

import logoSvg from "../assets/logo.svg";

const Wrapper = styled.h1`
  margin: auto;
  width: 450px;
`;

const Title = styled.div`
  font-size: 50px;
  text-align: center;
  font-family: 'Amatic SC';
`;

function Logo() {
  return (
    <Wrapper>
      <img alt="Wildwuchs" src={logoSvg} />
      <Title>Naturfriseur</Title>
    </Wrapper>
  );
}

export default Logo;
