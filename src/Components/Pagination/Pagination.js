import React from "react";
import { useState } from "react/cjs/react.production.min";

const Pagination = ({totalPages,page}) => {
    // const [totalPages, setTotalPages] = useState([]);
    const [setPage] = useState(0);

  return (
    <div>
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

export default Pagination;
