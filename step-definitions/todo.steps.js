import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { chromium } from 'playwright';

let browser, page;

Given('I open the TodoMVC app', async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://todomvc.com/examples/react/dist/');
});

When('I add a new todo {string}', async function (todo) {
  await page.fill('.new-todo', todo);
  await page.press('.new-todo', 'Enter');
});

Then('I should see {string} in the todo list', async function (todo) {
  
  const todoItem = await page.locator('.todo-list').innerText();
  expect(todoItem).to.include(todo);
  console.log("After the list");
});

Given('I have a todo {string}', async function (todo) {
  await page.fill('.new-todo', todo);
  await page.press('.new-todo', 'Enter');
});

When('I mark the todo {string} as completed', async function (todo) {
  await page.locator(`.todo-list li:has-text("${todo}") .toggle`).click();
});

Then('the todo {string} should be marked as completed', async function (todo) {
  const completed = await page.locator(`.todo-list li:has-text("${todo}")`).getAttribute('class');
  expect(completed).to.include('completed');
});

When('I delete the todo {string}', async function (todo) {
  await page.hover(`.todo-list li:has-text("${todo}")`);
  await page.locator(`.todo-list li:has-text("${todo}") .destroy`).click();
});

Then('the todo {string} should not be visible', async function (todo) {
  const todoExists = await page.locator(`.todo-list li:has-text("${todo}")`).count();
  expect(todoExists).to.equal(0);
});

