const restaurantList = document.querySelector('#restaurant-list');

//create element and render restaurant
function renderRestaurant(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let address = document.createElement('span');
    let city = document.createElement('span');
    let postalCode = document.createElement('span');
    let phoneNumber = document.createElement('span');
    let cuisine = document.createElement('span');
    let category = document.createElement('span');
    let description = document.createElement('span');
    let website = document.createElement('span');
    let picture = document.createElement('span');
    
    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    address.textContent = doc.data().address;
    city.textContent = doc.data().city;
    postalCode.textContent = doc.data().postalCode;
    phoneNumber.textContent = doc.data().phoneNumber;
    cuisine.textContent = doc.data().cuisine;
    category.textContent = doc.data().category;
    description.textContent = doc.data().description;
    website.textContent = doc.data().website;
    picture.textContent = doc.data().picture;
    
    li.appendChild(name);
    li.appendChild(address);
    li.appendChild(city);
    li.appendChild(postalCode);
    li.appendChild(phoneNumber);
    li.appendChild(cuisine);
    li.appendChild(category);
    li.appendChild(description);
    li.appendChild(website);
    li.appendChild(picture);

    restaurantList.appendChild(li);
}

db.collection('restaurants').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderRestaurant(doc);
    })
})
