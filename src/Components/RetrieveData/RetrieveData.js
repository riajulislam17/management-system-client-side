import React, { useState } from "react";
import MailSend from "../MailSend/MailSend";
// import { useRef } from "react/cjs/react.production.min";

const RetrieveData = ({ users }) => {
  const [searchData, setSearchData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [checkBoxValues, setCheckBoxValues] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const matchedUsers = users.filter((user) =>
      user.email.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchData(matchedUsers);
    e.target.reset();
  };

  const handleCheckBox = (e) => {
    // add to list
    if (e.target.checked) {
      setCheckBoxValues([...checkBoxValues, e.target.value]);
    } else {
      // remove from list
      setCheckBoxValues(
        checkBoxValues.filter(
          (checkBoxValue) => checkBoxValue !== e.target.value
        )
      );
      console.log(checkBoxValues);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="container py-3 d-flex w-75">
        <input
          onBlur={(e) => setSearchText(e.target.value)}
          className="form-control border border-dark border-3"
          type="text"
          placeholder="Search by Email"
        />
        <button className="btn btn-outline-dark fw-bold mx-2 border border-dark border-3" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>

      <table className="table table-responsive table-bordered table-hover table-secondary">
        <thead className="table-success">
          <tr className="bg-secondary text-center">
            <th scope="col">
              <i className="fas fa-paper-plane"></i>
            </th>
            <th scope="col">
              <i className="fas fa-sort-amount-down-alt"></i>
            </th>
            <th scope="col">
              <i className="fas fa-user-tie"></i>
            </th>
            <th scope="col">
              <i className="fas fa-user"></i>
            </th>
            <th scope="col">
              <i className="fas fa-envelope"></i>
            </th>
            <th scope="col">
              <i className="fas fa-tasks"></i>
            </th>
          </tr>
        </thead>

        {searchText !== ""
          ? searchData.reverse().map((user, index) => (
              <tbody key={user.id}>
                <tr className="">
                  <td className="fw-bold">
                    <input
                      onChange={handleCheckBox}
                      className="form-check-input"
                      type="checkbox"
                      value={user.email}
                    />
                  </td>
                  <td className="fw-bold">{index + 1}</td>
                  <td className="fw-bold">{user.first_name}</td>
                  <td className="fw-bold">{user.last_name}</td>
                  <td className="fw-bold">{user.email}</td>
                  <td className="fw-bold py-1">
                    <button
                      type="button"
                      className="btn btn-outline-primary fw-bold mx-1 rounded-pill"
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-warning fw-bold mx-1 rounded-pill"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger fw-bold mx-1 rounded-pill"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            ))
          : users.reverse().map((user, index) => (
              <tbody key={user.id}>
                <tr className="">
                  <td className="fw-bold">
                    <input
                      onChange={handleCheckBox}
                      className="form-check-input"
                      type="checkbox"
                      value={user.email}
                    />
                  </td>
                  <td className="fw-bold">{index + 1}</td>
                  <td className="fw-bold">{user.first_name}</td>
                  <td className="fw-bold">{user.last_name}</td>
                  <td className="fw-bold">{user.email}</td>
                  <td className="fw-bold py-1">
                    <button
                      type="button"
                      className="btn btn-outline-primary fw-bold mx-1 rounded-pill"
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-warning fw-bold mx-1 rounded-pill"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger fw-bold mx-1 rounded-pill"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
      </table>

      <MailSend checkBoxValues={checkBoxValues} setCheckBoxValues={setCheckBoxValues}></MailSend>
    </div>
  );
};

export default RetrieveData;
