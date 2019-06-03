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
    this.state = { count: 0 };
    this.incrementCount = this.incrementCount.bind(this);
  }
  
  incrementCount() {
    this.setState(state => ({ count: state.count + 1 })); // implicit return
  };

  // decrementCount() {
  //   this.setState(state => {
  //     return {count: state.count - 1};
  //   });
  // };

  decrementCount = () => {
    this.setState(state => {
      return { count: state.count - 1 };
    });
  };

  render() {
    return (
      <div id="app">
        <button>{this.state.count}</button>
        <button onClick={this.incrementCount}> + </button>
        <button onClick={this.decrementCount}> - </button>
      </div>
    );
  }
};

const element = <Counter />;
const container = document.getElementById("app");
ReactDOM.render(element, container);
