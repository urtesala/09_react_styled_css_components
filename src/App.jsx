import './App.css';
import { Btn, LargeBtn, Title } from './components/styled/Demo.styled';

function App() {
  return (
    <div className='App container'>
      <Title>React styled components</Title>
      <Btn onClick={() => console.count('clicked')}>Regular button</Btn>
      <Btn type='submit' sm>Small button</Btn>

      {/* large btn paveldi viska is button ir perrasom ka reikia  */}
      <LargeBtn>Big button</LargeBtn>
    </div>
  );
}

export default App;
