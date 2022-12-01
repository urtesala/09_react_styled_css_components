// sukuriam h1 elementa pavadinimu title naudodami styled components
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: normal;
  text-decoration: underline;
`;

//sukurti button komponenta, prideti jam stiliu ir panaudoti jsx

export const Btn = styled.button`
  font-size: ${(props) => (props.sm ? '1rem' : '1.5rem')};
  padding: 1em 2em;
  border-radius: 20px;
  border: none;
  background-color: #ba5454;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: #573535;
  }
`;
export const LargeBtn = styled(Btn)`
  padding: 1.5em 2.5em;
  text-transform: uppercase;
`;
