// import { useState, useEffect } from "react";
// import HeaderTask from "@/src/layout/HeaderTask";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import axios from "axios";
// import { useRouter } from "next/router";

// const initialFormState = {
//   name: "",
//   gender: "",
//   age: "",
//   maritalStatus: "",
//   education: "",
//   educationDetails: "",
//   occupation: "",
//   religion: "",
//   caste: "",
//   subCaste: "",
//   gothra: "",
//   motherTongue: "",
//   horoscopeMatch: "",
//   star: "",
//   raasiMoonSign: "",
//   doshamManglik: "",
//   heightFeet: "",
//   heightCms: "",
//   heightInches: "",
//   weightKg: "",
//   weightLbs: "",
//   citizenship: "",
//   homeState: "",
//   homeCityDistrict: "",
//   countryLivingIn: "",
//   stateCityLivingIn: "",
//   email: "",
//   retypeEmail: "",
//   bodyType: "",
//   complexion: "",
//   physicalStatus: "",
//   eatingHabit: "",
//   drinkingHabit: "",
//   smokingHabit: "",
//   familyValue: "",
//   familyType: "",
//   familyStatus: "",
//   annualIncome: "",
//   aboutParentsSiblings: "",
//   moreAboutSelf: "",
//   yourExpectation: "",
//   password: "",
//   retypePassword: "",
//   howToKnowAboutUs: "",
// };

// const TaskForm = () => {
//   const token = localStorage.getItem("token");
//   const [activeTab, setActiveTab] = useState("Task");
//   const [formData, setFormData] = useState(initialFormState);
// const router = useRouter()
//   useEffect(() => {
    
//     if (!token) {
//       router.push('/login')
//        return;
//      }
//     // Disable Right-Click
//     document.addEventListener("contextmenu", (e) => {
//       e.preventDefault();
    
//     });

//     // Disable Inspect Element & Developer Tools
//     document.addEventListener("keydown", (e) => {
//       if (
//         (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) || // Ctrl+Shift+I or Ctrl+Shift+J
//         e.key === "F12" || // F12
//         (e.ctrlKey && e.key === "U") // Ctrl+U
//       ) {
//         e.preventDefault();
//         alert("🚫 Inspect Element is disabled!");
//       }
//     });

//     return () => {
//       document.removeEventListener("contextmenu", (e) => e.preventDefault());
//       document.removeEventListener("keydown", (e) => {});
//     };

//     let timeout;

//     const resetTimer = () => {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => {
//         localStorage.removeItem("token");
//         router.push("/login");
//       }, 10 * 60 * 1000); 
//     };

//     // Event listeners to track user activity
//     const events = ["mousemove", "keydown", "click", "scroll"];
//     events.forEach((event) => window.addEventListener(event, resetTimer));

//     resetTimer(); // Start timer initially

//     return () => {
//       clearTimeout(timeout);
//       events.forEach((event) => window.removeEventListener(event, resetTimer));
//     };
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
  
//     try {
//       const response = await axios.post(
//         "http://3.82.103.193:8000/api/user/add-task",
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.status === 200) {
//         alert("✅ User added successfully!");
//         setFormData({ ...initialFormState });
//       } else {
//         alert("❌ Error: " + response.data.message);
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("❌ Something went wrong!");
//     }
//   };

//   return (
//     <div>
//       <HeaderTask activeTab={activeTab} setActiveTab={setActiveTab} />
//       <Container style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
//         <h4 className="text-center mb-4 mt-5">User Task Form</h4>
//         <Form onSubmit={handleSubmit}>
//           <Row>
//             {Object.keys(formData).map((key) => (
//               <Col md={6} key={key} className="mt-3">
//                 <Form.Group controlId={key}>
//                   <Form.Label>{key.replace(/([A-Z])/g, " $1").trim()}</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name={key}
//                     value={formData[key]}
//                     onChange={handleChange}
//                     required={
//                       !["educationDetails", "subCaste", "gothra", "star", "raasiMoonSign", "doshamManglik"].includes(key)
//                     }
//                     onCopy={(e) => {
//                       e.preventDefault();
//                       alert("🚫 Copying is disabled!");
//                     }}
//                     onPaste={(e) => {
//                       e.preventDefault();
//                       alert("🚫 Pasting is disabled!");
//                     }}
//                     onCut={(e) => {
//                       e.preventDefault();
//                       alert("🚫 Cutting is disabled!");
//                     }}
//                   />
//                 </Form.Group>
//               </Col>
//             ))}
//           </Row>
//           <Button variant="primary" type="submit" className="mt-4">
//             Submit
//           </Button>
//         </Form>
//       </Container>
//     </div>
//   );
// };

// export default TaskForm;







import { useState, useEffect } from "react";
import HeaderTask from "@/src/layout/HeaderTask";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useRouter } from "next/router";

