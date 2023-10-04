let images = ['img/avenue.jpg','img/beach.jpg','img/drop-of.jpg','img/earth.jpg','img/fanta.jpg', 'img/field.jpg', 'img/hand.jpg','img/mars.jpg','img/mist.jpg','img/ocean.jpg', 'img/rough-horn.jpg', 'img/soap-bubble-2.jpg','img/soap-bubble.jpg', 'img/sunset.jpg','img/technology.jpg','img/technology2.jpg', 'img/tree.jpg'];
let Index = 0;


function front() {
    for (let i = 0; i < images.length; i++) {
        document.getElementById('pics').innerHTML += `
                <img class="img" onclick="openImage(${i})" src=${images[i]}>
            `;
    }
}


function openImage(index) {
    Index = index;
    const openedImage = document.getElementById('openedImage');
    openedImage.src = images[Index];
    const openDiv = document.getElementById('open');
    openDiv.style.display = 'flex';
}


function closeImage() {
    const openDiv = document.getElementById('open');
    openDiv.style.display = 'none';
}


function navigate(direction) {
    Index += direction;
    if (Index < 0) {
        Index = images.length - 1;
    } else if (Index >= images.length) {
        Index = 0;
    }
    const openedImage = document.getElementById('openedImage');
    openedImage.src = images[Index];
}