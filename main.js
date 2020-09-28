async function getPhotos() {
  const res = await fetch("https://picsum.photos/v2/list?page=10&limit=12");
  const data = await res.json();
  console.log(data);
  showPhotos(data);
}

getPhotos();

function showPhotos(photos) {
  document.getElementById("photos").innerHTML = `
    ${photos
      .map((photo) => {
        return `<img class="photo-space" width="300" height="300" src="${photo.download_url}">`;
      })
      .join("")}
  `;
}
