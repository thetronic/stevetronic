const dataDiv = document.getElementById('gallery') // Replace with your div ID

function shuffle(array) {
  let currentIndex = array.length

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
}

function loadData() {
  fetch('shows.json') // Replace "shows.json" with your actual file path
    .then((response) => response.json())
    .then((data) => {
      const dataDiv = document.getElementById('gallery')
      shuffle(data)
      data.forEach((item) => {
        const image = document.createElement('img')
        console.log(item.image)
        console.log(item.link)
        image.src = item.image
        image.alt = 'Image' // Add an alt attribute for accessibility

        image.addEventListener('click', () => {
          window.location.href = item.link
        })

        const galleryitem = document.createElement('div')
        galleryitem.setAttribute('class', 'gallery-item')
        galleryitem.append(image)
        dataDiv.appendChild(galleryitem)
      })
    })
    .catch((error) => console.error('Error loading data:', error))
}

loadData()
