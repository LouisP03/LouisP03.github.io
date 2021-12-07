function submitText() {
    localStorage.clear();
    sessionStorage.clear();
    console.log("Procedure called.");
    var text = document.getElementById('inputParagraph').value.trim();
    console.log(text);
    if (text == "") {
        return;
    }
    //displayText(text);
    localStorage.setItem('text', text);

    window.location.href = "selectGapPage.html";

}

