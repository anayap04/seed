import React from "react";
import LinkBtn from "../buttons/Link";
import { TableRoot, TableBody } from "./styles";

const TableSeed = (props) => {
  const { headArr, bodyArr, theme, enableBtn } = props;
  const renderRow = (item) => {
    return (
      <tr key={item.name}>
        <td>
          <p>{item.name}</p>
        </td>
        <td>{item.quantity}</td>
        <td>{item.date}</td>
        {enableBtn && (
          <td>
            {
              <LinkBtn
                fontSize={14}
                key={item.name}
                theme={theme}
                label={"Ver proyecto"}
                onClick={() => item.onClick()}
              />
            }
          </td>
        )}
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
