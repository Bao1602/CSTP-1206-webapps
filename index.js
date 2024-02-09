const API_URL = "https://reqres.in/api/users";

let userInfoData = [];
const userContainer = document.getElementById("user-container");
const userClickedInfo = document.getElementById("user-clicked-info");


async function getUserInfo() {
  // JUST TO UNDERSTAND HOW IT WORKS WITH THEN CATCH BLOCK
  // fetch(API_URL).then((data) => {
  //     return data.json();
  // }).then((dataJSON) => {
  //     createCardUI();
  // }).catch((error) => {
  //     userInfoData = dataInJson.data || [];
  // })
  try {
    const data = await fetch(API_URL);
    const dataInJson = await data.json();
    userInfoData = dataInJson.data;
    generateAllCards(userInfoData);
  } catch (error) {
    console.log("There was an error", error);
    userInfoData = [];
  }
}

function createCardUI(user) {
  let cardUI = `
    <div class="card  m-4" style="width: 18rem;">
  <img src=${user.avatar} class="card-img-top" alt="...">
  <div class="card-body">
    <h1>${user.first_name} ${user.last_name}</h1>
    <p class="card-text">${user.email} ${user.id}</p>
  </div>
  <button class="btn-primary" onclick="getUserDetails(${user.id})">Get Details</button> 
</div>
    `;

  userContainer.innerHTML += cardUI;
}

function generateAllCards(userData = []) {
    for(let i = 0 ; i < userData.length; i++) {
        createCardUI(userData[i]);
    }
}

function getUserDetails(userId) {
  const user = userInfoData.find((user) => user.id === userId);
  userClickedInfo.innerHTML = `
  <div class="card m-4" style="width: 20rem;">
  <img src=${user.avatar} class="card-img-top" alt="...">
  <div class="card-body">
    <h1 class= "p-3 mb-2 bg-warning text-dark">${user.first_name} ${user.last_name}</h1>
    <p class="p-3 mb-2 bg-danger text-white">${user.email}</p>
  </div>`;

  
}

getUserInfo();


//every button have an id numbered
// when click find the id number then get the data  
// after that add the data into the container





