import Layout from "@/src/layout/Layout";
import { useRouter } from "next/router";

const Task = () => {
    const router = useRouter()
  const task = {
    id: 1,
    title: "Computer Operator",
    description:
      "Basic requirements - 18+ age, Good typing skills, Basic English, Android mobile and computer required with good internet connectivity.",
    earning: "₹25,000 to ₹30,000/-",
    image: "/assets/img/f13.jpg",
  };
const handleChange = ()=>{
    router.push('/contacts')
}
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
        <section className="task-section">
          <div className="container">
            <h2 className="task-heading">HERE IS TASK</h2>
            <div className="underline"></div>

            {/* Task Card */}
            <div className="task-card">
              {/* Left Side - Image */}
              <div className="task-image-container">
                <img src={task.image} alt={task.title} className="task-image" />
              </div>

              {/* Right Side - Content */}
              <div className="task-content">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>
                  <strong>Earning potential:</strong> {task.earning}
                </p>
                <button className="apply-btn" onClick={handleChange}>Apply now</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Task;
