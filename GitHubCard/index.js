/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// UNCOMMENT WHEN READY TO PULL IN DATA
axios.get('https://api.github.com/users/elysiagabe')
.then(response => {
  console.log(response.data);
  // append data to parent here
  parentDiv.appendChild(githubUserCard(response.data));
  
})
.catch(error => {
  console.log("Error: data not returned", error);
})


// DOESN'T WORK B/C THIS CALL WON'T RETURN ALL THE INFORMATION DESIRED
// axios.get('https://api.github.com/users/elysiagabe/followers')
// .then(response => {
//   console.log(response.data);
//   // append data to parent here
//   response.data.forEach(item => {
//     parentDiv.appendChild(githubUserCard(item));
//   })
// })
// .catch(error => {
//   console.log("Error: data not returned", error);
// })


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "priyadarshy",
  "chavli",
  "thericktastic",
  "teaguehannam",
  "ardissam0",
  "NataliaBeckstead",
  "ajablanco"
];

followersArray.forEach(follower => {
  axios.get('https://api.github.com/users/' + follower)
  .then(response => {
    console.log(response.data)
    let followerData = response.data;
    parentDiv.appendChild(githubUserCard(followerData));
  })
  .catch(error => {
    console.log("Error: data not returned", error);
  })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

// set parent element to append card to
const parentDiv = document.querySelector(".cards");

function githubUserCard(object) {
  // set up structure
  const card = document.createElement("div"),
    image = document.createElement("img"),
    infoContainer = document.createElement("div"),
    name = document.createElement("h3"),
    username = document.createElement("p"),
    location = document.createElement("p"),
    profile = document.createElement("p"),
    profileURL = document.createElement("a"),
    followersCount = document.createElement("p"),
    followingCount = document.createElement("p"),
    bio = document.createElement("p");

  // add classes
  card.classList.add("card");
  infoContainer.classList.add("card-info");
  name.classList.add("name");
  username.classList.add("username");

  // add content 
  image.src = object.avatar_url;
  name.textContent = object.name;
  username.textContent = object.login;
  location.textContent = "Location: " + object.location;
  profile.textContent = "Profile: ";
  profileURL.href = object.html_url;
  profileURL.textContent = object.html_url;
  followersCount.textContent = "Followers: " + object.followers;
  followingCount.textContent = "Following: " + object.following;
  bio.textContent = "Bio: " + object.bio;

  // append elements
  profile.append(profileURL);
  infoContainer.append(name, username, location, profile, followersCount, followingCount, bio);
  card.append(image, infoContainer);

  console.log(card);
  // return statement
  return card;
}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

