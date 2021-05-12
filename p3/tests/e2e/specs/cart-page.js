describe('Cart Page', () => {

    // Test recipe
    const recipe = {
        name: 'Oven Fried Chicken',
        id: 2
    }
    const ingredient = {
        name :'Sour Cream',
        id: 1 
    }

    it('adds and removes from cart', () => {
        cy.visit('/recipe/' + recipe.id);
        cy.get('[data-test="add-to-cart-button"]').click({multiple:true});

        cy.visit('/cart');
        cy.contains('[data-test="cart-contents"]', '1 x ' + ingredient.name);

        // Remove from cart 
        cy.get('[data-test="remove-from-cart-button"]').click();
        cy.contains('[data-test="cart-count"]', 0);
        cy.contains('No items');
    })
})