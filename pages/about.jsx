import TerioCounter from "@/src/components/TerioCounter";
import Layout from "@/src/layout/Layout";
import { studiesswiper } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const About = () => {
  return (
    <Layout noHeaderBg pageName={"About"}>
      <div>
        <section
          className="splash-area-section"
          style={{ backgroundImage: "url(assets/img/background.jpg)" }}
        >
          <div className="container">
            <div className="splash-area">
            
            </div>
          </div>
        </section>
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
   
      </div>
    </Layout>
  );
};
export default About;
