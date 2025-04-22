const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          title: "Prepare sales report",
          description: "Compile data from Q1 sales and generate a report",
          date: "2025-04-21",
          category: "Reporting",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Client follow-up",
          description: "Follow up with client regarding contract updates",
          date: "2025-04-18",
          category: "Communication",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Internal team sync",
          description: "Weekly meeting to sync with development team",
          date: "2025-04-22",
          category: "Meeting",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Update onboarding docs",
          description: "Add new policy updates to onboarding documentation",
          date: "2025-04-20",
          category: "Documentation",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          title: "Design review",
          description: "Review latest UI mockups from design team",
          date: "2025-04-19",
          category: "Design",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Bug triage",
          description: "Identify and assign critical bugs to developers",
          date: "2025-04-21",
          category: "QA",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Product demo",
          description: "Demo product features to stakeholders",
          date: "2025-04-23",
          category: "Presentation",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          title: "Code review",
          description: "Review merge requests for authentication module",
          date: "2025-04-21",
          category: "Development",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Sprint planning",
          description: "Plan tasks for next development sprint",
          date: "2025-04-22",
          category: "Scrum",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Refactor login system",
          description: "Improve code structure for login functionality",
          date: "2025-04-20",
          category: "Development",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Fix production bug",
          description: "Resolve high-priority bug affecting dashboard",
          date: "2025-04-18",
          category: "Bugfix",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        },
        {
          title: "Update dependencies",
          description: "Upgrade npm packages to latest versions",
          date: "2025-04-19",
          category: "Maintenance",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          title: "Social media campaign",
          description: "Launch and monitor spring campaign posts",
          date: "2025-04-21",
          category: "Marketing",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Newsletter content",
          description: "Draft content for April newsletter",
          date: "2025-04-20",
          category: "Content",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "SEO optimization",
          description: "Improve blog SEO with better keywords",
          date: "2025-04-18",
          category: "Marketing",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          title: "Data backup",
          description: "Run full server backup",
          date: "2025-04-19",
          category: "IT",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Security audit",
          description: "Review access control logs",
          date: "2025-04-21",
          category: "Security",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Install patches",
          description: "Update all machines with latest OS patches",
          date: "2025-04-20",
          category: "IT",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        },
        {
          title: "Configure firewall",
          description: "Update firewall rules for new service",
          date: "2025-04-22",
          category: "Network",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    }
  ];
  

const admin =  [{
    "id" : 1, 
    "email": "admin@example.com",
    "password": "123"
  }
]

export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees, admin}
}