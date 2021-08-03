


describe('load page',() => {
    it('displays bookmark list', () =>{
        cy.visit('/')
        cy.get('h1').should('contain', 'Bookmark Manager!')
    })
})
