// src/types.ts

export interface Task {
    taskTitle: string;
    taskDescription: string;
    taskDate: string;
    category: string;
    active: boolean;
    newTask: boolean;
    failed: boolean;
    completed: boolean;
  }
  
  export interface Employee {
    id: number;
    firstName: string;
    email: string;
    password: string;
    taskCounts: {
      active: number;
      newTask: number;
      completed: number;
      failed: number;
    };
    tasks: Task[];
  }
  
  export interface Admin {
    id: number;
    email: string;
    password: string;
  }
  
  export interface UserDataType {
    employees: Employee[];
    admin: Admin[];
  }