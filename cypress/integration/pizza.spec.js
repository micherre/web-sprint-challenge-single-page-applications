describe("Testing Pizza Form", () => {
    it("Renders Form", () => {
        cy.visit("http://localhost:3004/form")
    })
    it('populates name', () => {
        cy.get('#name').type("Micherre").should("have.value", "Micherre")
    })
    it("checks multiple boxes", () => {
        cy.get('#liver').check().should("be.checked")
        cy.get('#arsenic').check().should("be.checked")
    })
    it("submits form", () => {
        cy.get('#name').type("Micherre")
        cy.get('#orderbtn').click()
    })
})