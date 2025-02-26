Feature: Todo Management test cases

  Scenario: Add a new todo
    Given I open the TodoMVC app
    When I add a new todo "Buy groceries"
    Then I should see "Buy groceries" in the todo list

  Scenario: Mark a todo as completed
    Given I mark the todo "Buy groceries" as completed
    When the todo "Buy groceries" should be marked as completed

  Scenario: Delete a todo
    Given I delete the todo "Buy groceries"
    When the todo "Buy groceries" should not be visible