const initialFormState = {
  name: "",
  gender: "",
  age: "",
  maritalStatus: "",
  education: "",
  educationDetails: "",
  occupation: "",
  religion: "",
  caste: "",
  subCaste: "",
  gothra: "",
  motherTongue: "",
  horoscopeMatch: "",
  star: "",
  raasiMoonSign: "",
  doshamManglik: "",
  heightFeet: "",
  heightCms: "",
  heightInches: "",
  weightKg: "",
  weightLbs: "",
  citizenship: "",
  homeState: "",
  homeCityDistrict: "",
  countryLivingIn: "",
  stateCityLivingIn: "",
  email: "",
  retypeEmail: "",
  bodyType: "",
  complexion: "",
  physicalStatus: "",
  eatingHabit: "",
  drinkingHabit: "",
  smokingHabit: "",
  familyValue: "",
  familyType: "",
  familyStatus: "",
  annualIncome: "",
  aboutParentsSiblings: "",
  moreAboutSelf: "",
  yourExpectation: "",
  password: "",
  retypePassword: "",
  howToKnowAboutUs: "",
};

const dropdownOptions = {
  gender: ["Male", "Female", "Other"],
  maritalStatus: ["Single", "Married", "Divorced", "Widowed"],
  religion: ["Hindu", "Muslim", "Christian", "Sikh", "Other"],
  caste: ["Brahmin", "Kshatriya", "Vaishya", "Shudra", "Other"],
  motherTongue: ["Hindi", "English", "Tamil", "Telugu", "Other"],
  horoscopeMatch: ["Essential", "Non-Essential"],
  star: ["Ashwini", "Bharani", "Krittika", "Other"],
  raasiMoonSign: ["Aries", "Taurus", "Gemini", "Other"],
  doshamManglik: ["Yes", "No"],
  citizenship: ["India", "USA", "Canada", "Other"],
  countryLivingIn: ["India", "USA", "Canada", "Other"],
  bodyType: ["Slim", "Average", "Athletic", "Heavy"],
  complexion: ["Fair", "Wheatish", "Dark"],
  physicalStatus: ["Normal", "Physically Challenged"],
  eatingHabit: ["Vegetarian", "Non-Vegetarian", "Eggetarian"],
  drinkingHabit: ["Yes", "No", "Occasionally"],
  smokingHabit: ["Yes", "No", "Occasionally"],
  familyValue: ["Traditional", "Moderate", "Liberal"],
  familyType: ["Joint", "Nuclear"],
  familyStatus: ["Middle Class", "Upper Middle Class", "Rich"],
};

