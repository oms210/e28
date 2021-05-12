describe('recipe Create Page', () => {

    // Test recipe
    const recipe = {
        name: 'My New recipe',
        serves: 3,        
        categories:'Chicken,dinner',
       
    }

    it('adds a new recipe', () => {

        // First we have to login, because only auth’d users can add recipes
        // Login is a custom command defined in /tests/e2e/support/commands.js
        // Ref: https://docs.cypress.io/api/cypress-api/custom-commands.html
        cy.login();

        // Go to the "Add a recipe page"
        cy.visit('/recipe/new');

        // Enter the details for a new recipe
        cy.get('[data-test=recipe-name-input]').clear().type(recipe.name);
        cy.get('[data-test=recipe-serves-input]').clear().type(recipe.serves);
       
        cy.get('[data-test=recipe-categories-input]').clear().type(recipe.categories);

        // Submit the form
        cy.get('[data-test=add-recipe-button]').click();

        // Assert we see a confirmation message
        cy.get('[data-test=recipe-added-confirmation]').should('exist');

        // Go to the recipes page and confirm our new recipe is visible there
        cy.visit('/recipes');
        cy.contains(recipe.name);
    });

    it('shows error messages when blurring off a field', () => {

        cy.login();

        // Go to the "Add a recipe page"
        cy.visit('/recipe/new');

        // Make sure recipe name input is blank
        cy.get('[data-test=recipe-name-input]').clear();

        // Click on the next field to trigger the client-side validation
        cy.get('[data-test=recipe-serves-input]').click();

        // Assert we see validation feedback
        cy.contains("The name field is required.");
    });

    
})