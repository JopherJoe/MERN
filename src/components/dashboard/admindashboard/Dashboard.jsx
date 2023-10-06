import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Chart } from 'chart.js/auto';  
import './admindashboardcss/Dashboard.css';

class Dashboard extends Component {
  state = {
    registeredStudents: 0,
    enrollmentRequests: 0,
    shifteeStudents: 0,
  };

  chartRef = React.createRef();

  componentDidMount() {
    this.createChart();
  }

  createChart() {
    const chartCanvas = this.chartRef.current.getContext("2d");

    new Chart(chartCanvas, {
      type: "bar",
      data: {
        labels: ["Registered Students", "Enrollment Requests", "Shiftee Students"],
        datasets: [
          {
            label: "Number of Students",
            data: [
              this.state.registeredStudents,  
              this.state.enrollmentRequests,
              this.state.shifteeStudents,
            ],
            backgroundColor: [
              "rgba(75, 192, 192, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(0, 128, 0, 0.2)",
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(255, 99, 132, 1)",
              "rgb(0, 128, 0, 1 )",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
      },
    );
  }

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
        <div className="chart-container">
          <canvas ref={this.chartRef}></canvas>
        </div>
      </div>
    );
  }
}

export default Dashboard;