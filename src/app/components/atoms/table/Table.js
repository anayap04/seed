import React from "react";
import { TableRoot, TableBody } from "./styles";

const TableSeed = (props) => {
  const { headArr, bodyArr, theme } = props;
  const renderRow = (item) => {
    return (
      <tr>
        <td>
          <p>{item.name}</p>
        </td>
        <td>{item.quantity}</td>
        <td>{item.date}</td>
      </tr>
    );
  };

  return (
    <TableRoot theme={theme} borderless>
      <thead>
        <tr>
          {headArr.map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <TableBody>{bodyArr.map((item) => renderRow(item))}</TableBody>
    </TableRoot>
  );
};

export default TableSeed;