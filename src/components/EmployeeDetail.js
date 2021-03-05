import React from "react";
import Col from "./Col";

function EmployeeDetail(props) {
  return (
    <>
      <Col size="sm-3"><img alt={props.title} className="img-fluid" src={props.picture} style={{ margin: "0 auto" }} /></Col>
      <Col size="sm-3">{props.title}</Col>
      <Col size="sm-3">{props.phone}</Col>
      <Col size="sm-3">{props.email}</Col>
    </>
  );
}

export default EmployeeDetail;





