import styled from 'styled-components';
import './App.css';

// sukuriam h1 elementa pavadinimu title naudodami styled components
const Title = styled.h1`
  font-size: 3rem;
  font-weight: normal;
  text-decoration: underline;
`;

//sukurti button komponenta, prideti jam stiliu ir panaudoti jsx

const Btn = styled.button`
  font-size: 2rem;
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

function App() {
  return (
    <div className='App container'>
      <Title>React styled components</Title>
      <Btn>Mygtukas</Btn>
    </div>
  );
}

export default App;
