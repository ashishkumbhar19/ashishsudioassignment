import React from "react";
import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  if (!users || users.length === 0) {
    return <div>No users found</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user) => (
        <div key={user.id} className="bg-gray-100 p-4 rounded shadow-md">
          <h3 className="text-lg font-semibold">{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.address.city}</p>
          <Link
            to={`/user/${user.id}`}
            className="text-blue-500 hover:underline mt-2 block"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UserList;
