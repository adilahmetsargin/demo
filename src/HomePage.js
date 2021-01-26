import React from "react";
//import './App.css'

const DataList = (props) => {
  return (
    <div className="container">
      {props.datas.map((data) => (
        <table className="table col-md-4">
          <thead>
            <tr>
              <th scope="col">Flag</th>
              <th scope="col">Capital</th>
              <th scope="col">Region</th>
              <th scope="col">Name</th>
            </tr>
          </thead>

          <tbody>
            <tr>
                {/* todo */}
              <img width="85" height="85" src={data.flag} alt="" />
              <td>{data.capital}</td>
              <td>{data.region}</td>
              <td>{data.name}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default DataList;
