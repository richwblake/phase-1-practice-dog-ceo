document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => displayDogsOnPage(json.message))

  fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => displayBreedsOnPage(json.message))
})

const displayDogsOnPage = (arrayOfDogs) => {
  const dogDiv = document.getElementById('dog-image-container')
  arrayOfDogs.forEach(dog => {
    const img = document.createElement('img');
    img.src = dog
    dogDiv.appendChild(img)
  })
}

const displayBreedsOnPage = (objectOfBreeds) => {
  const breedList = document.getElementById('dog-breeds');
  breedList.textContent = "";
  console.log(objectOfBreeds);
  const arrayOfBreeds = Object.keys(objectOfBreeds);
  console.log(arrayOfBreeds)

  arrayOfBreeds.forEach(breed => {
    const breedLi = document.createElement('li');
    breedLi.textContent = breed;
    breedList.append(breedLi);
  })
}





// function displayDogsOnPage(arrayOfDogs) {

// }