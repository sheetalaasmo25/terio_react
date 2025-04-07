import { useState, useEffect } from "react";
import axios from "axios";
import BannerTask from "@/src/layout/BannerTask";
import HeaderTask from "@/src/layout/HeaderTask";
import TaskShowing from "@/src/layout/TaskShowing";
import { useRouter } from "next/router";

const TaskDashboard = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sessionError, setSessionError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                router.push("/login");
                return;
            }

            try {
                const response = await axios.get("http://3.82.103.193:8000/api/user/getprofile", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setUserData(response?.data);
                console.log(response?.data?.completedTaskCount, "completedTaskCount");
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

        let timeout;
        const resetTimer = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                localStorage.removeItem("token");
                router.push("/login");
            }, 10 * 60 * 1000); // 10 minutes inactivity logout
        };

        const events = ["mousemove", "keydown", "click", "scroll"];
        events.forEach((event) => window.addEventListener(event, resetTimer));

        resetTimer();

        return () => {
            clearTimeout(timeout);
            events.forEach((event) => window.removeEventListener(event, resetTimer));
        };
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            {sessionError ? (
                <div style={{ color: "red", textAlign: "center", padding: "20px", fontWeight: "bold" }}>
                    {sessionError}
                </div>
            ) : (
                <>
                    <HeaderTask user={userData?.user} />
                    <BannerTask user={userData?.user} />
                    <TaskShowing
                        assignedTasks={userData?.assignedTaskCount}
                        completedTaskCount={userData?.completedTaskCount}
                    />
                </>
            )}
        </div>
    );
};

export default TaskDashboard;
