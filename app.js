// function Counter(props) {
//   const handleClick = () => {
//     console.log("Hello");
//   };

//   return (
//     <div id="app">
//       <h1>React Simple Counter</h1>
//       <button>{props.startCount}</button>
//       <button onClick={handleClick}>+</button>
//       <button onClick={handleClick}>-</button>
//     </div>
//   );
// }

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  };

  decrementCount = () => {
    this.setState(state => {
      return { count: state.count - 1 };
    });
  };

  bgColor = () => {
    return this.state.count >= 0 ? "display positive" : "display negative";
  };

  render() {
    return (
      <div id="counter">
        <div className={this.bgColor()}> {this.state.count}</div>
        <button onClick={this.incrementCount}> + </button>
        <button onClick={this.decrementCount}> - </button>
        <Display 
          bgColor={this.bgColor()}
          count={this.state.count}
        />
        <Button 
          onClick={this.incrementCount}
          text='+'
        />
        <Button
          onClick={this.incrementCount}
          text='-'
        />
      </div>
    );
  };
}

const Display = ({bgColor, count}) => {
  return (
  <div className={bgColor}>{count}</div>
  )
};
const Button = ({className, onClick, text}) => {
  return (
    <button className={className} onClick={onClick}> {text} </button>
  )
};

{/* <button onClick={incrementCount}> + </button>
<button onClick={decrementCount}> - </button> */}


const element = <Counter />;

const container = document.getElementById("app");
ReactDOM.render(element, container);
