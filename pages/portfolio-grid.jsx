import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";
const PortfolioGridIsotope = dynamic(
  () => import("@/src/components/PortfolioGridIsotope"),
  {
    ssr: false,
  }
);
const PortfolioGrid = () => {
  return (
    <Layout noHeaderBg pageName={"Portfolio 1"}>
      <section
        className="splash-area-section"
        style={{ backgroundImage: "url(assets/img/background.jpg)" }}
      >
        <div className="container">
         
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
              {/* <li>
                Our proven track record of success and satisfied clients speaks volumes about our commitment to delivering quality.
              </li>
              <li>
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
export default PortfolioGrid;
