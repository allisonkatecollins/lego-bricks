//before starting, you know you will need to create an object
//handleFormSubmission is the key
//function is implied by () 
const eventListeners = {
    handleFormSubmission () {
        //get input values from form
        const creator = document.querySelector("#lego__creator").value;
        //debugger is an alternative to console.log to check work so far
        const name = document.querySelector("#lego__name").value;
        const color = document.querySelector("#lego__color").value;
        const shape = document.querySelector("#lego__shape").value;
        
        //create an object to represent a lego (structure copied from chapter)
        //pass legoObject as an argument thru another function, i.e. postLego
        const legoObject = {
            creatorName: creator,
            legoName: name,
            legoColor: color,
            legoShape: shape 
        }
        //console.log("legoToSave", legoToSave);

        //Post to API and pass legoObject
        data.postLego(legoObject);
        //when postLego call is made in data.js, legoObject = legoToSave 
    }
};