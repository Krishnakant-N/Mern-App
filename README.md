# MERN Employee Management App

This is a **MERN (MongoDB, Express, React, Node.js)** application that showcases a complete workflow for user authentication and employee management. Users can log in and access a dashboard with a navigation bar that contains options for Home, Employee List, Create Employee, and Logout. The app demonstrates CRUD operations and includes features like form handling and responsive UI.

---

## Features

1. **Authentication**:  
   - Login functionality for users.  
   - Displays the username of the logged-in user on the navbar.

2. **Navigation Bar**:  
   - **Logo**: Displays the application logo.
   - **Home**: Redirects to the home page.
   - **Employee List**: Displays all employees in a table format.
   - **Create Employee**: Opens a form to add a new employee.
   - **Logout Button**: Logs out the current user.

3. **Employee Management**:  
   - Create employee: Add an employee with the following details:
     - Name
     - Email
     - Mobile Number
     - Gender
     - Course (MCA, BCA, BSC)
     - Image upload  
   - Employee list: Displays all employee data in a table format.
  
Frontend (React) --> Backend (Express.js) --> Database (MongoDB)
       Form Submit             |                     |
       --> POST Request         --> Save Data         |
       <-- Response             <-- Retrieve Data     |
       Render Data <-- GET Request <-- Fetch Data     |
