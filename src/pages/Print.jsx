import React from 'react';
import { Button } from 'react-bootstrap';

export default function Print(props) {
  const [counter, setCounter] = React.useState(1);
  const array = ['rohit', 'rahul', 'virat'];

  const upCount = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>
        Print {props.data} {counter}
        <Button onClick={upCount} className="text-info">
          Add to cart
        </Button>
      </h2>

      {/* Corrected closing parenthesis for array.map() */}
      {array.map(task => (
        <h3 key={task}>{task}</h3>
      ))}
    </div>
  );
}



// class PrintClassComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 1,

//       //for the updating component
//       cart:1
//     };
//     this.upCount = this.upCount.bind(this);
//   }
// componentDidMount(){
//   // only after the Render wala return this works
//   console.log('Mounted')
// }
// componentDidUpdate(prevState,presentState){
// // presentState.cart >10{

// // };

// }
// componentDidUnmount(){

//   //having the example of setInterval and setTimeout because it 
//   // make the memory function properly unless act like mess with the memory
// }
//   upCount() {
//     this.setState({
//       counter: this.state.counter + 1,
//     });
//   }

//   render() {
//     return (
//       <h2>
//         Print{this.props.data}
//         {this.state.counter}
//         <Button onClick={this.upCount} className="text-info">
//           Add to cart
//         </Button>
//         ;
//       </h2>
//     );
//   }
// }
