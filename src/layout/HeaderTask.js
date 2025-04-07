import { useState } from "react";
import { useRouter } from "next/router";

const HeaderTask = () => {
  const [activeTab, setActiveTab] = useState("");
  const router = useRouter();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "Task") {
      router.push("/task-table");
    } else if (tab === "Data") {
      router.push("/data-table");
    } else {
      router.push("/task-dashboard");
    }
  };
const handleLogout = ()=>{
  localStorage.removeItem('token')
  router.push('/')
}
  return (
    <header className="header1">
      <nav className="nav1">
        {/* Left Side - Navigation Tabs */}
        <ul className="nav-list1">
          {["Dashboard", "Task", "Data"].map((tab) => (
            <li
              key={tab}
              className={`nav-item1 ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>

        {/* Right Side - Logout Button */}
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
};

export default HeaderTask;
