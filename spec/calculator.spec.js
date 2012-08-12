describe("Calculator", function() {
        var calculator;

        beforeEach(function() {
                calculator = new Calculator();
        });

        describe("Entering single digits", function() {
                describe("when entering '0'", function() {
                        it("should display 0", function() {
                                calculator.enter("0");
                                expect(calculator.display()).toEqual("0");
                        });
                });
        });
});
