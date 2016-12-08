describe('Button caller', function () {
    var callButton;
    beforeEach(function () {
        browser.get('');
        // Gets the button to show message
        callButton = element(by.tagName('button'));
    });
    it('should display correct title', function () {
        expect(browser.getTitle()).toEqual('Angular 2 e2e testing with protractor');
    });
    it('should find the button to toggle Message', function () {
        expect(callButton.getText()).toEqual('Toggle Message');
    });
    it('should see Button clicked after calling him', function () {
        // Click the button
        callButton.click();
        expect(element(by.id('button-response')).isDisplayed()).toBeTruthy(); // Checking if element is displayed
        expect(element(by.id('button-response')).getText()).toEqual('Button clicked'); // Check if display text is correct
    });
});
//# sourceMappingURL=app.e2e-spec.js.map