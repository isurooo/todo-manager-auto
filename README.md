# TodoMVC Automation with Cucumber and Playwright

## Table of Contents
- [Project Overview](#project-overview)
- [Implementation Strategy](#implementation-strategy)
- [Acceptance Criteria](#acceptance-criteria)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)


## Project Overview
This project automates the TodoMVC React app using Cucumber.js and Playwright for end-to-end testing.

### Implementation Strategy  
- **BDD Approach**: Implemented tests using **Cucumber.js** with **Given-When-Then** format to ensure readability and maintainability.  
- **Modular Step Definitions**: Steps are reusable and parameterized to support different test scenarios.  
- **Headless Execution**: Configured tests to run in **headless mode** for faster execution.  
- **Assertions & Validation**: Used **Chai assertions** to validate UI interactions and API responses.  
- **Data-Driven Testing**: Incorporated scenario outlines with examples to cover multiple test cases dynamically.  


## Acceptance Criteria

##### Add a new Todo

- User should be able to add a new todo item by typing in the input field and pressing Enter.
- The newly added todo should appear in the list.
- The todo count should update accordingly.

##### Mark a Todo as completed

- User should be able to mark a todo as completed by clicking on the checkbox next to it.
- Completed todos should have a strikethrough style.
- The remaining todo count should update correctly.

#####  Delete a Todo

- User should be able to remove a todo by clicking the "X" (delete) button.
- The deleted todo should no longer be visible.
- The remaining todo count should update accordingly.


## Prerequisites
Make sure you have the following installed:
- Node.js (v16+ recommended)
- npm (comes with Node.js)

## Setup Instructions

### 1. Install Dependencies
Clone the repository and install the required packages:
```
git clone https://github.com/isurooo/todo-manager-auto.git
cd todo-automation
npm install
```

## 2. Run Tests
To execute the test suite, run:
```
npm test
```
or
```
npx cucumber-js --import='step-definitions/*.js'
```        

### Troubleshooting

- 1️ Error: "module is not defined in ES module scope"
Ensure you are using ES Modules and rename cucumber.js to cucumber.mjs.
Use export default instead of module.exports.

- 2️ Error: "sh: cucumber-js: command not found"
Run npx cucumber-js instead of cucumber-js to ensure it's installed locally.