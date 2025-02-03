additional installations

1. npm i -D react-router-dom
2. npm install tailwindcss @tailwindcss/vite (v4.0)

Project Overview
This project is a simple employee task management system built with React, TypeScript, and Tailwind CSS. It allows an admin to create tasks and assign them to employees. Employees can view their tasks, mark them as completed or failed, and see task statistics.


How It Works
Initialization:

When the application starts, the AuthProvider component in AuthContext.tsx initializes user data from local storage using the setLocalStorage and getLocalStorage functions.
Login:

The Login.tsx component renders a login form. When the form is submitted, it calls the handleLogin function in App.tsx.
The handleLogin function checks the credentials against the user data. If the credentials are valid, it sets the user role and stores the logged-in user data in local storage.
Rendering Dashboards:

Based on the user's role, the App.tsx component renders either the AdminDashboard or EmployeeDashboard.
The AdminDashboard includes the CreateTask component to create new tasks and the AllTask component to display all tasks.
The EmployeeDashboard includes the TaskListNumbers component to display task statistics and the TaskList component to display tasks assigned to the employee.
Creating Tasks:

The CreateTask.tsx component allows the admin to create new tasks. When the form is submitted, it creates a new task object and updates the user data in the context and local storage.
Viewing and Managing Tasks:

The TaskList.tsx component displays tasks assigned to an employee. Tasks are categorized into accepted, new, completed, and failed tasks.
Employees can mark tasks as completed or failed using buttons in the task components (AcceptTask.tsx, CompleteTask.tsx, FailedTask.tsx, NewTask.tsx).

Summary
This project demonstrates a simple task management system with user authentication, task creation, and task management functionalities. It uses React for the UI, TypeScript for type safety, and Tailwind CSS for styling. The project structure is organized into components, context, and utility functions, making it easy to understand and extend.