import React from "react";
import Insertion from "../Insertion/Insertion";
import Retrieve from "../Retrieve/Retrieve";

const Home = () => {
  return (
    <div>
      <div className="container-fluid px-4">
        <div className="row g-3">
          <div className="col-sm-12 col-md-7 col-lg-8">
            <div className="p-3 bg-light rounded border border-dark border-2">
              <Retrieve></Retrieve>
            </div>
            <div>
              <div
                class="alert alert-danger alert-dismissible fade show mt-5"
                role="alert"
              >
                <strong>Hello Dear! The data is not displayed since the server-side could not be deployed. Please follow the <a className="text-decoration-none" href="https://github.com/riajulislam17/management-system-server-side/blob/main/README.md" target="_blank" rel="noreferrer">README.md</a> file instructions.</strong> 
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-5 col-lg-4">
            <div className="p-3 bg-light rounded border border-dark border-2">
              <Insertion></Insertion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
