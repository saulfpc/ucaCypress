/**
 * el problema durante el taller se  debio a un tema de BE
 * donde al no completarse dos request el sitio web
 * no hacia el trigger del evento load
 * lo que le decia a cypress que el sitio web ya estaba listo
 * solucionamos este problema
 * llendo a cypress.config.js
 * y agrengando las siguientes configuraciones en la linea 4
 *  "blockHosts":[
    "www.saucedemo.com/__socket/?EIO=4&transport=websocket",
    "www.saucedemo.com/__socket-graphql"
  ],
 */

  /**
   * removemos el should('be.clickable') ya que ese assert
   * no existe y su equivalente de enabled
   * no funciona bien con el boton
   * y actualizaremos
   * should("have.value") por should("have.length")
   */
it('code challenge', () => {
    cy.visit({url:"https://www.saucedemo.com/",method: 'GET'})
    cy.get('[data-test="username"]')
    .type(`standard_user`)
    cy.get('#password')
    .type('secret_sauce')
    cy.contains("Login").click()
    cy.get("button.btn_inventory").eq(0)
    .should('have.text','Add to cart')
    cy.get("button.btn_inventory").eq(0).click()
    cy.get("button.btn_inventory").eq(0)
    .should('have.text','Remove')
    cy.get("button.btn_inventory").eq(1).click()
    cy.get("a.shopping_cart_link").click()
    cy.get("div.cart_item").should("have.length",2)
    cy.contains("Remove").click()
    cy.get("div.cart_item").should("have.length",1)
    cy.contains("Checkout").click()
  })