import React, { useEffect, useState } from "react";
// import Pagination from "../Pagination/Pagination";
import RetrieveData from "../RetrieveData/RetrieveData";

const Retrieve = () => {
  const [users, setUser] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [page, setPage] = useState(0);
  const size = 5;

  useEffect(() => {
    const url = `http://localhost:8000/api/users/retrieve?size=${size}&&page=${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUser([...data.users]);
        setTotalPages(data.totalPages);
      });
  }, [page]);

  return (
    <div className="table-responsive">
      <h1 className="text-center my-4">Employee List</h1>

      <RetrieveData key={users.id} users={users}></RetrieveData>

      {/* <Pagination page={page} totalPages={totalPages}></Pagination> */}

      {/* Pagination */}
      <nav aria-label="...">
        <ul className="pagination flex-wrap pagination-sm justify-content-end">
          <button
            onClick={() => {
              page === 0 ? setPage(0) : setPage(page - 1);
            }}
            className={
              page === 0
                ? "disabled fw-bold mx-1 rounded-pill border border-primary border shadow"
                : "page-link fw-bold mx-1 rounded-pill border border-dark border shadow"
            }
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          {[...Array(totalPages).keys()].map((number) => (
            <li
              key={number}
              onClick={() => setPage(number)}
              className={number === page ? "page-item active" : ""}
              aria-current="page"
            >
              <div className="d-flex">
                <button className="page-link fw-bold mx-1 rounded-pill border border-dark border shadow">
                  {number + 1}
                </button>
              </div>
            </li>
          ))}
          <button
            onClick={() => {
              page === totalPages - 1
                ? setPage(totalPages - 1)
                : setPage(page + 1);
            }}
            className={
              page === totalPages - 1
                ? "disabled fw-bold mx-1 rounded-pill border border-primary border shadow"
                : "page-link fw-bold mx-1 rounded-pill border border-dark border shadow"
            }
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </ul>
      </nav>
    </div>
  );
};
export default Retrieve;
