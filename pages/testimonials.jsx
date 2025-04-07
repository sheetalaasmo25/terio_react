



import Layout from "@/src/layout/Layout";
import Image from "next/image";

const Task = () => {
  
    const testimonials = [
        {
          id: 1,
          text: "Working with NIT Research centre has been an absolute game-changer for us. Their attention to detail and dedication to precision ensured our data digitization project was completed flawlessly. It’s refreshing to see a company that values sustainability and excellence as much as we do!",
          name: "Rahul Sharma",
          image: "/assets/img/user1.jpg",
        },
        {
          id: 2,
          text: "The team at NIT Research centre exceeded all our expectations. From their sustainable practices to their focus on empowering their staff, everything they do reflects their commitment to quality. Their tailored services helped streamline our processes and build a long-lasting partnership.",
          name: "Akash Patel",
          image: "/assets/img/user2.jpg",
        },
      ];

  return (
    <Layout noHeaderBg pageName={"Task"}>
      <div>
        {/* Background Section */}
        <section
          className="splash-area-section"
          style={{ backgroundImage: "url(assets/img/background.jpg)" }}
        >
          <div className="container">
            <div className="splash-area"></div>
          </div>
        </section>

        {/* Task Section */}
        <section className="why-choose-us">
      <div className="container">
        <h2 className="section-heading">WHY CHOOSE US?</h2>
        <div className="underline"></div>

        <div className="testimonials">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <p>{testimonial.text}</p>
                <div className="user-info">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="user-image"
                  />
                  <span>{testimonial.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      </div>
    </Layout>
  );
};

export default Task;
