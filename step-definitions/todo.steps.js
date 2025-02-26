import { Given, When, Then , After } from '@cucumber/cucumber';
import { expect } from 'chai';
import { chromium } from 'playwright';
import { TodoPage } from './todo.page.js';

let browser, page, todoPage;

Given('I open the TodoMVC app', async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  todoPage = new TodoPage(page);
  await page.goto('https://todomvc.com/examples/react/dist/');
});

When('I add a new todo {string}', async function (todo) {
  await todoPage.addTodo(todo);
});

Then('I should see {string} in the todo list', async function (todo) {
  expect(await todoPage.isTodoVisible(todo)).to.be.true;
});

Given('I have a todo {string}', async function (todo) {
  await todoPage.addTodo(todo);
});

When('I mark the todo {string} as completed', async function (todo) {
  await todoPage.markTodoAsCompleted(todo);
});

Then('the todo {string} should be marked as completed', async function (todo) {
  expect(await todoPage.isTodoCompleted(todo)).to.be.true;
});

When('I edit the todo {string} to {string}', async function (oldTodo, newTodo) {
  await todoPage.editTodo(oldTodo, newTodo);
});

When('I delete the todo {string}', async function (todo) {
  await todoPage.deleteTodo(todo);
});

Then('the todo {string} should not be visible', async function (todo) {
  
  expect(await todoPage.isTodoVisible(todo)).to.be.false;
});

// After(async function () {
//   await browser.close();
// });