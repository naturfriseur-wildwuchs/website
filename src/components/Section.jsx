import styled from 'styled-components';

const Section = styled.section`
  ${props => props.fullHeight && 'min-height: 100vh'};
  display: flex;
  background: ${props => props.background || 'transparent'};
  padding: 3% 0;
`;

export default Section;
