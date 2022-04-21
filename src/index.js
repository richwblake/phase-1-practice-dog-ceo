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
  const arrayOfBreeds = Object.keys(objectOfBreeds);

  arrayOfBreeds.forEach(breed => {
    const breedLi = document.createElement('li');
    breedLi.addEventListener('click', () => {
      breedLi.style.color === "blue" ? breedLi.style.color = "black" : breedLi.style.color = "blue"
    })
    breedLi.textContent = breed;
    breedList.append(breedLi);
  })

  const dropDown = document.getElementById('breed-dropdown');
  dropDown.addEventListener('change', (e) => {

    const currentLetter = e.target.value;
    const filteredDogArray = arrayOfBreeds.filter((breed) => {
      return breed[0] === currentLetter
    })

    breedList.textContent = "";

    filteredDogArray.forEach(dog => {
      const li = document.createElement('li');
      li.textContent = dog;
      breedList.append(li);
    })
  })
}