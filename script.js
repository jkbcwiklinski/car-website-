const images = document.querySelectorAll("#gallery_photos img");
const modal = document.createElement("div");
const modalImg = document.createElement("img");

modal.style.display = "none";
modal.style.position = "fixed";
modal.style.top = 0;
modal.style.left = 0;
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
modal.style.zIndex = 999;
modal.style.alignItems = "center";
modal.style.justifyContent = "center";

modalImg.style.maxWidth = "90%";
modalImg.style.maxHeight = "90%";

modal.appendChild(modalImg);
document.body.appendChild(modal);

images.forEach(img => {
img.addEventListener("click", () => {
modal.style.display = "flex";
modalImg.src = img.src;
});
});

modal.addEventListener("click", () => {
modal.style.display = "none";
});


