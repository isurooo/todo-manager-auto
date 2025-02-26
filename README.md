# TodoMVC Automation with Cucumber and Playwright

## Project Overview
This project automates the TodoMVC React app using Cucumber.js and Playwright for end-to-end testing.

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