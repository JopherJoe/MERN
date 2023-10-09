import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import './admindashboardcss/Dashboard.css';

class Dashboard extends Component {
  state = {
    registeredStudents: [],
    enrollmentRequests: [],
    shifteeStudents: [],
  };

  render() {
    return (
      <div className="dashboard-container">
        <Card className="dashboard-card">
          <Card.Title>Registered Students</Card.Title>
          <p>{this.state.registeredStudents}</p>
          <Button href="/admin-dashboard/registered-student">View more</Button>
        </Card>
        <Card className="dashboard-card">
          <Card.Title>Enrollment Requests</Card.Title>
          <p>{this.state.enrollmentRequests}</p>
          <Button href="/admin-dashboard/enrollees">View more</Button>
        </Card>
        <Card className="dashboard-card">
          <Card.Title>Shiftee Students</Card.Title>
          <p>{this.state.shifteeStudents}</p>
          <Button href="/admin-dashboard/shiftee-student">View more</Button>
        </Card>
      </div>
    );
  }
}

export default Dashboard;
