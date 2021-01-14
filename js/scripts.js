const userUrl = "https://randomuser.me/api/?results=12&nat=us";
const gallery = document.querySelector('#gallery');

//I decided to create a div for the modal and isolate this particular element so I can be able to attatch this div element to the body tag
const modalDiv = document.createElement('div');
    modalDiv.className = "modal-container";
    modalDiv.style.display = "none";
    document.body.append(modalDiv);

const modalContainer = document.querySelector('.modal-container');



// FETCH FUNCTION
//For this function I decided to go with a simple example from the video lesson on async/await
fetch(userUrl)
.then(res => res.json()) //returns in JSON format
.then(data => {
    const users = data.results;//this is the object from the url that contains the data needed
    //iterating over each user and calling the card and modal function for each iteration
    for (i = 0; i < users.length; i++) {
        createCard(users[i], i);    
        createModal(users[i]); 
    }   

})
.catch(error => console.log("Sorry. Something went wrong.")); //this catch phrase will log an error message of something is wrong with the api


//GENERATE CARD FUNCTION

function createCard(data, index) {
    //card snippet
    const card = ` <div class="card">
        <div class="card-img-container">
            <img class="card-img" src=${data.picture.medium} alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${data.name.first} ${data.name.last}</h3>
            <p class="card-text">${data.email}</p>
            <p class="card-text cap">${data.location.city}, ${data.location.state}</p>
        </div>
    </div>
            
    </div>`;
    //attatching the card to the gallery
    gallery.insertAdjacentHTML('beforeend', card);
    
    //selecting every card class and adding a click listener that will display the modal that matches the index of the card that is clicked
    const cards = document.querySelectorAll('.card');
    cards[index].addEventListener('click', e => { 
        let modalArray = document.querySelectorAll('.modal');
        modalArray[index].style.display = '';
        modalContainer.style.display = '';
    });
}


//GENERATE MODAL FUNCTION

function createModal(data) {
    //modal snippet
    const modal = `
    <div class="modal" > 
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
            </div>
        </div>`;
   
    //attatching the modal code to the modalContainer variable created at the begining of the file
    modalContainer.insertAdjacentHTML('beforeend', modal);
    //contains the new created modal
    const myModal = modalContainer.lastElementChild;
    //hide the new modal
    myModal.style.display = "none";

    //selecting the close button in each modal
    const button = myModal.querySelector('.modal-close-btn');
    //adding a click listener to hide the modal
    button.addEventListener('click', () => {
        myModal.style.display = 'none';
        modalContainer.style.display = 'none';
    });
}



    



