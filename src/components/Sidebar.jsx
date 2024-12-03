import React from "react";

const Sidebar = ({
  users,
  searchQuery,
  setSearchQuery,
  selectedCity,
  setSelectedCity,
  loading,
}) => {
  // Get unique cities from users for the city filter
  const cities = [
    ...new Set(users.map((user) => user.address.city)),
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-1/4 p-4 bg-gray-800 text-white">
      <h2 className="text-xl font-bold mb-4">Search & Filter</h2>

      {/* Search by name */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Search by Name:</h3>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name"
          className="w-full p-2 mt-2 bg-gray-700 text-white rounded"
        />
      </div>

      {/* Filter by city */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Filter by City:</h3>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="w-full p-2 mt-2 bg-gray-700 text-white rounded"
        >
          <option value="">All Cities</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
