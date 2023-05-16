///<reference types ="Cypress"/>

import selector from "../support/selector"
import { data } from "../fixtures/params.json"

describe('Saving calculators - locations test', () => {

    beforeEach(() => {
        cy.visit(selector.Savings_calculator)
    })

    it('Should navigate to the Savings calculator page', () => {
        cy.visit(selector.Savings_calculator)
        cy.get(selector.Step1Box).should('be.visible')
        cy.get(selector.Step2Box).should('be.visible')
        cy.get(selector.Step3Box).should('be.visible')

    })

    it('Provance Alberta on state list  and can be chosen and at least 1 city for this provance can open', () => {
        cy.get('[name="nastates"]').select(data[0].State).invoke('text').should('contain', data[0].State)
        cy.get('[name="stage2"]').select(data[0].City).invoke('text').should('contain', data[0].City)

    })
    it('Provance British Columbia on state list  and can be chosen and at least 1 city for this provance can open', () => {
        cy.get('[name="nastates"]').select(data[1].State).invoke('text').should('contain', data[1].State)
        cy.get('[name="stage2"]').select(data[1].City).invoke('text').should('contain', data[1].City)

    })
    it('Provance Manitoba on state list  and can be chosen and at least 1 city for this provance can open', () => {
        cy.get('[name="nastates"]').select(data[2].State).invoke('text').should('contain', data[2].State)
        cy.get('[name="stage2"]').select(data[2].City).invoke('text').should('contain', data[2].City)

    })
    it('Provance New Brunswick on state list  and can be chosen and at least 1 city for this provance can open', () => {
        cy.get('[name="nastates"]').select(data[3].State).invoke('text').should('contain', data[3].State)
        cy.get('[name="stage2"]').select(data[3].City).invoke('text').should('contain', data[3].City)

    })

    it('Provance Newfoundland on state list  and can be chosen and at least 1 city for this provance can open', () => {
        cy.get('[name="nastates"]').select(data[4].State).invoke('text').should('contain', data[4].State)
        cy.get('[name="stage2"]').select(data[4].City).invoke('text').should('contain', data[4].City)

    })
    it('Provance Northwest Territory on state list  and can be chosen and at least 1 city for this provance can open', () => {
        cy.get('[name="nastates"]').select(data[5].State).invoke('text').should('contain', data[5].State)
        cy.get('[name="stage2"]').select(data[5].City).invoke('text').should('contain', data[5].City)

    })
    it('Provance Nova Scotia on state list  and can be chosen and at least 1 city for this provance can open', () => {
        cy.get('[name="nastates"]').select(data[6].State).invoke('text').should('contain', data[6].State)
        cy.get('[name="stage2"]').select(data[6].City).invoke('text').should('contain', data[6].City)

    })
    it('Provance Ontario on state list  and can be chosen and at least 1 city for this provance can open', () => {
        cy.get('[name="nastates"]').select(data[7].State).invoke('text').should('contain', data[7].State)
        cy.get('[name="stage2"]').select(data[7].City).invoke('text').should('contain', data[7].City)

    })

    it('Provance Quebec on state list  and can be chosen and at least 1 city for this provance can open', () => {
        cy.get('[name="nastates"]').select(data[8].State).invoke('text').should('contain', data[8].State)
        cy.get('[name="stage2"]').select(data[8].City).invoke('text').should('contain', data[8].City)

    })
    it('Provance Saskatechewan on state list  and can be chosen and at least 1 city for this provance can open', () => {
        cy.get('[name="nastates"]').select(data[9].State).invoke('text').should('contain', data[9].State)
        cy.get('[name="stage2"]').select(data[9].City).invoke('text').should('contain', data[9].City)

    })



















})