const TaskForm = () => {
  const token = localStorage.getItem("token");
  const [activeTab, setActiveTab] = useState("Task");
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[userData,setUserData]=useState([])
  const [sessionError, setSessionError] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const { assignedTasks, completedTasks } = router.query;
console.log(assignedTasks, completedTasks,"assignedTasks, completedTasks")
  useEffect(() => {
    if (!token) {
      router.push("/login");
      return;
    }

    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
          router.push("/login");
          return;
      }

      try {
          const response = await axios.get(`http://3.82.103.193:8000/api/user/getallownbyid-task/${id}`, {
              headers: { Authorization: `Bearer ${token}` },
          });

          setUserData(response?.data.task);
         
      } catch (err) {
          if (err.response?.status === 401 && err.response?.data?.message === "Invalid or expired session. Please log in again.") {
              setSessionError("Your account is logged in on another device. Please log out from the other device and log in again.");
              setTimeout(() => {
                  localStorage.removeItem("token");
                  router.push("/login");
              }, 5000); // Redirect after 5 seconds
          } else {
              setError("Failed to fetch user data.");
          }
      } finally {
          setLoading(false);
      }
  };

  fetchData();

    // Disable Inspect Element & Copy-Paste
    const disableActions = (e) => {
      if (e.type === "contextmenu") e.preventDefault();
      if (
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
        e.key === "F12" ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
        alert("🚫 Inspect Element is disabled!");
      }
    };

    document.addEventListener("contextmenu", disableActions);
    document.addEventListener("keydown", disableActions);

    // Auto Logout after 10 minutes of inactivity
    let timeout;
    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        localStorage.removeItem("token");
        router.push("/login");
      }, 10 * 60 * 1000);
    };

    const activityEvents = ["mousemove", "keydown", "click", "scroll"];
    activityEvents.forEach((event) => window.addEventListener(event, resetTimer));
    resetTimer();

    return () => {
      clearTimeout(timeout);
      activityEvents.forEach((event) => window.removeEventListener(event, resetTimer));
      document.removeEventListener("contextmenu", disableActions);
      document.removeEventListener("keydown", disableActions);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://3.82.103.193:8000/api/user/add-task",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        alert("✅ User added successfully!");
        setFormData({ ...initialFormState });
      } else {
        alert("❌ Error: " + response.data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      // Check for 401 error and redirect to login
      if (error.response && error.response.status === 401) {
        alert("⚠️ Session expired! Redirecting to login...");
        router.push("/login"); // Redirect to login page
      } else {
        alert("❌ Something went wrong!");
      }
    }
  };
  const formatDate = (dateStr) => new Date(dateStr).toLocaleString();
  const calculateRemainingDays = (startDateTime, endDateTime) => {
    const now = new Date();
    const startDate = new Date(startDateTime);
    const endDate = new Date(endDateTime);
  
    console.log("Now:", now);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
  
    if (isNaN(startDate) || isNaN(endDate)) {
      console.log("Invalid Date Input");
      return "Invalid Date";
    }
  
    // Total duration from start to end in days
    const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    console.log("Total Duration (Days):", totalDays);
  
    // If current time is before start date, return total days
    if (now < startDate) {
      console.log("Before Start Date, Remaining Days:", totalDays);
      return totalDays;
    }
  
    // Days passed since startDate
    const elapsedDays = Math.ceil((now - startDate) / (1000 * 60 * 60 * 24));
    console.log("Elapsed Days:", elapsedDays);
  
    // Remaining days
    const remainingDays = totalDays - elapsedDays;
    console.log("Remaining Days:", remainingDays > 0 ? remainingDays : 0);
  
    return remainingDays > 0 ? remainingDays : 0; // Prevent negative values
  };
  if (loading) return <p>Loading...</p>;
  return (
    <div>
    {sessionError ? (
        <div style={{ color: "red", textAlign: "center", padding: "20px", fontWeight: "bold" }}>
            {sessionError}
        </div>
    ) : (
        <>
    <div>
      <HeaderTask activeTab={activeTab} setActiveTab={setActiveTab} />
      <Container style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        <h4 className="text-center mb-4 mt-5">User Task Form</h4>
        {/* <h6 color="red">Start Date - {formatDate(userData?.startDateTime)}</h6>
        <h6 color="red">End Date - {formatDate(userData?.startDateTime)}</h6> */}
        <h6 color="red">Days remaining to complete the task is - {calculateRemainingDays(userData.startDateTime, userData.endDateTime)}Days</h6>
        <Form onSubmit={handleSubmit}>
          <Row>
            {Object.keys(formData).map((key) => (
              <Col md={6} key={key} className="mt-3">
                <Form.Group controlId={key}>
                  <Form.Label>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1").trim()}</Form.Label>
                  {dropdownOptions[key] ? (
                    <Form.Select name={key} value={formData[key]} onChange={handleChange} required>
                      <option value="">Select {key.charAt(0).toUpperCase() + key.slice(1)}</option>
                      {dropdownOptions[key].map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                      {/* <option value="Other">Other</option> */}
                    </Form.Select>
                  ) : (
                    <Form.Control
                      type="text"
                      name={key}
                      value={formData[key]}
                      onChange={handleChange}
                      autoComplete="off"
                      required={
                        ![
                          "educationDetails",
                          "subCaste",
                          "gothra",
                          "star",
                          "raasiMoonSign",
                          "doshamManglik",
                        ].includes(key)
                      }
                      onCopy={(e) => {
                        e.preventDefault();
                        alert("🚫 Copying is disabled!");
                      }}
                      onPaste={(e) => {
                        e.preventDefault();
                        alert("🚫 Pasting is disabled!");
                      }}
                      onCut={(e) => {
                        e.preventDefault();
                        alert("🚫 Cutting is disabled!");
                      }}
                    />
                  )}
                </Form.Group>
              </Col>
            ))}
          </Row>
          <Button variant="primary" type="submit" className="mt-4">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
    </>
            )}
        </div>
    );
};

export default TaskForm;
