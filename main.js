async function getPhotos() {
  const res = await fetch(
    `https://picsum.photos/v2/list?page=${Math.floor(
      Math.random() * 10
    )}&limit=8`
  );
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
