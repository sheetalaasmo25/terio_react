import { useRouter } from "next/router";
import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

const TaskShowing = ({ assignedTasks, completedTaskCount }) => {
  console.log("Completed Task Count:", completedTaskCount); // ✅ Debugging

  const router = useRouter()
  const [pendingTasks, setPendingTasks] = useState(1); // Example count
  const [completedTasks, setCompletedTasks] = useState(0); // Example count
const handleViewCompleted = ()=>{
  router.push('/data-table')
}
const handleViewAssigned = ()=>{
  router.push('/task-table')
}
  return (
    <div className="container mt-5">
      <Row className="justify-content-center">
        {/* Pending Task Card */}
        <Col md={5} className="mb-3">
          <Card className="task-card">
            <Card.Body>
              <h5 className="task-title">Assigned Tasks</h5>
              <p className="task-count pending">{assignedTasks} Tasks</p>
              <span className="view-tasks" onClick={handleViewAssigned}>View Tasks →</span>
            </Card.Body>
          </Card>
        </Col>

        {/* Complete Task Card */}
        <Col md={5} className="mb-3">
          <Card className="task-card">
            <Card.Body>
              <h5 className="task-title">Completed Tasks</h5>
              <p className="task-count completed">{completedTaskCount} Tasks</p>
              <span className="view-tasks" onClick={handleViewCompleted}>View Tasks →</span>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TaskShowing;
