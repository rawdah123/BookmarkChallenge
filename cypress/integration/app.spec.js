describe('load page',() => {
    it('displays bookmark list', () =>{
        cy.visit('/')
        cy.get('h1').should('contain', 'Bookmark Manager!')
    })

    it('displays bookmark list', () =>{
        cy.task("taskTruncateTables")
        cy.visit('/')
        cy.get('#name_input').type('Aldi')
        cy.get('#url_input').type('aldi.com')
        cy.get('#comment_input').type("Lottie's favourite store")
        cy.get('#submit').click()
        cy.get('#bookmark-0').should('contain', 'Aldi')
    })

        it('displays bookmark list', () =>{
        cy.task("taskTruncateTables")
        cy.visit('/')
        cy.get('#name_input').type('Aldi')
        cy.get('#url_input').type('aldi.com')
        cy.get('#comment_input').type("Lottie's favourite store")
        cy.get('#submit').click()
        cy.get('#bookmark-0-delete').click()
        cy.get('h1').should('contain', 'Bookmark Manager!')
        cy.get('#bookmark-0').should('not.exist')
    })
})
