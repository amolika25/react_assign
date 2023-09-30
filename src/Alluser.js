import React from "react";
import mock_data from "./mock_data.json";
import { useState } from "react";
import "./alluser.css";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
export default function Alluser() {
  const [currentpage, setcurrentpage] = useState(1);
  const recordsperpage = 10;
  const lastindex = currentpage * recordsperpage;
  const firstindex = lastindex - recordsperpage;
  const records = mock_data.slice(firstindex, lastindex);
  const npage = Math.ceil(mock_data.length / recordsperpage);
  const navigate = useNavigate();

  return (
    <div>
      <p className="textelement">All the users available in the database</p>
      <table className="table">
        <thead className="th">
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Domain</th>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.first_name}</td>
              <td>{d.email}</td>
              <td>{d.domain}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-btn">
        <button onClick={() => prevpage()}>Prev</button>
        <p>
          {currentpage} of {npage}
        </p>
        <button onClick={() => nextpage()}>Next</button>
      </div>
      <div>
        <button onClick={() => navigate("/search")}>Next page</button>
      </div>
    </div>
  );

  function prevpage() {
    if (currentpage != 1) {
      setcurrentpage(currentpage - 1);
    }
  }

  function nextpage() {
    if (currentpage != npage) {
      setcurrentpage(currentpage + 1);
    }
  }
}
