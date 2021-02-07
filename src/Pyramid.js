export default function Pyramid(props) {
  btnStyle = {
    color: props.height <= 0 || props.height >= 9 ? "red" : "black"
  };

  return (
    <div className="pyramid">
      <h1 style={btnStyle}>
        {props.height <= 0 || props.height >= 9
          ? `Invalid Height ${props.height}`
          : `Current Height is: ${props.height}.`}
      </h1>
    </div>
  );
}
