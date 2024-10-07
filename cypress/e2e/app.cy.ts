describe('App', () => {
  it('should access the home page', () => {
    cy.visit('/');
    cy.get('h1').should('contain.text', 'Trivia');
  });

  it('should access the scores page and return to the home page', () => {
    cy.visit('/');
    cy.get('h1').should('contain.text', 'Trivia');

    cy.contains('Scores').click();
    cy.get('h1').should('contain.text', 'Scores');

    cy.contains('Back').click();
    cy.get('h1').should('contain.text', 'Trivia');
  });

  it('should access the help page and return to the home page', () => {
    cy.visit('/');
    cy.get('h1').should('contain.text', 'Trivia');

    cy.contains('How to play').click();
    cy.get('h1').should('contain.text', 'How to play');

    cy.contains('Back').click();
    cy.get('h1').should('contain.text', 'Trivia');
  });

  it('should access the game settings page and return to the home page', () => {
    cy.visit('/');
    cy.get('h1').should('contain.text', 'Trivia');

    cy.contains('New game').click();
    cy.get('h1').should('contain.text', 'Game settings');

    cy.contains('Back').click();
    cy.get('h1').should('contain.text', 'Trivia');
  });

  it('should start a new game and return to the home page when finished', () => {
    cy.visit('/');
    cy.get('h1').should('contain.text', 'Trivia');

    cy.contains('New game').click();
    cy.get('h1').should('contain.text', 'Game settings');

    cy.get('input[name="player"]').type('Player 1');
    cy.get('select[name="category"]').select('9');
    cy.get('select[name="difficulty"]').select('easy');
    cy.contains('Start').click();

    const amount = 10;

    cy.wrap(Array.from({ length: amount }, (v, k) => k + 1)).each(index => {
      cy.get('h1').should('contain.text', 'Question ' + index + ' of ' + amount);
      cy.get('button:first').click();
      cy.contains('Next question').click();
    });

    cy.get('h1').should('contain.text', 'Final score');

    cy.contains('Home').click();
    cy.get('h1').should('contain.text', 'Trivia');
  });
});
