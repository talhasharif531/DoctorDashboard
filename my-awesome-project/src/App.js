import React from "react";
// import DoctorDashboard from './landingpage/demo/src/DoctorDashboard/DoctorDashboard.js';
import "./doctordashboard.css";
import { Link , useNavigate, useParams} from "react-router-dom";

import  { useEffect, useState } from "react";
import axios from "axios";

function DoctorDashboard() {
  let navigate = useNavigate();
  const [prescription, setPrescription] = useState({
    mrno:"",
    name:"",
    doctorname:"",
    historyOfPatient: "",
    bloodPressure: "",
    allergies: "",
    pulseRate: "",
    weight: "",
    disabilities: "",
    morePrescription: "",
    dietToFollow: "",
    prescriptionRowList: []  // Adjusted property name to match the backend
  });

  const {mrno, name ,doctorname,historyOfPatient, bloodPressure, allergies, pulseRate, weight, disabilities, morePrescription, dietToFollow, prescriptionRowList } = prescription;

  const onInputChange = (e) => {
    setPrescription({ ...prescription, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.info(prescription.prescriptionRowList);
      const response = await axios.post("http://localhost:8094/priscriptionController/savePrescription", prescription);
      if (response.status === 200) {
        alert('Prescription saved successfully');
        // Redirect or perform any other action upon successful save
      } else {
        alert('Failed to save prescription');
      }
    } catch (error) {
      console.error('Error saving prescription:', error);
      alert('Failed to save prescription');
    }
  };

  const handleAddRow = () => {
    setPrescription({ ...prescription, prescriptionRowList: [...prescriptionRowList, { medicineName: '', unit: '', perDay: '' }] });
  };

  const handleRemoveRow = (index) => {
    const updatedRows = prescriptionRowList.filter((_, rowIndex) => rowIndex !== index);
    setPrescription({ ...prescription, prescriptionRowList: updatedRows });
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = [...prescriptionRowList];
    updatedRows[index][name] = value;
    setPrescription({ ...prescription, prescriptionRowList: updatedRows });
  };
  
      //GET
        useEffect(() => {
        //  loadPrescriptions();
        }, []);
       

  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  const changeStyle = () => {
    if (
      style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };
  const changeStyle1 = () => {
    if (
      style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };
  return (
    <div>
      <nav className="sb-topnav navbar navbar-expand navbar-dark aaa">

        <div
          className="sidebar-brand-icon rotate-n-15"
          style={{ marginLeft: "15px" }}
        >
          <Link to="/" style={{ color: "white", fontSize: "2rem" }}>
            <i className="fas fa-laugh-wink"></i>
          </Link>
        </div>
        <div className="sidebar-brand-text mx-1  logoname">
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              marginLeft: "5px",
            }}
          >
            Care Connect
          </Link>
        </div>

        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
        >
          <i className="fas fa-bars" />
        </button>
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search for..."
              aria-label="Search for..."
              aria-describedby="btnNavbarSearch"
            />
            <button
              className="btn btn-primary"
              id="btnNavbarSearch"
              type="button"
            >
              <i className="fas fa-search" />
            </button>
          </div>
        </form>
        {/* Navbar*/}
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw" />
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="#!">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Activity Log
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div>
        <body id="page-top">
          {/*  <!-- Page Wrapper --> */}
          <div id="wrapper">
            {/*  <!-- Sidebar --> */}
            <ul
              className={style}
              style={{
                background:
                  "rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1))",
              }}
              id="accordionSidebar"
            >
              {/*  <!-- Sidebar - Brand --> */}

              {/*   <!-- Divider --> */}
              <hr className="sidebar-divider my-0" />

              {/*  <!-- Nav Item - Dashboard --> */}
              <Link to={"/"}>
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    <i className="fa fa-user-md	"></i>
                    <span style={{ fontSize: "1rem", fontWeight: "600" }}>
                      Dashboard
                    </span>
                  </a>
                </li>
              </Link>
              <li className="nav-item">
                <Link to="/profiledoc" className="nav-link">
                  <i className="fa fa-user-md " style={{ color: "white" }}></i>
                  <span style={{ fontSize: "1rem", fontWeight: "600" }}>
                    Profile
                  </span>
                </Link>
              </li>
              {/*  <!-- Divider --> */}
              <hr className="sidebar-divider" />

              {/*   <!-- Heading --> */}
              <div className="sidebar-heading">Interface</div>

              {/*  <!-- Nav Item - Pages Collapse Menu --> */}
              <li className="nav-item">
                <Link
                  to="/doctorprisciption"
                  className="nav-link collapsed"
                  // href="#"
                  // data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  <i className="fa fa-medkit "></i>

                  <span style={{ fontWeight: "600" }}>
                    Medical Prescription
                  </span>
                </Link>
                <Link
                  to="/doclabreport"
                  className="nav-link collapsed"
                  // href="#"
                  // data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  <i className="	fa fa-plus-square "></i>

                  <span style={{ fontWeight: "600" }}>Laboratory Reports</span>
                </Link>
                <Link
                  to="/Specificmed"
                  className="nav-link collapsed"
                  // href="#"
                  // data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  <i className="fa fa-stethoscope "></i>

                  <span style={{ fontWeight: "600" }}>
                    Specific Medication's
                  </span>
                </Link>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionSidebar"
                >
                  <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Components:</h6>
                  </div>
                </div>
              </li>

              {/* <!-- Nav Item - Utilities Collapse Menu --> */}
              <li className="nav-item">
                <Link
                  to="/Operationschdule"
                  className="nav-link collapsed"
                  // href="#"
                  // data-toggle="collapse"
                  data-target="#collapseUtilities"
                  aria-expanded="true"
                  aria-controls="collapseUtilities"
                >
                  <i className="fas fa-fw fa-wrench"></i>
                  <span style={{ fontWeight: "600" }}>Operation Schedule</span>
                </Link>
                <div
                  id="collapseUtilities"
                  className="collapse"
                  aria-labelledby="headingUtilities"
                  data-parent="#accordionSidebar"
                >
                  <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Utilities:</h6>
                    <Link to="/hospitalreport" className="collapse-item">
                      Hospital Laboratoy report
                    </Link>
                    <Link to="/otherhospitalreport" className="collapse-item">
                      Other Laboratoy report
                    </Link>
                  </div>
                </div>
              </li>

              <hr className="sidebar-divider" />

              {/* <div className="sidebar-heading">Addons</div> */}

              {/*  <!-- Nav Item - Pages Collapse Menu --> */}
              {/* <li className="nav-item"> */}
              <Link
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapsePages"
                aria-expanded="true"
                aria-controls="collapsePages"
              >
                {/* <i className="fas fa-fw fa-folder"></i> */}
                {/* <span>Pages</span> */}
              </Link>
              <div
                id="collapsePages"
                className="collapse"
                aria-labelledby="headingPages"
                data-parent="#accordionSidebar"
              ></div>

              {/* <!-- Nav Item - Charts --> */}
              <li className="nav-item">
                <Link to="/viewpaidbill" className="nav-link">
                  {/* <i className="fas fa-fw fa-chart-area"></i> */}
                  {/* <span>View Paid Bill</span> */}
                </Link>
              </li>

              {/*  <!-- Nav Item - Tables --> */}
              <li className="nav-item">
                <Link to="/patientfollowup" className="nav-link">
                  {/* <i className="fas fa-fw fa-table"></i> */}
                  {/* <span>Patient Follow Up</span> */}
                </Link>
              </li>

              {/* <!-- Divider --> */}
              <hr className="sidebar-divider d-none d-md-block" />

              {/*   <!-- Sidebar Toggler (Sidebar) --> */}
              {/*   <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                        </div> */}
              <div className="text-center d-none d-md-inline">
                <button
                  className="rounded-circle border-0"
                  id="sidebarToggle"
                  onClick={changeStyle}
                ></button>
              </div>

              {/*  <!-- Sidebar Message --> */}
              <div className="sidebar-card d-none d-lg-flex">
                <img
                  className="sidebar-card-illustration mb-2"
                  src="img/undraw_rocket.svg"
                  alt="..."
                />
                <p className="text-center mb-2">
                  <strong>Care Connect</strong> CareConnect Providers can log in
                  to access helpful resources!
                </p>
                <Link className="btn btn-success btn-sm" href="">
                  Care Connect!
                </Link>
              </div>
            </ul>
            {/*  <!-- End of Sidebar --> */}

            {/*  <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <button
                  id="sidebarToggleTop"
                  className="btn btn-link d-md-none rounded-circle mr-3"
                  onClick={changeStyle1}
                >
                  <i className="fa fa-bars"></i>
                </button>

                <div className="container-fluid">
                  {/*  <!-- Page Heading --> */}
                  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1
                      className="h3 mb-0 text-gray-800"
                      style={{ marginTop: "30px" }}
                    >
                      Dashboard
                    </h1>
                    {/* <!-- Button trigger modal --> */}
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      style={{fontWeight:'400',marginLeft:'73%',marginTop:'25px'}}
                    >
                      Generate Prescription
                    </button>

                    {/* <!-- Modal --> */}
                    <form >
                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog modal-xl" role="document">
                        <div
                          class="modal-content"
                        >
                          <div
                            class="modal-header"
                            style={{ background: "#118ab2" }}
                          >
                            <h5
                              class="modal-title"
                              id="exampleModalLabel"
                              style={{ color: "white" }}
                            >
                              Medical Prescription
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div
                            class="modal-body"
                            style={{ background: "#118ab2",marginTop:'-1px' }}
                          >
                            {/* ...? */}
                            <div>
                              <div
                                class="card "
                                style={{ background: "#0d6efd" }}
                              >
                                <ul class="list-group list-group-flush">
                                  <li
                                    class="list-group-item"
                                    style={{
                                      height: "",
                                      backgroundColor: "#ecf4fb",
                                    }}
                                  >
                                    <div class="row">
                                      <div class="col-sm-6">
                                        <table
                                          class="table "
                                          style={{ marginTop: "2%" }}
                                        >
                                          {/* <thead> */}
                                          <tr>
                                            <div class="row">
                                              <div
                                                class="col-sm-4"
                                                style={{
                                                  background:
                                                    "rgb(236, 244, 251)",
                                                }}
                                              >
                                                <th
                                                  scope="col"
                                                  style={{ border: "none" }}
                                                >
                                                  MR NO #
                                                </th>
                                                <input
                                                  class="form-control"
                                                  type="text"
                                                  placeholder="Mr No..."
                                                  name="mrno"
                                                  value={mrno}
                                                  onChange={(e) => onInputChange(e)}                                                />
                                              </div>
                                              <div
                                                class="col-sm-6"
                                                style={{
                                                  background:
                                                    "rgb(236, 244, 251)",
                                                }}
                                              >
                                                <th
                                                  scope="col"
                                                  style={{ border: "none" }}
                                                >
                                                  NAME
                                                </th>
                                                <input
                                                  class="form-control"
                                                  type="text"
                                                  placeholder="Name Here..."
                                                  name="name"
                                                  value={name}
                                                  onChange={(e) => onInputChange(e)} 
                                                />
                                                <div
                                                class="col-sm-6"
                                                style={{
                                                  background:
                                                    "rgb(236, 244, 251)",
                                                }}
                                              >
                                                <th
                                                  scope="col"
                                                  style={{ border: "none" }}
                                                >
                                                 Doctor Name
                                                </th>
                                                <input
                                                  class="form-control"
                                                  type="text"
                                                  placeholder="Doctor name"
                                                  name="doctorname"
                                                  value={doctorname}
                                                  onChange={(e) => onInputChange(e)}  />                                              
                                              </div>
                                                
                                              </div>
                                            </div>
                                          </tr>
                                          {/* </thead> */}
                                        </table>
                                      </div>
                                    </div>
                                    <hr></hr>

                                    <div
                                      class="input-group mb-3"
                                      style={{
                                        width: "97%",
                                        marginLeft: "1.5%",
                                      }}
                                    >
                                      <div class="input-group-prepend">
                                        <span class="input-group-text">
                                          Brief History of Patient:
                                        </span>
                                      </div>
                                      <textarea
                                        class="form-control"
                                        aria-label="With textarea"
                                        name="historyOfPatient"
                                        value={historyOfPatient}
                                        onChange={(e) => onInputChange(e)}
                                      ></textarea>
                                    </div>
                                    <div class="container">
                                      <div class="row">
                                        <div class="col-sm">
                                          <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                              <span
                                                class="input-group-text"
                                                id="inputGroup-sizing-default"
                                              >
                                                Blood Pressure:
                                              </span>
                                            </div>
                                            <input
                                              type="text"
                                              class="form-control"
                                              aria-label="Default"
                                              aria-describedby="inputGroup-sizing-default"
                                              name="bloodPressure"
                                              value={bloodPressure}
                                              onChange={(e) => onInputChange(e)}
                                            />
                                          </div>
                                          <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                              <span
                                                class="input-group-text"
                                                id="inputGroup-sizing-default"
                                              >
                                                Pulse Rate:
                                              </span>
                                            </div>
                                            <input
                                              type="text"
                                              class="form-control"
                                              aria-label="Default"
                                              aria-describedby="inputGroup-sizing-default"
                                              name="pulseRate"
                                              value={pulseRate}
                                              onChange={(e) => onInputChange(e)}
                                            />
                                          </div>

                                          <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                              <span
                                                class="input-group-text"
                                                id="inputGroup-sizing-default"
                                              >
                                                Weight:
                                              </span>
                                            </div>
                                            <input
                                              type="text"
                                              class="form-control"
                                              aria-label="Default"
                                              aria-describedby="inputGroup-sizing-default"
                                              name="weight"
                                              value={weight}
                                              onChange={(e) => onInputChange(e)}
                                            />
                                          </div>
                                        </div>

                                        <div class="col-sm">
                                          <div class="input-group">
                                            <div class="input-group-prepend">
                                              <span
                                                class="input-group-text"
                                                id=""
                                              >
                                                Allergies:
                                              </span>
                                            </div>
                                            <input
                                              type="text"
                                              class="form-control"
                                              name="allergies"
                                              value={allergies}
                                              onChange={(e) => onInputChange(e)}
                                            />
                                            {/* <input type="text" class="form-control"/> */}
                                          </div>
                                          <div
                                            class="input-group mb-3 "
                                            style={{ marginTop: "15px" }}
                                          >
                                            <div class="input-group-prepend">
                                              <span
                                                class="input-group-text"
                                                id="inputGroup-sizing-default"
                                              >
                                                Disabilities Any:
                                              </span>
                                            </div>
                                            <input
                                              type="text"
                                              class="form-control"
                                              aria-label="Default"
                                              aria-describedby="inputGroup-sizing-default"
                                              name="disabilities"
                                              value={disabilities}
                                              onChange={(e) => onInputChange(e)}
                                            />
                                          </div>
                                          <button
                                          type="button"
                                          class="btn btn-secondary"
                                          style={{background:'#118ab2',marginLeft:'85%'}} onClick={handleAddRow}
                                          >
                                               Add </button>
                                        </div>

                                        <div class="row">
                                          <div class="col-md-4"></div>

                                          <form
                                            class="needs-validation"
                                            novalidate
                                          >
                                          <div className="row">
                                          <div class="col-md-3">
                                              
                                                <label for="validationTooltip01">
                                                  Drugs
                                                </label>                                         
                                               
                                              </div>
                                              <div class="col-md-3 ">
                                                <label for="validationTooltip02">
                                                  Unit
                                                </label>
                                              </div>
                                              <div class="col-md-3 ">
                                                <label for="validationTooltip02">
                                                  Per Day (tablet & Syrup)
                                                </label>
                                                
                                              </div>
                                              <div class="col-md-3">
                                              Remove
                                              </div>
                                              </div>
                                           {prescriptionRowList.map((row, index) => (
                                            <div key={index} className="row">
                                            <br></br><br></br>
                                            <div class="col-md-3">
                                              <input
                                              class="form-control"

                                                type="text"
                                                name="medicineName"
                                                value={row.medicineName}
                                                onChange={(e) => handleInputChange(index, e)}
                                                placeholder="Medicine Name"
                                              />
                                              </div>
                                              <div class="col-md-3">
                                              <input
                                              class="form-control"

                                                type="text"
                                                name="unit"
                                                value={row.unit}
                                                onChange={(e) => handleInputChange(index, e)}
                                                placeholder="Unit"
                                              />
                                              </div>
                                              <div class="col-md-3 ">
                                              <input
                                              class="form-control"

                                                type="text"
                                                name="perDay"
                                                value={row.perDay}
                                                onChange={(e) => handleInputChange(index, e)}
                                                placeholder="Per Day"
                                              />
                                              </div>
                                              <div class="col-md-3 ">
                                              <button type="button" class="btn btn-secondary"
                                              style={{background:'red'}} onClick={() => handleRemoveRow(index)}>Remove</button>
                                              </div>
                                            </div>
                                             ))}
                                            
                                          </form>
                                          <div class="form-row">
                                            
                                              
                                              <div class="input-group mb-2 mt-2">
                                                <div class="input-group-prepend">
                                                  <span class="input-group-text">
                                                    More Prescription
                                                  </span>
                                                </div>
                                                <textarea
                                                  class="form-control"
                                                  aria-label="With textarea"
                                                  name="morePrescription"
                                                  value={morePrescription}
                                                  onChange={(e) => onInputChange(e)}
                                                ></textarea>
                                              </div>
                                              <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                  <span class="input-group-text">
                                                    Diet To Follow
                                                  </span>
                                                </div>
                                                <textarea
                                                  class="form-control"
                                                  aria-label="With textarea"
                                                  name="dietToFollow"
                                                  value={dietToFollow}
                                                  onChange={(e) => onInputChange(e)}
                                                ></textarea>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          
                          <div class="modal-footer" style={{ background: "#118ab2",marginTop:'-2px' }}>
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" class="btn "style={{background:'white',fontWeight:'500'}} onClick={handleSubmit}>
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    </form>
                  </div>

                  <div className="row">
                    <div className="col-xl-3 col-md-6">
                      <div className="card bg-primary text-white mb-4">
                        <div className="card-body cards">
                          Medical Prescription
                        </div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                          <Link
                            to="/doctorprisciption"
                            className="small text-white stretched-link viewdetail"
                          >
                            View Details
                          </Link>
                          <div className="small text-white">
                            <i className="fas fa-angle-right" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="card bg-warning text-white mb-4">
                        <div className="card-body cards">
                          Laboratoy Report's
                        </div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                          <Link
                            to="/doclabreport"
                            className="small text-white stretched-link viewdetail"
                            href="#"
                          >
                            View Details
                          </Link>
                          <div className="small text-white">
                            <i className="fas fa-angle-right" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="card bg-info text-white mb-4">
                        <div className="card-body cards">
                          Specific medication's
                        </div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                          <Link
                            to="/Specificmed"
                            className="small text-white stretched-link viewdetail"
                            href="#"
                          >
                            View Details
                          </Link>
                          <div className="small text-white">
                            <i className="fas fa-angle-right" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="card bg-danger text-white mb-4">
                        <div className="card-body cards">
                          Operation Schedule
                        </div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                          <Link
                            to="/Operationschdule"
                            className="small text-white stretched-link viewdetail"
                            href="#"
                          >
                            View Details
                          </Link>
                          <div className="small text-white">
                            <i className="fas fa-angle-right" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row"style={{marginTop:'100px'}}>
       
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            style={{ background: "whitesmoke", color:'white',marginTop:'-15px'}}>
              <h6 className="m-0 font-weight-bold "style={{color:'royalblue'}}>
                Patient Description
                
              </h6>
             
             
            </div>
            
            {/*  <!-- Card Body --> */}
            <div className="card-body" style={{background:'#f8f9fc'}}>
              <div className="chart-area">
              <table class="table table-striped table table-bordered">
  <thead>
    <tr>
      <th scope="col">Patient Nmae</th>
      <th scope="col">Doctor Name</th>
      <th scope="col">Procedure Name</th>
      <th scope="col" style={{width:"420px"}}>File Name</th>
      <th scope="col fa fa-print">Download</th>
      <th scope="col fa fa-print">Dction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
                <canvas id="myAreaChart"></canvas>
              </div>
            </div>
          </div>
        </div>

        {/*  <!-- Pie Chart --> */}
      </div>
              </div>

              <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                  <div className="copyright text-center my-auto">
                  </div>
                </div>
              </footer>
            </div>
          </div>

          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up"></i>
          </a>

          <div
            className="modal fade"
            id="logoutModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Ready to Leave?
                  </h5>
                  <button
                    className="close"
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  Select "Logout" below if you are ready to end your current
                  session.
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <a className="btn btn-primary" href="login.html">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}

export default DoctorDashboard;
