describe('Home', () => {
	beforeEach('visits the app', () => {
		cy.visit('http://localhost:3000/')
	})

	it('has correct title', () => {
		cy.title().should('equal', 'roomie')
	})

	describe('Header', () => {
		it('nav opens onclick', () => {
			cy.get('[class^=Header]')
				.find('[class^=Header__MenuIcon]')
				.click()
		})
	})
})
