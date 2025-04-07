import Layout from "@/src/layout/Layout";
import axios from "axios";
import { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/router"; // ✅ Redirect ke liye

const Login = () => {
  const router = useRouter(); // ✅ Router Initialize
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://3.82.103.193:8000/api/user/login", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        alert("Successfully logged in!");
        localStorage.setItem("token", response.data.token); // Save token in local storage
        setTimeout(() => {
          router.push("/task-dashboard"); // Navigate to Task Dashboard
        }, 2000);
        setFormData({ email: "", password: "" }); // Reset form
      } else {
        alert(response.data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert(error.response?.data?.message || "Login failed. Try again later.");
    }
  };

  

  return (
    <Layout noHeaderBg pageName={"Contact"}>
      <section
        className="splash-area-section"
        style={{ backgroundImage: "url(assets/img/background.jpg)" }}
      >
        <div className="container">
          <div className="splash-area">
            <h2>Login</h2>
          </div>
        </div>
      </section>

      <section className="contact-page gap">
        <div className="container">
          <div className="heading">
            <h6>Login Now...</h6>
            <h2>Enter login password</h2>
            <img alt="line" src="assets/img/headingline.png" />
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <form className="content-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                {/* Password Field with Show/Hide Icon */}
                <div className="password-wrapper" style={{ position: "relative" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Your Password *"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    style={{ width: "100%", paddingRight: "40px" }}
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                <button className="themebtu" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
