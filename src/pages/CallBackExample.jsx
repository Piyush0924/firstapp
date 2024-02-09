import React from "react";
//innerparent to outerparent
const OuterParent = () => {
  // defining the state variable
  const [text,setText] = React.useState("");
 const setterfun=(val)=>{
    setText(val);
 }
  return (
    <div>
      {text}
      <InnerParent data={'sample input'} setter={setterfun} />
    </div>
  );
};

const InnerParent = (props) => {
  const onKeyUpHandler = (e) => {
    // Your logic for handling key up event goes here
    const val=e.target.value;
    props.setter(val);
  };

  return (
    <div>
      {props.data}
      <input onKeyUp={onKeyUpHandler} type='text' />
    </div>
  );
};

export default OuterParent;



//parent to child
// import React from "react";

// const OuterParent = () => {
//   // defining the state variable
//   const [text, setText] = React.useState("");
  
//   const setterfun = (val) => {
//     setText(val);
//   };

//   return (
//     <div>
//       {text}
//       <InnerParent data={'sample input'} setter={setterfun} />
//     </div>
//   );
// };

// const InnerParent = (props) => {
//   const onKeyUpHandler = (e) => {
//     const val = e.target.value;
//     props.setter(val);
//   };

//   return (
//     <div>
//       {props.data}
//       <input onKeyUp={onKeyUpHandler} type='text' />
//     </div>
//   );
// };

// export default OuterParent;
