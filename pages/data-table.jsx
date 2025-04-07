import { useState, useEffect } from "react";
import axios from "axios";
import HeaderTask from "@/src/layout/HeaderTask";
import { Spinner, Table, Button } from "react-bootstrap";
import { useRouter } from "next/router";

const DataTable = () => {
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
      router.push("/login");
      return;
    }

    try {
      const response = await axios.get("http://3.82.103.193:8000/api/user/getowndone-task", {
        headers: { Authorization: `Bearer ${token}` },
      });

      let tasksData = response?.data?.data || [];
      tasksData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setTasks(tasksData);

      if (tasksData.length > 0) {
        let taskKeys = Object.keys(tasksData[0]).filter((key) => !excludeFields.includes(key));
        if (taskKeys.includes("link")) {
          taskKeys = ["link", ...taskKeys.filter((key) => key !== "link")];
        }
        setColumns(["S.No", ...taskKeys]);
      }
    } catch (error) {
      if (error.response && error.response.status === 404 && error.response.data.message === "No tasks found for this user") {
        setTasks([]); // Ensure tasks array is empty
      } else if (error.response && error.response.status === 401) {
        setSessionError("Your account is logged in on another device. Please log out from the other device and log in again.");
        setTimeout(() => {
          localStorage.removeItem("token");
          router.push("/login");
        }, 5000); // 5 सेकंड बाद लॉगआउट और रीडायरेक्ट
      } else {
        setError("Failed to fetch tasks. Please try again.");
        console.error("Error fetching tasks:", error);
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

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString();
  };

  return (
    <div>
      {sessionError ? (
        <div style={{ color: "red", textAlign: "center", padding: "20px", fontWeight: "bold" }}>
          {sessionError}
        </div>
      ) : (
        <>
          <div className="">
            <HeaderTask activeTab={activeTab} setActiveTab={setActiveTab} />
            <h1 className="text-center mb-4">Data Table</h1>

            {loading ? (
              <div className="text-center my-4">
                <Spinner animation="border" variant="primary" />
                <p>Loading tasks...</p>
              </div>
            ) : error ? (
              <p className="text-danger text-center">{error}</p>
            ) : tasks.length > 0 ? (
              <div className="table-responsive">
                <Table striped bordered hover className="text-center">
                  <thead className="bg-light">
                    <tr>
                      {columns.map((col) => (
                        <th key={col}>{col === "S.No" ? "S.No" : col.charAt(0).toUpperCase() + col.slice(1).toLowerCase()}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tasks.map((task, index) => (
                      <tr key={task._id}>
                        {columns.map((col) => {
                          if (col === "S.No") return <td key={col}>{index + 1}</td>;
                          if (col === "link")
                            return (
                              <td key={col}>
                                <a href={task[col]} target="_blank" rel="noopener noreferrer">
                                  🔗 Open Task
                                </a>
                              </td>
                            );
                          if (col === "startDateTime" || col === "endDateTime") return <td key={col}>{formatDate(task[col])}</td>;
                          // if (typeof task[col] === "boolean") return <td key={col}>{task[col] ? "✅ Completed" : "❌ Pending"}</td>;
                          // if (col === "Action")
                          //   return (
                          //     <td key={col}>
                          //       <Button variant="danger" size="sm" onClick={() => alert("Delete functionality not implemented yet!")}>Delete</Button>
                          //     </td>
                          //   );
                          return <td key={col}>{task[col]}</td>;
                        })}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            ) : (
              <p className="text-center text-muted">No task completed yet.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default DataTable;