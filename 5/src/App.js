import React from 'react';
import './App.css';

const issues = [
  {
    id: 1,
    title: "Login error",
    description: "Login fails with wrong password.",
    status: "Open",
  },
  {
    id: 2,
    title: "Text overlap",
    description: "Text overlaps on small screens.",
    status: "Closed",
  },
  {
    id: 3,
    title: "Missing icon",
    description: "Settings icon is missing.",
    status: "Open",
  },
  {
    id: 4,
    title: "Slow load",
    description: "Dashboard loads slowly.",
    status: "Closed",
  },
];


const Issue = ({ title, description, status }) => {
  return (
    <div className="issue">
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={`status ${status.toLowerCase()}`}>{status}</span>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>Issue Tracker</h1>
      <div className="issue-list">
        {issues.map((issue) => (
          <Issue
            key={issue.id}
            title={issue.title}
            description={issue.description}
            status={issue.status}
          />
        ))}
      </div>
    </div>
  );
};

export default App;