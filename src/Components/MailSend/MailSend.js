import React, { useRef } from "react";
import emailjs from "emailjs-com";

const MailSend = ({ checkBoxValues }) => {
  const mail = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ef4sanw",
        "template_o3cyzgt",
        mail.current,
        "user_FHAXJ38HXN6IhYc83ft7z"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    //   e.target.checked();
  };

  return (
    <div>
      {checkBoxValues ? (
        <div>
          <button
            type="button"
            className="btn btn-success fw-bold mx-1 rounded-pill shadow"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="fas fa-paper-plane"></i>
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Send Mail
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form
                    onSubmit={sendEmail}
                    ref={mail}
                    className="row g-3 w-100"
                  >
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control fw-bold"
                        name="toMail"
                        value={checkBoxValues}
                        readOnly
                        placeholder="To Mail"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Mail Subject"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        type="text"
                        className="form-control"
                        name="message"
                        placeholder="Type Messages"
                        required
                      />
                    </div>
                    <div className="mx-auto">
                      <button
                        type="submit"
                        className="form-control btn btn-primary fw-bold"
                        data-bs-dismiss="modal"
                      >
                        Send Mail
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MailSend;
