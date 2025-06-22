const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Design Login Page",
        description: "Create UI for login page",
        date: "2025-06-10",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve mobile responsiveness issue",
        date: "2025-06-11",
        category: "Bug Fix",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write Test Cases",
        description: "Write unit tests for user controller",
        date: "2025-06-09",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Ishita",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Update README",
        description: "Improve project documentation",
        date: "2025-06-13",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Refactor Codebase",
        description: "Clean up unused variables and code blocks",
        date: "2025-06-12",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Deploy to Staging",
        description: "Push latest changes to staging environment",
        date: "2025-06-10",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Create Wireframes",
        description: "Design wireframes for the new feature",
        date: "2025-06-14",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Kunal",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Backend API Setup",
        description: "Setup Express server and routes",
        date: "2025-06-08",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Database Schema Design",
        description: "Design schema for task management",
        date: "2025-06-07",
        category: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Fix Login Issue",
        description: "Resolve login redirect bug",
        date: "2025-06-10",
        category: "Bug Fix",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Optimize Images",
        description: "Reduce image sizes for performance",
        date: "2025-06-05",
        category: "Optimization",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Test Payment Gateway",
        description: "Run test transactions using sandbox",
        date: "2025-06-12",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Add Validation",
        description: "Add form validation for all fields",
        date: "2025-06-13",
        category: "Frontend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "User Feedback Integration",
        description: "Display user feedback from survey",
        date: "2025-06-11",
        category: "UX",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Rohan",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Set Up CI/CD",
        description: "Integrate GitHub Actions for CI/CD",
        date: "2025-06-09",
        category: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Configure ESLint",
        description: "Apply consistent coding standards",
        date: "2025-06-10",
        category: "Code Quality",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Create Onboarding Docs",
        description: "Write onboarding guide for new hires",
        date: "2025-06-13",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Dark Mode Toggle",
        description: "Implement dark mode UI switch",
        date: "2025-06-11",
        category: "Feature",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Update Dependencies",
        description: "Upgrade packages to latest versions",
        date: "2025-06-14",
        category: "Maintenance",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  }
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage =()=>{
  localStorage.setItem('employees', JSON.stringify(employees))      //this will set the data
  localStorage.setItem('admin', JSON.stringify(admin))           //if to save data in localstorage there is method setItem


}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));          //JSON parse - convert data into json
  return { employees, admin }; // Return as an object
}