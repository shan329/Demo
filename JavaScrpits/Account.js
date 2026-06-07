/**
 * Account form scripts
 * Validate account_mobile_number as exactly 10 digits.
 */
function validateAccountMobileNumber(executionContext) {
    var formContext = executionContext.getFormContext();
    var attr = formContext.getAttribute("account_mobile_number");
    if (!attr) {
        return;
    }

    var value = attr.getValue();
    var control = formContext.getControl("account_mobile_number");

    if (!value) {
        if (control) {
            control.clearNotification();
        }
        return;
    }

    var digits = value.replace(/\D/g, "");
    var valid = /^\d{10}$/.test(digits);

    if (!valid) {
        if (control) {
            control.setNotification("Mobile number must be exactly 10 digits.");
        }
        var eventArgs = executionContext.getEventArgs();
        if (eventArgs && typeof eventArgs.preventDefault === "function") {
            eventArgs.preventDefault();
        }
    } else {
        if (control) {
            control.clearNotification();
        }
        attr.setValue(digits);
    }
}
