const dataDiv = document.getElementById('gallery') // Replace with your div ID

function loadData() {
  fetch('shows.json') // Replace "shows.json" with your actual file path
    .then((response) => response.json())
    .then((data) => {
      const dataDiv = document.getElementById('gallery')
      data.forEach((item) => {
        const image = document.createElement('img')
        console.log(item.image)
        console.log(item.link)
        image.src = item.image
        image.alt = 'Image' // Add an alt attribute for accessibility
        image.setAttribute('class', 'gallery-item')

        image.addEventListener('click', () => {
          window.location.href = item.link
        })

        dataDiv.appendChild(image)
      })
    })
    .catch((error) => console.error('Error loading data:', error))
}

loadData()
