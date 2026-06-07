/**
 * Contact form scripts
 * Validate contact email field(s) on change/save.
 */
function validateContactEmail(executionContext) {
    var formContext = executionContext.getFormContext();
    var attr = formContext.getAttribute("emailaddress1");
    if (!attr) {
        return;
    }

    var value = attr.getValue();
    var control = formContext.getControl("emailaddress1");

    if (!value) {
        if (control) {
            control.clearNotification();
        }
        return;
    }

    var email = value.toString().trim();
    var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!valid) {
        if (control) {
            control.setNotification("Please enter a valid email address.");
        }
        var eventArgs = executionContext.getEventArgs();
        if (eventArgs && typeof eventArgs.preventDefault === "function") {
            eventArgs.preventDefault();
        }
    } else {
        if (control) {
            control.clearNotification();
        }
        attr.setValue(email);
    }
}
