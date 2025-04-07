import BrandSlider from "@/src/components/BrandSlider";
import Layout from "@/src/layout/Layout";
import { latestswiper, partnerswiper, projectsswiper } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Index = () => {
  return (
    <Layout noHeaderBg pageName={"Home"}>
      <section
        className="hero-section-one"
        
        style={{ backgroundImage: "url(assets/img/hero-img.jpg)" }}
      >
        <div className="container">
          <div className="heading-boder">
            {/* <h2>
              <span>Computer Operator</span>
              The Full Potential Of Your work.{" "}
            </h2>
            <p>Creative concepting</p> */}
           
          </div>
        </div>
      </section>
      <div>

      </div>
  

      <section className="what-we-do-section">
  <div className="container">
    <div className="heading text-center">
      <h2>WHAT WE DO ?</h2>
      <div className="underline"></div>
    </div>

    <div className="row">
      <div className="col-md-6 col-lg-6 mb-4">
        <div className="service-box">
          <img src="/assets/img/service1.png" alt="Accurate Data Entry" />
          <h4>Accurate Data Entry</h4>
          <p>
            We provide fast and accurate manual and automated data entry services, converting physical documents into digital formats.
          </p>
        </div>
      </div>

      <div className="col-md-6 col-lg-6 mb-4">
        <div className="service-box">
          <img src="/assets/img/service2.png" alt="Customer Satisfaction" />
          <h4>Customer Satisfaction</h4>
          <p>
            We aim to exceed client expectations by offering high-quality services tailored to your specific needs, with a focus on building long-term relationships.
          </p>
        </div>
      </div>

      <div className="col-md-6 col-lg-6 mb-4">
        <div className="service-box">
          <img src="/assets/img/service3.png" alt="Sustainability" />
          <h4>Sustainability</h4>
          <p>
            We aim to adopt sustainable business practices in our operations, reducing our environmental impact while maintaining high levels of service.
          </p>
        </div>
      </div>

      <div className="col-md-6 col-lg-6 mb-4">
        <div className="service-box">
          <img src="/assets/img/service4.png" alt="Team Development" />
          <h4>Team Development</h4>
          <p>
            We aim to foster a skilled and motivated team, continuously investing in their training and development to provide top-notch services.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>




<section className="why-different">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content - Text */}
          <div className="col-lg-7">
            <h2 className="section-title">Why we are different</h2>
            <ul className="why-list">
              <li>
                Choosing us means opting for a commitment to excellence, reliability, and personalized service.
              </li>
              <li>
                We pride ourselves on our ability to listen to your needs and tailor our solutions to fit your unique requirements.
              </li>
              <li>
                By choosing us, you are investing in a partnership that values transparency, integrity, and innovation.
              </li>
              <li>
                Our proven track record of success and satisfied clients speaks volumes about our commitment to delivering quality.
              </li>
              {/* <li>
                Unlike others, we prioritize human connection in every interaction, creating authentic relationships with both clients and employees.
              </li>
              <li>
                We value transparency, openly sharing our processes, progress, and setbacks with our community.
              </li>
              <li>
                Let us help you achieve your goals with confidence and efficiency.
              </li> */}
            </ul>
          </div>

          {/* Right Content - Image */}
          <div className="col-lg-5 text-center">
            <img
              src="/assets/img/about.jpeg"
              alt="Why We Are Different"
              className="why-image"
            />
          </div>
        </div>
      </div>
    </section>



 
     
    </Layout>
  );
};
export default Index;
