// Tooltips Initialization
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

function copyEmail() {
    var toCopy = document.createElement("input");

    document.body.appendChild(toCopy);

    toCopy.setAttribute('value', "email@comp.com");
    toCopy.select();

    document.execCommand('copy');
    document.body.removeChild(toCopy);

    //trying to get tooltip text to change
    var tool = document.getElementById("email");
    tool.setAttribute('title', "Copied: email");
    $(element).attr('title', 'NEW_TITLE')
        .tooltip('fixTitle')
        .tooltip('show');
}