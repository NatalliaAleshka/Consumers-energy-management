///<reference types ="Cypress"/>
import selector from '../support/selector'
describe('Consumers energy Menu navigation tests', () => {
    const Main_page = ('https://consumersenergymanagement.ca/')
    beforeEach(() => {
        cy.visit(Main_page)
    })

    it('Should open the correct tab/screen when a menu option is clicked', () => {
        cy.visit(Main_page)
        cy.get('.main-header').should("be.visible")

    })

    it('Should navigate to Home page', () => {
        cy.get(selector.Home_menu).click()
        cy.url(selector.Home_url).should('include', '/consumer')
    })

    it('Should navigate to About page', () => {
        cy.get(selector.About_menu).click()
        cy.url(selector.About_url).should('include', '/about')
    })



    it('Should navigate to Products page', () => {
        cy.get(selector.Products_menu).click()
        cy.url(selector.Products_url).should('include', '/products')
    })

    it('Should navigate to Services page', { defaultCommandTimeout: 20000 }, () => {
        cy.get(selector.Services_menu).click()
        cy.url(selector.Services_url).should('include', '/services')
    })

    it('Should navigate to Tools page', { defaultCommandTimeout: 20000 }, () => {
        cy.get(selector.Tools_menu).click()
        cy.url(selector.Tools_url).should('include', '/tools')
    })

    it('Should navigate to Promotions page', { defaultCommandTimeout: 20000 }, () => {
        cy.get(selector.Promotions_menu).click()
        cy.url(selector.Promotions_url).should('include', '/promotions')
    })


    it('Should navigate to Career page', { defaultCommandTimeout: 20000 }, () => {
        cy.get(selector.Career_menu).click()
        cy.url(selector.Careers_url).should('include', '/careers')
    })

    it('Should navigate to Blog page', { defaultCommandTimeout: 20000 }, () => {
        cy.get(selector.Blog_menu).click()
        cy.url(selector.Blog_url).should('include', '/blog')
    })


    it('Should navigate to FAQs page', { defaultCommandTimeout: 20000 }, () => {
        cy.get(selector.FAQs_menu).click()
        cy.url(selector.FAQs_url).should('include', '/faq')
    })



    it('Should navigate to Contact page', { defaultCommandTimeout: 20000 }, () => {
        cy.get(selector.Contact_menu).click()
        cy.url(selector.Contact_url).should('include', '/contact')
    })
})