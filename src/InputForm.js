export default function Form(props) {
  handleChangeValue = () => {
    props.setHeight(event.target.value);

    if (
      parseInt(event.target.value) <= 0 ||
      parseInt(event.target.value) >= 9
    ) {
      console.log("Invalid Error");
    }
  };

  isDisabled = () => {
    if (props.height <= 0 || props.height >= 9) {
      return true;
    } else {
      return false;
    }
  };

  inputBoxStyle = {
    width: "250px",
    padding: "12px 20px",
    margin: "8px 0",
    // display: "inline-block",
    border: "1px solid #ccc"
    // border-radius: "4px",
    // box-sizing: "border-box",
  };

  return (
    <div className="InputForm">
      <form>
        <input
          type="number"
          placeholder="Enter Height of Pyramid: "
          value={props.height}
          onChange={this.handleChangeValue}
          style={this.inputBoxStyle}
        />
        {/* <button
          onClick={this.handleChangeValue}
          type="submit"
          disabled={props.height <= 0 || props.height >= 9 ? "true" : ""}
        >
          {props.height <= 0 || props.height >= 9 ? "Error" : "Compile"}
        </button> */}
      </form>
    </div>
  );
}
