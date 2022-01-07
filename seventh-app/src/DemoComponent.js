import React from "react";

// export default () => {
//   // return <div>In DemoCompnenet</div>
//   // return React.createElement("h1", null , "In DemoCompnenet");
//   // <div>
//   //     <h1 style={{backgroundColor:"red"}}>In DemoComponent</h1>
//   //     <h2 style={{backgroundColor:"grey"}}>In DempComponent</h2>
//   // </div>

//   return React.createElement(
//     "div",
//     null,
//     React.createElement(
//       "h1",
//       { style: { backgroundColor: "red" } },
//       "In DemoComponent"
//     ),
//     React.createElement(
//       "h2",
//       { style: { backgroundColor: "grey" } },
//       "In DemoComponent"
//     )
//   );
// };
//--------------------------------------------------------------------------------------
export default () => {
  // return <div>In DemoCompnenet</div>
  // return React.createElement("h1", null , "In DemoCompnenet");
  // <div>
  //     <h1 style={{backgroundColor:"red"}}>In DemoComponent</h1>
  //     <h2 style={{backgroundColor:"grey"}}>In DempComponent</h2>
  // </div>
  //   return (
  //     <div>
  //       <h1 style={{ backgroundColor: "red" }}>My Heading</h1>
  //       <h2 style={{ backgroundColor: "green" }}>My sub-Heading</h2>
  //       <div style={{ backgroundColor: "grey" }}>
  //         <p style={{ color: "blue" }}>This is my first Paragraph</p>
  //         <p style={{ color: "yellow" }}>This is my Second Paragraph</p>
  //       </div>
  //     </div>
  //   );

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { style: { backgroundColor: "red" } },
      "First Heading"
    ),
    React.createElement(
      "h2",
      { style: { backgroundColor: "green" } },
      "Second Heading"
    ),
    React.createElement(
      "div",
      { style: { backgroundColor: "orange" } },
      React.createElement("p", { style: { color: "blue" } }, "First Paragraph"),
      React.createElement(
        "p",
        { style: { color: "yellow" } },
        "Second Paragraph"
      )
    )
  );
};
