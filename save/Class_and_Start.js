import React from 'react';
import './Class_and_Start.css';

class Helloworld extends React.Component {
  state = {
    show: true,
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          <div>{this.props.text}</div>
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>No hay elementos</h1>
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      );
    }
  }
}

function App() {
  return (
    <div>
      This is my component:{' '}
      <Helloworld text="Hello Saray" subtitle="You're amazing" />
      This is my component: <Helloworld text="Hello Cesar" />
      This is my component: <Helloworld text="Hello Natalia" />
    </div>
  );
}

export default App;
