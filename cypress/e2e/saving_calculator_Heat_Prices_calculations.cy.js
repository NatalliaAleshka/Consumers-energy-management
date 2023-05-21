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
        cy.get(selector.Square_Feet).select("4250")
        cy.get(selector.Years).type("75")
    })
    it(' Should populate all the fields at Step 1 Price column with the test data',() => {
        cy.get(selector.Price_column).should('be.visible')
        cy.get(selector.Gas).clear().type("2.34")
        cy.get(selector.Propane).clear().type("5.00")
        cy.get(selector.Oil).clear().type("3.95")
        cy.get(selector.Summer).clear().type("0.30")
        cy.get(selector.Winter).clear().type("0.25")

    })

    it(' Step 2 Box Sanity test ', () => {
        cy.get(selector.Step2Box).should('be.visible')
        cy.get(selector.CurrentHeatingSystem).should('be.visible')
        cy.get(selector.EfficiencyLevel_CS).should('be.visible')
        cy.get(selector.NewHeatingSystem).should('be.visible')
        cy.get(selector.EfficiencyLevel_NS).should('be.visible')
        cy.get(selector.Square_Feet).should('be.visible')

    })

    it(' The price in the Current Heating Cost column will change when choosing Current Heater then Natural Gas', () => {
        cy.get(selector.Efficiency_HeatType).select('80');
        cy.get(selector.Current_Heating_Cost).invoke('text').as('initialCost')
        cy.get(selector.Heat_type).select('Natural Gas')
        cy.get(selector.Current_Heating_Cost).invoke('text').should('not.equal', 'initial cost')

    })

    it(' The price in the Current Heating Cost column will change when choosing Natural Gas then Propane ', () => {
        cy.get(selector.Efficiency_HeatType).select('90');
        cy.get(selector.Current_Heating_Cost).invoke('text').as('initialCost')
        cy.get(selector.Heat_type).select('Propane')
        cy.get(selector.Current_Heating_Cost).invoke('text').should('not.equal', 'initial cost');

    })

    it(' The price in the Current Heating Cost column will change when choosing Propane then Oil ', () => {
        cy.get(selector.Efficiency_HeatType).select('55');
        cy.get(selector.Current_Heating_Cost).invoke('text').as('initialCost')
        cy.get(selector.Heat_type).select('Oil')
        cy.get(selector.Current_Heating_Cost).invoke('text').should('not.equal', 'initial cost');
    })

    it(' The price in the Current Heating Cost column will change when choosing Oil then Electric ', () => {
        cy.get(selector.Efficiency_HeatType).select('55');
        cy.get(selector.Current_Heating_Cost).invoke('text').as('initialCost')
        cy.get(selector.Heat_type).select('Electric')
        cy.get(selector.Current_Heating_Cost).invoke('text').should('not.equal', 'initial cost');

    })

    it(' The price in the Current Heating Cost column will change when choosing Electric then Heat Pump ', () => {
        cy.get(selector.Efficiency_HeatType).select('70');
        cy.get(selector.Current_Heating_Cost).invoke('text').as('initialCost')
        cy.get(selector.Heat_type).select('Heat Pump')
        cy.get(selector.Current_Heating_Cost).invoke('text').should('not.equal', 'initial cost');

    })



})