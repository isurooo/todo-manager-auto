export class TodoPage {
  constructor(page) {
    this.page = page;
    this.selectors = {
      newTodoInput: '.new-todo',
      todoListItems: '.todo-list li',
      todoItemLabel: '.view label',
      todoItemCheckbox: '.toggle',
      todoItemDestroyButton: '.destroy'
    };
  }

  async addTodo(todo) {
    await this.page.fill(this.selectors.newTodoInput, todo);
    await this.page.press(this.selectors.newTodoInput, 'Enter');
  }

  async isTodoVisible(todo) {
    const todoItems = await this.page.$$(this.selectors.todoListItems);
    const todoTexts = await Promise.all(todoItems.map(item => item.$eval(this.selectors.todoItemLabel, node => node.innerText)));
    return todoTexts.includes(todo);
  }

  async markTodoAsCompleted(todo) {
    const todoItems = await this.page.$$(this.selectors.todoListItems);
    for (const item of todoItems) {
      const label = await item.$(this.selectors.todoItemLabel);
      const text = await label.innerText();
      if (text === todo) {
        const checkbox = await item.$(this.selectors.todoItemCheckbox);
        await checkbox.check();
        break;
      }
    }
  }

  async isTodoCompleted(todo) {
    const todoItems = await this.page.$$(this.selectors.todoListItems);
    for (const item of todoItems) {
      const label = await item.$(this.selectors.todoItemLabel);
      const text = await label.innerText();
      if (text === todo) {
        const checkbox = await item.$(this.selectors.todoItemCheckbox);
        return await checkbox.isChecked();
      }
    }
    return false;
  }

  async deleteTodo(todo) {
    const todoItems = await this.page.$$(this.selectors.todoListItems);
    for (const item of todoItems) {
      const label = await item.$(this.selectors.todoItemLabel);
      const text = await label.innerText();
      if (text === todo) {
        const destroyButton = await item.$(this.selectors.todoItemDestroyButton);
        await destroyButton.click();
        break;
      }
    }
  }
}