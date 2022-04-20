showNotes();

let addBtn = document.getElementById('addBtn');

addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.querySelector('#addTitle');
    let notes = localStorage.getItem("notes")

    // console.log(addTitle);

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value

    }

    notesObj.push(myObj)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    addTxt.value = "";
    addTitle.value = "";
    // console.log(notesObj)
    showNotes();
})


// function to show element from localstorage
function showNotes() {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = ""
    notesObj.forEach(function (element, index) {
        let a = new Date;
        html += `
        <div class="noteCard">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <div class="card-btn-cnt"> 
                        <button id ="${index}" onclick ="deleteNote(this.id)" class="btn btn-primary del-btn">Delete</button>
                        <button id ="${index}" onclick ="deleteNote(this.id)" class="btn btn-primary edit-btn">Edit</button>
                    </div>
                    <div>
                        ${a.toDateString()}
                    </div>
                </div>
            </div>
        
        `;

    });

    let notesElm = document.getElementById('notes')
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `<span class="nothing-msg"> 😒 Nothing to show! Add a note</span>`
    }

}


// function to delete node

function deleteNote(index) {
    console.log("I am deleting", index)

    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    showNotes();
}
