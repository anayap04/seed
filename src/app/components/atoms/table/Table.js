import { t } from "i18next";
import React from "react";
import LinkBtn from "../buttons/Link";
import { TableRoot, TableBody, BtnTable } from "./styles";

const TableSeed = (props) => {
  const { headArr, bodyArr, theme, summary, enableBtn } = props;
  const renderRow = (item) => {
    return (
      <tr key={item.name}>
        <td>
          <p>{item.name}</p>
        </td>
        <td>{item.quantity}</td>
        <td>{item.date}</td>
        {enableBtn && (
          <BtnTable>
            {
              <LinkBtn
                fontSize={20}
                key={item.name}
                theme={theme}
                label={t('checkProject')}
                onClick={() => item.onClick()}
              />
            }
          </BtnTable>
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
      {summary &&<thead>
        <tr>
          {summary.map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>}
    </TableRoot>
  );
};

export default TableSeed;
