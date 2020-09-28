function getPhotos() {
  const response = await fetch("https://picsum.photos/v2/list?page=1&limit=9")
  const data = await response.json()
  console.log(data)
}

getPhotos()