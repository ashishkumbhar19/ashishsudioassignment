import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCity ? user.address.city === selectedCity : true)
  );

  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          users={users}
          loading={loading}
        />
        <div className="flex flex-col flex-grow">
          <Navbar />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<UserList users={filteredUsers} />} />
              <Route path="/user/:id" element={<UserDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
