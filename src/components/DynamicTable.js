function DynamicTable(props) {
  return (
    <div style={{ width: "30%" }}>
      <table>
        {props.data.rows.map((element, r) => (
          <tr>
            {props.data.columns.map((e, c) => (
              <td
                style={{ height: "20px" }}
                className={
                  props.data.position.x == c && props.data.position.y == r
                    ? "highlight"
                    : ""
                }
              ></td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}

export default DynamicTable;
