import React, { useEffect, useState } from "react";
import "./DataCovid.scss";
import useFetch from "../../outsideModule/fetch";
export default function DataCovid() {
  const {
    data: dataCovid,
    isLoading: loading,
    isErr,
  } = useFetch("https://static.pipezero.com/covid/data.json");
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        List of Data about Covid in VietNam
      </h1>
      <table>
        <thead>
          <tr>
            <th>Thành Phố</th>
            <th>Ca nhiễm</th>
            <th>Ca nhiễm hôm nay</th>
            <th>Số mất</th>
          </tr>
        </thead>
        <tbody>
          {loading === true && <tr>Loading</tr>}

          {dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.cases}</td>
                  <td>{item.casesToday}</td>
                  <td>{item.death}</td>
                </tr>
              );
            })}
          {isErr === true && <tr>Something went wrong</tr>}
        </tbody>
      </table>
    </>
  );
}
