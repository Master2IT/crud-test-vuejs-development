describe('Customers', () => {
    beforeEach(() => {
        cy.visit('localhost:8081')
        window.localStorage.setItem('customers', JSON.stringify([{
            firstName: 'Test',
            lastName: 'Test1',
            dateOfBirth: '1990-05-17',
            phoneNumber: '+12133734253',
            email: 'test@gmail.com',
            bankAccountNumber: '1234123412341234'
        }]))
    })

    it('can add new customer', () => {
        cy.get('[data-test-create-customer]').click()
        cy.get('#first-name').type('Test')
        cy.get('#last-name').type('Test1')
        cy.get('#date-of-birth').type('1990-05-17')
        cy.get('#phone-number').type('+12133734253')
        cy.get('#email').type('test@gmail.com')
        cy.get('#bank-account-number').type('1234123412341234')

        cy.get('#form').submit()
    })
    it('can update the customer', () => {
        cy.get('[data-test-update-customer]').click()
        cy.get('#first-name').clear().type("Mehran")
        cy.get('#form').submit()
    })

    it("can remove the customer", () => {
        cy.get('[data-test-delete-customer]').click()
    })
})
