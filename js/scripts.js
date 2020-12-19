const userUrl = "https://randomuser.me/api/?results=12&nat=us";
const gallery = document.querySelector('#gallery');
const modalDiv = document.querySelector('.modal-container');
let userArray = [];


// FETCH FUNCTION
//For this function I decided to go with a simple example from the video lesson on async/await
fetch(userUrl)
.then(res => res.json()) //returns in JSON format
.then(data => {
    const users = data.results;//this is the object from the url that contains the data needed
    //callback the card and modal function for each user
    for (i = 0; i < users.length; i++) {
        console.log(users[i]);
        createCard(users[i])
        createModal(users[i])
    }
    searchBar();
});



//GENERATE CARD FUNCTION

function createCard(data) {
    const card = ` <div class="card">
        <div class="card-img-container">
            <img class="card-img" src=${data.picture.medium} alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${data.name.first} ${data.name.last} last</h3>
            <p class="card-text">${data.email}</p>
            <p class="card-text cap">${data.location.city}, ${data.location.state}</p>
        </div>
    </div>
            
    </div>`;

    gallery.insertAdjacentHTML('beforeend', card);
}


//GENERATE MODAL FUNCTION

function createModal(data) {
    const modal = `<div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src=${data.picture.large} alt="profile picture">
                <h3 id="name" class="modal-name cap">${data.name.first} ${data.name.last}</h3>
                <p class="modal-text">${data.name.email}</p>
                <p class="modal-text cap">${data.name.city}</p>
                <hr>
                <p class="modal-text">${data.name.phone}</p>
                <p class="modal-text">${data.name.location}</p>
                <p class="modal-text">Birthday: ${data.name.dob}</p>
            </div>
        </div>`;

    modalDiv.insertAdjacentHTML('beforeend', modal);
}


//SEARCH BAR FUNCTION

function searchBar() {


}

