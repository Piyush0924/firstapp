import React from 'react';

// Products component
export default function Products(props) {
  const isRobo = props.isRobo;

  // Using conditional rendering with ternary operator
  return (
    <div>
      {isRobo ? <h2>hello R@id</h2> : <h2>hello {props.name}</h2>}
    </div>
  );

  // Alternatively, you can use if-else statements or a single-line if statement

  // Using if-else statements
  // if (isRobo) {
  //   return <h2>hi hello</h2>;
  // } else {
  //   return <h2>hello {props.name}</h2>;
  // }

  // Using a single-line if statement
  // return isRobo ? <h2>hi hello</h2> : <h2>hello {props.name}</h2>;
}

// App component
// function App() {
//   const pati = "Piyush";

//   return (
//     <div>
//       {/* NavbarComponent should be imported */}
//       {/* <NavbarComponent /> */}
//       <Home />
//       {/* Products component with isRobo prop set to true and name prop set to "Piyush" */}
//       <Products isRobo={true} name="Piyush" />
//       {/* Products component with isRobo prop set to true and name prop set to the variable pati */}
//       <Products isRobo={true} name={pati} />
//       {/* Products component with only name prop set to "Piyush" */}
//       <Products name="Piyush" />
//     </div>
//   );
// }

// export default App;
