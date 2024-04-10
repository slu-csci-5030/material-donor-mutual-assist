// script.js

// Flag to track if sidebar items have been created
var sidebarItemsCreated = false;

// Function to create and append sidebar navigation items, input fields, and buttons
function createSidebarItems() {
    var sidebar = document.getElementById("sidebar");
    var sidebarItems = [
        "Hi Admin", // Change the order here
        "Dashboard",
        "Donors",
        "Donations",
        "Programs"
    ];

    // Create sidebar navigation
    var ul = document.createElement("ul");

    sidebarItems.forEach(function(itemText) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "#";
        a.textContent = itemText;
        li.appendChild(a);
        ul.appendChild(li);
    });

    sidebar.appendChild(ul);

    // Create input fields and buttons
    var mainContent = document.getElementById("mainContent");
    var form = document.createElement("form");
    mainContent.appendChild(form);

    var fields = ["First Name", "Last Name", "Email", "Phone Number", "Address", "Zip Code"];
    fields.forEach(function(field) {
        var label = document.createElement("label");
        label.textContent = field + ":";
        form.appendChild(label);

        var input = document.createElement("input");
        input.type = field === "Email" ? "email" : field === "Phone Number" || field === "Zip Code" ? "tel" : "text";
        input.required = true;
        form.appendChild(input);

        form.appendChild(document.createElement("br"));
    });

    var submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    var clearButton = document.createElement("button");
    clearButton.type = "button";
    clearButton.textContent = "Clear";
    form.appendChild(clearButton);

    // Set the flag to true after creating sidebar items
    sidebarItemsCreated = true;
}

// Call the function to create and append sidebar items when the page loads, only if not already created
window.onload = function() {
    if (!sidebarItemsCreated) {
        createSidebarItems();
    }
};
