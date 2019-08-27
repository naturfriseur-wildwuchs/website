import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  // background: #e0e4cd;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px;
  display: flex;
`;

const HeaderList = styled.div`
  display: flex;
  align-items: center;

  ${props => props.right && "margin-left: auto;"}
`;

const HeaderItem = styled.a`
  margin-right: 24px;
  font-size: 20px;
  height: 32px;
  line-height: 32px;
  text-decoration: none;
  color: #000;

  cursor: pointer;

  ${props => props.noMobile && `
    @media(max-width: 640px) {
      display: none;
    }
  `}
`;

const HeaderTitle = styled(HeaderItem)`
  font-family: 'Amatic SC';
  font-size: 26px;
  margin-right: 32px;
  margin-left: 16px;
`;

const Button = styled.button`
  font-size: 22px;

  background: #7c8a4c;
  padding: 0 16px;
  font-size: 0.9rem;
  font-family: "Jaldi";
  height: 40px;
  line-height: 40px;
  border: 0;
  border-radius: 4px;
  color: #fff;
  /* margin: -4px 0; */
  display: inline-block;
  cursor: pointer;

  &:hover {
    background: #636d42;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderList>
        <HeaderTitle href="#">Wildwuchs</HeaderTitle>
        <HeaderItem noMobile href="#zu-mir">Zu mir</HeaderItem>
        <HeaderItem noMobile href="#service">Service</HeaderItem>
        <HeaderItem noMobile href="#kontakt">Kontakt</HeaderItem>
      </HeaderList>
      <HeaderList right>
        <Button
          className="timify-button"
          data-account-id="5d4d5828662d4e0c65737bcc"
        >
          Termin buchen
        </Button>
      </HeaderList>
    </HeaderWrapper>
  );
}

export default Header;
