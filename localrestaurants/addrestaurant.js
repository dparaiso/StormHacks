const form = document.querySelector('#add-restaurant-form');

//saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('restaurants').add({
        name: form.name.value,
        address: form.address.value,
        postalCode: form.postalCode.value,
        phoneNumber: form.phoneNumber.value,
        cuisine: form.cuisine.value,
        website: form.website.value,
        description: form.description.value,
        category: form.category.value,
        city: form.city.value,
        picture: form.picture.value
    });
    form.name.value = '';
    form.address.value = '';
    form.postalCode.value = '';
    form.cuisine.value='';
    form.website.value = '';
    form.description.value='';
    form.category.value='';
    form.city.value='';
    form.phoneNumber.value = '';
    form.picture.value= '';

});