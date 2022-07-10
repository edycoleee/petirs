import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { getSertifikat } from '../repository/dataSertifikat';
import { useParams } from "react-router-dom";

function SerfitikatHeader() {
    let params = useParams();
    let sertifikats = getSertifikat();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {sertifikats.map((sertifikat) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/serti/${sertifikat.number}`}
            key={sertifikat.number}
          >
            {sertifikat.name}
          </Link>
        ))}
        <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/`}
          >
            Back
          </Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default SerfitikatHeader