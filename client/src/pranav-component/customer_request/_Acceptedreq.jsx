import React from "react";
export const Accepted = ({ id, title }) => {
  return (
    <div className="text-white">
      <h1>Accepted Requests</h1>
      {/* < for (let i = 0; i < data.length; i++)  > */}
      {/* < if (data[i].accepted == true) > */}
      <div className="flex text-white flex-col justify-center items-center mx-5">
        <div className="card col-12 flex flex-col justify-center m-3 p-4 px-5 border rounded-3">
          <div className="flex flex-row align-middle justify-center items-center">
            <h5 className="text-white">Seller Name :</h5>
            <p className="fs-5 text-white">******</p>
          </div>
          <div className="flex flex-row align-middle justify-center items-center">
            <h5 className="text-white">id:</h5>
            <p className="fs-5 text-white mb-0">{id}</p>
          </div>
          <div className="flex flex-row align-middle justify-center items-center">
            <h5 className="text-white">Requested Service :</h5>
            <p className="fs-5 text-white mb-0">{title}</p>
          </div>
          {/* < data[i].accepted> */}
          {/* < data[i]._id> */}
          <div>
            <a className="border p-2 px-5 text-white reject mr-0 text-none text-white">
              Reject
            </a>
          </div>
          <br /> <br />
          <div>
            <a className="border p-2 px-5 reject mr-0 text-none text-white">
              Completed
            </a>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
export default Accepted;
