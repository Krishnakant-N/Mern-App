import React, {useState, useEffect} from "react";

const EmployeeList = () => {

  const [users, setUsers] = useState([])

    const getUsers = async () => {

    const response = await fetch("http://localhost:3000/demo", {
      method: "GET",
    })
    const data = await response.json()
    setUsers(data);
  }
  
    useEffect(() => {
      getUsers();
    }, []);

  return(
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Employee List</h1>
      <table className="w-full border-4  border-dashed border-gray-400">
        <thead>
          <tr className="border-4 border-gray-400">
            <th align="left">Unique ID</th>
            <th align="left">Image</th>
            <th align="left">Name</th>
            <th align="left">Email</th>
            <th align="left">Mobile No.</th>
            <th align="left">Designation</th>
            <th align="left">Gender</th>
            <th align="left">Course</th>
            <th align="left">Create date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.imageUpload}</td>
              <td>{user.username}</td>
              <td><a href={user.email}>{user.email}</a></td>
              <td>{user.mobile}</td>
              <td>{user.designation}</td>
              <td>{user.gender}</td>
              <td>{user.course}</td>
              <td>{user.createdDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
)
};

export default EmployeeList;
