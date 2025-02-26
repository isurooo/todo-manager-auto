**TodoMVC Automation with Cucumber and Playwright**

Project Overview
This project automates the TodoMVC React app using Cucumber.js and Playwright for end-to-end testing.

*Setup Instructions
**1️ Prerequisites
Make sure you have the following installed:

Node.js (v16+ recommended)
npm (comes with Node.js)
**2️ Install Dependencies
Clone the repository and install the required packages:

sh
Copy
Edit
git clone https://github.com/yourusername/todo-automation.git
cd todo-automation
npm install
**3️ Run Tests
To execute the test suite, run:

sh
Copy
Edit
npm test
or

sh
Copy
Edit
npx cucumber-js --import=step-definitions/*.js
4️ Project Structure
bash
Copy
Edit
todo-automation/
│── features/
│   ├── todo.feature        # Cucumber feature file
│── step-definitions/
│   ├── todo.steps.js       # Step definitions
│── package.json            # Project dependencies and scripts
│── cucumber.mjs            # Cucumber config (for ESM projects)
│── README.md               # Project documentation


*Test Scenarios         

------------------------------------------------------------------------
Scenario	            |       Description
------------------------------------------------------------------------
Add a new todo	        |       Adds a task and verifies it's displayed
Mark as completed       |   	Marks a task as completed
Delete a todo	        |       Deletes a task and ensures it's removed


Troubleshooting

1️ Error: "module is not defined in ES module scope"
Ensure you are using ES Modules and rename cucumber.js to cucumber.mjs.
Use export default instead of module.exports.

2️ Error: "sh: cucumber-js: command not found"
Run npx cucumber-js instead of cucumber-js to ensure it's installed locally.