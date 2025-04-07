const Footer = () => {
  return (
    <footer className="gap no-bottom" style={{ backgroundColor: "#222" }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
          <div>
           <a href="index.html">
                <img alt="img" src="assets/img/logo.png" />
              </a></div>
              <br></br>
        
          {/* <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="links">
              <h6>Additional links</h6>
              <ul>
                <li>
                  <a href="about.html">About us</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="team.html">team</a>
                </li>
                <li>
                  <a href="blog-grid.html">News</a>
                </li>
                <li className="pb-0">
                  <a href="contacts.html">Contact us</a>
                </li>
              </ul>
            </div>
          </div> */}
     
            <div className="latest-news">
          <div className="d-flex"> <div><h6>CONTACT US</h6></div></div>
              <ul>
                <li>
                  <p>
                  Bren Mercury, No.835/39, Kaikondrahalli, Varthur Hobli, Sarjapur Main Road Bangalore
                  </p>
                 
                </li>
               
                <br></br>
                <li>
                  <p>CIN - U63114MP2025PTC075687</p>
                </li>
                
                <li className="pt-4">
                  <p>NextGen@hrinfohub.com</p>
                  <p>Support@hrinfohub.com</p>
                  {/* <span>dec 10, 2019 / 0 comments</span> */}
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="latest-news">
              <h6>Subscribe</h6>
              <p>
                Pellentesque odio nisi, euismod in, pharetra a, ultricies in,
                diam.
              </p>
              <form>
                <input
                  type="text"
                  name="email"
                  placeholder="your email address"
                />
                <button>go</button>
              </form>
            </div>
          </div> */}
        </div>
        <div className="footer-bottom">
          <p>All Rights Reserved, NIT Reserch Center Copyright © 2025</p>
          {/* <ul>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-m" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
