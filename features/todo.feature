Feature: Todo Management test cases

  Scenario: Add a new todo *
    Given I open the TodoMVC app
    When I add a new todo "Buy groceries"
    Then I should see "Buy groceries" in the todo list

  Scenario: Mark a todo as completed
    Given I have a todo "Buy groceries"
    When I mark the todo "Buy groceries" as completed
    Then the todo "Buy groceries" should be marked as completed

  Scenario: Delete a todo
    Given I have a todo "Buy groceries"
    When I delete the todo "Buy groceries"
    Then the todo "Buy groceries" should not be visible
