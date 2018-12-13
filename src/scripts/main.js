//order matters - append form first or console will log "null"
domBuilder.appendInputForm();
let legoBtn = document.querySelector(".lego__save");
//console.log(legoBtn);

//after "click", call object then method
legoBtn.addEventListener("click", eventListeners.handleFormSubmission);