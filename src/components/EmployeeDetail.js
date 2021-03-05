import React from "react";
import Col from "./Col";

function EmployeeDetail(props) {
  return (
      // <div className="card" style={{ width: "750px" }}>
      //   <div className="row no-gutters">
      //     <div className="col-sm-4 col-md-2">
      //         <img className="card-img" src={ props.picture } alt={ props.title + " Card"} />
      //     </div>
      //     <div className="col-sm-7">
      //         <div className="card-body">
      //             <h5 className="card-title">{ props.title }</h5>
      //             <p className="card-text">Suresh Dasari is a founder and technical lead developer in tutlane.</p>
      //         </div>
      //     </div>
      //   </div>
      // </div>
    <>
      <Col size="sm-3"><img alt={props.title} className="img-fluid" src={props.picture} style={{ margin: "0 auto" }} /></Col>
      <Col size="sm-3">{props.title}</Col>
      <Col size="sm-3">{props.phone}</Col>
      <Col size="sm-3">{props.email}</Col>
    </>
  );
}

export default EmployeeDetail;


{/* <Col size="sm-3"><img alt={props.title} className="img-fluid" src={props.picture} style={{ margin: "0 auto" }} /></Col>
      <Col size="sm-3">{props.title}</Col>
      <Col size="sm-3">{props.phone}</Col>
      <Col size="sm-3">{props.email}</Col>
    </> */}


