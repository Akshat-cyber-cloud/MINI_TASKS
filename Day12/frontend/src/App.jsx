import React from "react";
import {Routes , Route, NavLink} from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Tasks from "./pages/Tasks";
import TaskDetails from "./pages/TaskDetails";

function App (){
  return(
    <div className="app-container">
      {/* Navigation Bar */}

      <nav className="navbar">
        <h2>Task Manager</h2>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">Dashboard</NavLink>
          <NavLink to="/tasks" className="nav-link">Tasks</NavLink>
          <NavLink to="/settings" className="nav-link">Settings</NavLink>
        </div>
      </nav>

      {/* Page Routes */}

      <main className="main-content">

        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
          <Route path="*" element={<h2>Page Not Found!</h2>} />
        </Routes>

      </main>
    </div>
  )
}

export default App;