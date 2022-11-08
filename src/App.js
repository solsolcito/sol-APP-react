import './App.css';
import Title from './components/Title';
import Paragraph from './components/Paragraph';
import Counter  from './components/Counter';

function App() {
  return (
    <div className="App">
      <Title> Titulo1 </Title>
      <Title> Titulo2 </Title>
      <Paragraph>Parrafo 1 </Paragraph>
      <Counter/>
      <br/>
      <Counter/>

    </div>
  );
}

export default App;
