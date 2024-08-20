import React from "react";
import "./landingpage.css";
import { Link, NavLink } from "react-router-dom";

function Landingpage() {
  return (
    <div className="">
      <div>
        <header className="header">
          <Link className="logo">
            Care Connect{" "}
            <sup>
              <i className="bx bxs-sun" />
            </sup>
          </Link>     
          <nav className="navv">
            <ul className="navbarr">
              <li>
                <Link to="/Mrno">Mr No</Link>
              </li>
              <li>
                <Link to="/OurDoctor">Our Doctor</Link>
              </li>

              <li>
                <Link to="/OurServices">Our Services</Link>
              </li>
              <li>
                <Link to="/visionmission">Vision Mission</Link>
              </li>
              <li>
                <Link to="/Mangenentteam">Management Team</Link>
              </li>
              <li>
                <Link to="/chairmanmwssage">Chairman Message</Link>
              </li>
            </ul>
            <div>
              <i className="bx bx-shopping-bag" id="menu-icon" />
              <i className="bx bx-shopping-bag" id="menu-icon2" />
            </div>
          </nav>
        </header>
        <div className="banner">
          <div className="banner-content">
            <h1>
              Care Connect focusses on reducing the gap that exists between
              healthcare service providers and patients.{" "}
            </h1>
            <p>
              CareConnect, the Provincial Health Viewer, is a secure, view-only
              Electronic Health Record that delivers patient-centric information
              to support care providers in the delivery of direct patient care.
            </p>
            <div class="row">
  <div class="col">
  <NavLink to="/signup">
         <button className="btn btn-primary"  type="button"style={{ marginLeft: "50px",width: "250px" }}>
         Patient Portal
         </button>
</NavLink>
  </div>
         <div class="col">
         <NavLink to="/login">
         <button className="btn btn-primary " type="button" style={{marginLeft: "-60px",  width: "250px" }}>
                    Doctor data 
              </button>
        </NavLink>
  </div>
  
</div>
           
          </div>
        </div>
        {/* featured post */}
        <div style={{background:'mintcream'}} >
          <div class="container"style={{background:'mintcream'}}>
          <div class="row">
              <div className="col-lg-6 ">
                <div class="section-title ourdoctor">
                  <h2>Our Doctor</h2>
                  <p>
                  Our Doctor Care Connect app enables easy appointment scheduling, virtual consultations, and secure access to medical records.
                   Simplify your healthcare experience with seamless, convenient features.
                  </p>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-6 col-lg-4 mb-30">
                <div class="team-item">
                  <div class="mb-30 position-relative d-flex align-items-center">
                    <span class="socials d-inline-block">
                    
                    </span>
                    <span class="img-holder d-inline-block">
                      <img
                        src="https://mashospital.org/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-13-at-2.46.50-PM.jpeg"
                        alt="Team"
                      />
                    </span>
                  </div>

                  <div class="team-content namedoctor">
                    <h5 class="mb-2"> Orthopedic Surgeon

</h5>
                    <p class="text-uppercase mb-0">DR. IRFAN ULLAH</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-30">
                <div class="team-item">
                  <div class="mb-30 position-relative d-flex align-items-center">
                   
                    <span class="img-holder d-inline-block">
                      <img
                        src="https://mashospital.org/wp-content/uploads/2021/10/IMG_3561-scaled.jpg"
                        alt="Team"
                      />
                    </span>
                  </div>
                  <div class="team-content namedoctor">
                    <h5 class="mb-2">Senior Obstetric 
</h5>
                    <p class="text-uppercase mb-0">PROF. DR. HUMA QUDDUSI</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-30">
                <div class="team-item">
                  <div class="mb-30 position-relative d-flex align-items-center">
                    
                    <span class="img-holder d-inline-block">
                      <img
                        src="	https://mashospital.org/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-14-at-3.36.51-PM.jpeg"
                        alt="Team"
                      />
                    </span>
                  </div>
                  <div class="team-content namedoctor">
                    <h5 class="mb-2">Senior Nephrology Medicine
</h5>
                    <p class="text-uppercase mb-0">DR. MUHAMMAD ALI ASHRAF</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="col-md-6 col-lg-4 mb-30">
                <div class="team-item">
                  <div class="mb-30 position-relative d-flex align-items-center">
                    
                    <span class="img-holder d-inline-block">
                      <img
                        src="https://mashospital.org/wp-content/uploads/2021/10/fahad-scaled.jpg"
                        alt="Team"
                      />
                    </span>
                  </div>

                  <div class="team-content namedoctor">
                    <h5 class="mb-2">Head Of Neurology Department.
</h5>
                    <p class="text-uppercase mb-0">DR. MUHAMMAD FAHAD SALEEM</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-30">
                <div class="team-item">
                  <div class="mb-30 position-relative d-flex align-items-center">
                   
                    <span class="img-holder d-inline-block">
                      <img
                        src="https://mashospital.org/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-18-at-12.47.09-PM.jpeg"
                        alt="Team"
                      />
                    </span>
                  </div>
                  <div class="team-content namedoctor">
                    <h5 class="mb-2">Consultant Endocrinology 
</h5>
                    <p class="text-uppercase mb-0">DR. BILAL AFZAL</p>
                  </div>
                </div>
              </div>
              {/* Second line */}
              <div class="col-md-6 col-lg-4 mb-30">
                <div class="team-item">
                  <div class="mb-30 position-relative d-flex align-items-center">
                 
                    <span class="img-holder d-inline-block">
                      <img
                        src="https://mashospital.org/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-22-at-12.28.32-PM.jpeg"
                        alt="Team"
                      />
                    </span>
                  </div>
                  <div class="team-content namedoctor">
                    <h5 class="mb-2">Consultant Gastroenterology 
</h5>
                    <p class="text-uppercase mb-0">DR. MUHAMMAD ASHFAQ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* The Science Behind SmartUV */}
        <section class="section services-section" id="services" style={{background: 'mintcream'}}>
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="section-title">
                  <h2>Our Services</h2>
                  <p>
                    Care Connect streamlines healthcare by providing virtual consultations and secure access to medical records. 
                    Simplify your healthcare management with our user-friendly features.
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                  <div class="icon">
                    <i class="fa fa-plus-square"></i>
                  </div>
                  <div class="feature-content">
                    <h5>Skin Care</h5>

                     <p>
                    We aspire to become the center for comprehensive
                    services in the country through our team of experts
                    and futuristic approach to skin diseases.                    </p>

                  </div>
                  
                </div>
              </div>
            
              <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                  <div class="icon">
                    <i class="fa fa-plus-square	
                    "></i>
                  </div>
                  <div class="feature-content">
                   <Link to='/OurServices'><h5>ENT</h5></Link> 
                    <p>
                    We aspire to become the center for comprehensive
                    services in the country through our team of experts
                    and futuristic approach to skin diseases.
                    </p>

                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                  <div class="icon">
                    <i class="fa fa-plus-square	
                    "></i>
                  </div>
                  <div class="feature-content">
                    <h5>Family Health</h5>
                    <p>
                    We aspire to become the center for comprehensive
                    services in the country through our team of experts
                    and futuristic approach to skin diseases.

                    </p>

                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                  <div class="icon">
                    <i class="fa fa-medkit"></i>
                  </div>
                  <div class="feature-content">
                    <h5>
                    General Surgery</h5>
                    <p>
                    We aspire to become the center for comprehensive
                    services in the country through our team of experts
                    and futuristic approach to skin diseases.
                    </p>

                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                  <div class="icon">
                    <i class="fa fa-medkit"></i>
                  </div>
                  <div class="feature-content">
                    <h5>
                    Internal Medicine</h5>
                    <p>
                    We aspire to become the center for comprehensive
                    services in the country through our team of experts
                    and futuristic approach to skin diseases.
                    </p>

                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                  <div class="icon">
                    <i class="fa fa-medkit"></i>
                  </div>
                  <div class="feature-content">
                    <h5>Neurology</h5>
                    <p>
                    We aspire to become the center for comprehensive
                    services in the country through our team of experts
                    and futuristic approach to skin diseases.
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section services-section" id="services" style={{background: 'mintcream'}}>
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="section-title">
                  <h2>What I Do</h2>
                  <p>
                  Care Connect streamlines healthcare by providing virtual consultations and secure access to medical records.
                   Simplify your healthcare management with our user-friendly features.
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                  <div class="icon">
                    <i class="fa fa-desktop"></i>
                  </div>
                  <div class="feature-content">
                    <h5>
                    General Surgery</h5>
                    <p>
                    Our General surgery department facilitates and care for patients with advanced technological support.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                  <div class="icon">
                    <i class="fa fa-user"></i>
                  </div>
                  <div class="feature-content">
                    <h5>Medicine</h5>
                    <p>
                    Integrated and coordinated healthcare services to help patients heal and recover quickly.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                  <div class="icon">
                    <i class="fa fa-comment"></i>
                  </div>
                  <div class="feature-content">
                    <h5>Neurosurgery</h5>
                    <p>
                    Working diligently and utilizing adequate technological equipment to ensure high quality services.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                  <div class="icon">
                    <i class="fa fa-image"></i>
                  </div>
                  <div class="feature-content">
                    <h5>Orthopedic</h5>
                    <p>
                    Well known for advanced treatment for degenerative and acute joint, back, and neck issues.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                  <div class="icon">
                    <i class="fa fa-th"></i>
                  </div>
                  <div class="feature-content">
                    <h5>Pediatrics</h5>
                    <p>
                    Aiming to create safe and supporting treatment opportunities for children.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                  <div class="icon">
                    <i class="fa fa-cog"></i>
                  </div>
                  <div class="feature-content">
                    <h5>Plastic Surgery</h5>
                    <p>
                    Devoted to treat issues caused by burns, trauma, birth disorder, and other diseases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="deneb_cta "style={{background:'mintcream'}} >
	<div class="container">
		<div class="cta_wrapper">
			<div class="row align-items-center">
				<div class="col-lg-7">
					<div class="cta_content">
						<h3>Have Any Project in Mind ?</h3>
						<p>Curabitur libero eros, efficitur sit amet sodales tincidunt, aliquet et leo sed ut nibh feugiat, auctor enim quis.</p>
					</div>
				</div>
				<div class="col-lg-5">
					<div class="button_box">
						<Link  class="btn "style={{background:'white',fontWeight:"bold"}}>Hire Us</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<footer class="deneb_footer ">
	<div class="widget_wrapper" style={{/*background-image: url(http://demo.tortoizthemes.com/deneb-html/deneb-ltr/assets/images/footer_bg.png);*/}}>
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-6 col-12">
					<div class="widget widegt_about">
						<div class="widget_title">
							<img src="assets/images/logo_1.png" class="img-fluid" alt=""/>
						</div>
						<p>Quisque orci nisl, viverra et sem ac, tincidunt egestas massa. Morbi est arcu, hendrerit ac vehicula condimentum, euismod nec tortor praesent consequat urna.</p>
						<ul class="social">
							<li><a href="#/"><i class="fab fa-facebook-f"></i></a></li>
							<li><a href="#/"><i class="fab fa-twitter"></i></a></li>
							<li><a href="#/"><i class="fab fa-instagram"></i></a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="widget widget_link">
						<div class="widget_title">
							<h4>Links</h4>
						</div>
						<ul>
							<li><Link  to="/Mrno" className="footerchange">MR No</Link></li>
							<li><Link to="/OurDoctor" className="footerchange">Our Doctor</Link></li>
							<li><Link to="/visionmission" className="footerchange">Vission & Mission</Link></li>
							<li><Link  to="/Mangenentteam" className="footerchange">Mangenent Team</Link></li>
              <li><Link  to="/OurServices" className="footerchange">Our Services</Link></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="widget widget_contact">
						<div class="widget_title">
							<h4>Contact Us</h4>
						</div>
						<div class="contact_info">
							<div class="single_info">
								<div class="icon">
									<i class="fas fa-phone-alt"></i>
								</div>
								<div class="info">
									<p><a href="tel:+919246147999"className="footerchange">1800-121-3637</a></p>
									<p><a href="tel:+919246147999"className="footerchange">+91 924-614-7999</a></p>
								</div>
							</div>
							<div class="single_info">
								<div class="icon">
									<i class="fas fa-envelope"></i>
								</div>
								<div class="info">
									<p><a href="mailto:info@deneb.com"className="footerchange">info@deneb.com</a></p>
									<p><a href="mailto:services@deneb.com"className="footerchange">services@deneb.com</a></p>
								</div>
							</div>
							<div class="single_info">
								<div class="icon">
									<i class="fas fa-map-marker-alt"></i>
								</div>
								<div class="info">
									<p style={{color:'white'}}>125, Park street aven, Brocklyn,<span>Newyork.</span></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <div class="copyright_area">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="copyright_text">
						<p>Copyright &copy; 2020 All rights reserved.</p>
					</div>
				</div>
			</div>
		</div>
	</div> */}
</footer>
      </div>
    </div>
  );
}

export default Landingpage;
