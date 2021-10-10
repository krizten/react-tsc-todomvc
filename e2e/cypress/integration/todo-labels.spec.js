/// <reference types="cypress">
describe("TodoMVC - React & TypeScript", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("can add new todo items", () => {
    const newTodo = "Buy groceries @shopping @household";
    cy.get("input.new-todo").type(`${newTodo}{enter}`);

    cy.get(".todo-list li")
      .should("have.length", 1)
      .last()
      .should("contain", "Buy groceries")
      .should("contain", "shopping")
      .should("contain", "household");

    cy.get(".badges-container .badge").should("have.length", 2);
  });

  it("displays tags if todo items have tags", () => {
    const newTodo = "Buy groceries @shopping @household";
    cy.get("input.new-todo").type(`${newTodo}{enter}`);

    cy.get(".badges-container .badge")
      .should("have.length", 2)
      .should("contain", "shopping")
      .should("contain", "household");
  });
});
