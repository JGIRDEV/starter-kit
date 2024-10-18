sap.ui.define([
    "stk/StarterKit/model/formatter"
], function (formatter) {
    QUnit.module("Name formatting");

    function nameFormattingTest(oOptions) {
        var sName = formatter.formatName(oOptions.firstName, oOptions.lastName);

        oOptions.assert.strictEqual(sName, oOptions.expected, "The name was correctly formatted: " + sName);
    }

    QUnit.test("Should format 'Jakub Girek' to 'J. Girek'", function (assert) {
        nameFormattingTest.call(this, {
            assert: assert,
            firstName: "Jakub",
            lastName: "Girek",
            expected: "J. Girek"
        });
    });

    QUnit.test("Should format 'Wojciech Pietrzak' to 'W. Pietrzak'", function (assert) {
        nameFormattingTest.call(this, {
            assert: assert,
            firstName: "Wojciech",
            lastName: "Pietrzak",
            expected: "W. Pietrzak"
        });
    });
})