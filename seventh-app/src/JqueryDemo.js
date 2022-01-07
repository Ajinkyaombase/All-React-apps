import $ from "jquery";

export default () => {
  //const [showElement , setShowElement] = useState(true);

  const onClickHandler = () => {
    const element = document.getElementById("jquery-operation");
    if (element) {
      console.log("Element Found");
      $(element).slideToggle();
    } else {
      console.log("Element Not Found");
    }
    // setShowElement(!showElement);
    console.log("In Handler");
  };
  return (
    <>
      <h1>In JqueryDemo</h1>
      {/*{showElement && (*/}
      <div style={{ backgroundColor: "grey" }} id="jquery-operation">
        I will add some text content to this div
      </div>
      {/* )} */}
      <button onClick={onClickHandler}>click Me</button>
    </>
  );
};
