/**
 * Lead form scripts
 * Set job title to "Software engineer" if lead source is "other".
 */
function setJobTitleFromLeadSource(executionContext) {
    var formContext = executionContext.getFormContext();
    
    var leadSourceAttr = formContext.getAttribute("leadsourcecode");
    if (!leadSourceAttr) {
        return;
    }
    
    var leadSourceValue = leadSourceAttr.getValue();
    
    if (!leadSourceValue) {
        return;
    }
    
    var jobTitleAttr = formContext.getAttribute("jobtitle");
    if (!jobTitleAttr) {
        return;
    }
    
    // Check if lead source is "other"
    if (leadSourceValue.toLowerCase() === "other") {
        jobTitleAttr.setValue("Software engineer");
    }
}
