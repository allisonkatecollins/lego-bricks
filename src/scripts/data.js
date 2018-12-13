//fetch call copied from chapter, manually entered my API's URL
const data = {
    postLego (legoToSave) {
        fetch("http://localhost:8088/legos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(legoToSave)
        })
    }
  //  deleteLego (legoId) {
        //${legoId} is an alternative to hardcoding lego id #
        //fetch(`http://localhost:8088/legos/${legoId}`, {
        //method: "DELETE",
        //headers: {
            //"Content-Type": "application/json"
        //},
        //})
    //}


//data.deleteLego(1)

};