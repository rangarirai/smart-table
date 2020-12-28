function Navigation(props) {
  return (
    <div>
      <div
        className="Arrows"
        onClick={function () {
          props.navigate({ x: 0, y: -1 });
        }}
      >
        &#8593;
      </div>
      <div
        className="middleArrows Arrows"
        onClick={function () {
          props.navigate({ x: -1, y: 0 });
        }}
      >
        &#8592;
      </div>
      <div
        className="middleArrows Arrows"
        onClick={function () {
          props.navigate({ x: 1, y: 0 });
        }}
      >
        &#8594;
      </div>

      <div
        className="Arrows"
        onClick={function () {
          props.navigate({ x: 0, y: 1 });
        }}
      >
        &#8595;
      </div>
    </div>
  );
}

export default Navigation;
