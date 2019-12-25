import React from "react";
import styled from "styled-components";

const TextContent = styled.div`
  margin: auto;
  max-width: 100%;
  width: 640px;
  font-size: 1.05rem;
  padding: 24px;

  p {
    line-height: 24px;
  }

  p:not(:last-child) {
    margin-bottom: 24px;
  }

  h2 {
    line-height: 64px;
    margin-bottom: 16px;
    font-family: 'Amatic SC';
    font-size: 2.4rem;
    font-weight: 700;
  }

  ul, ol {
      padding: 16px 0 0 32px;
  }
`;

export const InvertedTextContent = styled(TextContent) `
  color: #fff;
`;

export default TextContent;
