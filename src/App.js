import logo from './logo.svg';
import './App.css';
import Card from './Card/Card';

function App() {
  return (
    <div className="container">
      <Card
        title={'What\'s new in 2022 Tech'}
        tag={'Technology'}
        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus.\n' +
          'Doloremque, nihil! At ea atque quidem!'}
        author={'Alexey'}
        date={new Date().toLocaleString()}
      />
    </div>
  );
}

export default App;
