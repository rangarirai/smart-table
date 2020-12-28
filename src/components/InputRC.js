function InputRC(props) {
  return (
    <div>
      <div>
        <div>row</div>
        <div>
          <input
            type="number"
            min="0"
            onChange={function (e) {
              props.changeRC(e.target.value, "r");
            }}
          />
        </div>
      </div>
      <div>
        <div>column</div>
        <div>
          <input
            type="number"
            min="0"
            onChange={function (e) {
              props.changeRC(e.target.value, "c");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default InputRC;
