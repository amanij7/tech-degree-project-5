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
        userArray.push(...data.results);
        createCard(users[i]);
        createModal(users[i]);
        console.log(users);
    }
    
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
    

    gallery.addEventListener('click', () => {
        createModal(userArray[i]);
        modalDiv.style.display = '';
    });
}


//GENERATE MODAL FUNCTION

function createModal(data) {
    const modal = `<div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src=${data.picture.large} alt="profile picture">
                <h3 id="name" class="modal-name cap">${data.name.first} ${data.name.last}</h3>
                <p class="modal-text">${data.email}</p>
                <p class="modal-text cap">${data.location.city}</p>
                <hr>
                <p class="modal-text">${data.phone}</p>
                <p class="modal-text">${data.location.street.number} ${data.location.street.name} ${data.location.city}, ${data.location.state} ${data.location.postcode}</p>
                <p class="modal-text">Birthday: ${data.dob.date.slice(5, 7)}/${data.dob.date.slice(8, 10)}/${data.dob.date.slice(2, 4)}</p>
            </div>
        </div>`;
   
    modalDiv.insertAdjacentHTML('beforeend', modal);
    modalDiv.style.display = "none";


    const button = document.querySelector('.modal-close-btn');
    button.addEventListener('click', () => {
        modalDiv.style.display = 'none';
    });

}



    



