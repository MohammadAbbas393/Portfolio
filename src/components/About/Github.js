import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="red">Code</strong>
      </h1>
      <img
        src={`https://ghchart.rshah.org/c084f5/MohammadAbbas393`}
        alt="GitHub Contribution Chart"
        style={{ maxWidth: "100%" }}
      />
    </Row>
  );
}

export default Github;
