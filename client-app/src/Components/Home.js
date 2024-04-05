import React from 'react';

export default function Home() {
  return (
    <div className="bg-dark text-white p-5">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="display-3 fw-bold">MATERIAL DONOR MUTUAL ASSIST.</h1>
          <p className="mt-4 fs-5">
            This application is for maintaining the donor details, to track the donations and to send the donors
            timely emails. This encourages engagement with donors.
          </p>
        </div>
        <div className="col-lg-6 position-relative d-flex justify-content-center align-items-center">
          <img
            alt="Children learning"
            className="rounded-circle img-fluid"
            src="/cycle.jpg"
            style={{
              maxHeight: "400px",
              objectFit: "cover",
            }}
          />
          <img
            alt="Be more"
            className="rounded-circle position-absolute bottom-0 end-0 translate-middle img-fluid"
            src="/image.jpg"
            style={{
              maxHeight: "200px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
}
