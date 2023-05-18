///<reference types ="Cypress"/>

import selector from "../support/selector"
import { data } from "../fixtures/params.json"

describe('Saving calculator -  Heat Prices calculations', () => {

    before(() => {
        cy.visit(selector.Savings_calculator)
    })

    it('Should navigate to the Savings calculator page', () => {
        cy.visit(selector.Savings_calculator)
    })
    it(' Should verify that all options in Step 1 calculator are visible', () => {
        cy.get(selector.Step1Box).should('be.visible')
        cy.get(selector.Stories).should('be.visible')
        cy.get(selector.Square_Feet).should('be.visible')
        cy.get(selector.Years).should('be.visible')


    })

    it(' Should populate all the fields at Step 1 with the test data', () => {
        cy.get(selector.State).select(data[4].State).invoke('text').should('contain', data[4].State)
        cy.get(selector.City).select(data[4].City).invoke('text').should('contain', data[4].City)
        cy.get(selector.Stories).select("1")
        cy.get(selector.Years).type("75")
        cy.get(selector.Gas).clear().type("2.34{enter}")
        cy.get(selector.Propane).clear().type("5.00{enter}")
        cy.get(selector.Oil).clear().type("3.95{enter}")
        cy.get(selector.Summer).clear().type("0.30{enter}")
        cy.get(selector.Winter).clear().type("0.25{enter}")

    })








})