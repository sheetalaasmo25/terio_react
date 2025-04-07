import { useState, useEffect } from "react";
import axios from "axios";
import HeaderTask from "@/src/layout/HeaderTask";
import { Spinner, Table, Button, Alert } from "react-bootstrap";
import { useRouter } from "next/router";

const TaskTable = () => {
  const [activeTab, setActiveTab] = useState("Task");
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [columns, setColumns] = useState([]);
  const [sessionError, setSessionError] = useState(null);
  const router = useRouter();

  const excludeFields = ["createdAt", "updatedAt", "__v", "_id", "userId"];

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    
    const token = localStorage.getItem("token");
    if (!token) {
      router.push('/login');
      return;
    }

    try {
      const response = await axios.get("http://3.82.103.193:8000/api/user/getallown-task", {
        headers: { Authorization: `Bearer ${token}` },
      });

      let tasksData = response?.data?.tasks || [];
      tasksData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setTasks(tasksData);

      if (tasksData.length > 0) {
        let taskKeys = Object.keys(tasksData[0]).filter((key) => !excludeFields.includes(key));
        if (taskKeys.includes("link")) {
          taskKeys = ["link", ...taskKeys.filter((key) => key !== "link")];
        }
        taskKeys.push("remainingDays");
        taskKeys.push("action");
        setColumns(taskKeys);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setSessionError("Your account is logged in on another device. Please log out from the other device and log in again.");
        setTimeout(() => {
          localStorage.removeItem("token");
          router.push("/login");
        }, 5000);
      } else {
        setError("Failed to fetch tasks. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
    let timeout;

    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        localStorage.removeItem("token");
        router.push("/login");
      }, 10 * 60 * 1000); 
    };

    const events = ["mousemove", "keydown", "click", "scroll"];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer();

    return () => {
      clearTimeout(timeout);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, []);
  
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
  
  // Test cases
  console.log("Case 1 (Future Start Date):", calculateRemainingDays("2025-04-01T00:00:00", "2025-04-10T00:00:00"));
  console.log("Case 2 (Ongoing Task):", calculateRemainingDays("2025-03-20T00:00:00", "2025-03-30T00:00:00"));
  console.log("Case 3 (Expired Task):", calculateRemainingDays("2025-03-01T00:00:00", "2025-03-10T00:00:00"));
  
  

  const handleGoTask = (id) => router.push(`/task-form?id=${id}`);


  return (
    <div className=" ">
      <HeaderTask activeTab={activeTab} setActiveTab={setActiveTab} />
      <h1 className="text-center mb-4">Task Table</h1>

      {sessionError && (
        <Alert variant="danger" className="text-center">
          {sessionError}
        </Alert>
      )}

      {loading ? (
        <div className="text-center my-3">
          <Spinner animation="border" variant="primary" />
          <p>Loading tasks...</p>
        </div>
      ) : error ? (
        <p className="text-danger text-center">{error}</p>
      ) : tasks.length > 0 ? (
        <div className="table-responsive">
          <Table striped bordered hover className="text-center">
            <thead className="thead-light">
              <tr>
                {columns.map((col) => (
                  <th key={col}>{col.toUpperCase()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task._id}>
                  {columns.map((col) => (
                    <td key={col}>
                      {col === "action" ? (
                        <Button variant="primary" onClick={()=>handleGoTask(task._id)}>Go Task</Button>
                      ) : col === "link" ? (
                        <a href={task[col]} target="_blank" rel="noopener noreferrer">🔗 Open Task</a>
                      ) : col === "startDateTime" || col === "endDateTime" ? (
                        formatDate(task[col])
                      ) : col === "remainingDays" ? (
                        calculateRemainingDays(task.startDateTime, task.endDateTime)
                      ) : typeof task[col] === "boolean" ? (
                        task[col] ? "✅ Completed" : "❌ Pending"
                      ) : (
                        task[col]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <p className="text-center">No tasks available</p>
      )}
    </div>
  );
};

export default TaskTable;
