const slider = document.querySelector('.slider-container');
const dotsContainer = document.querySelector('.dots-container');

async function fetchListOfImages() {
    try {
        const response = await fetch('https://picsum.photos/v2/list?page=1&limit=10', {
            method: 'GET'
        });

        const imagesList = await response.json();

        if (imagesList && imagesList.length > 0) {
            displayImages(imagesList);
            
        }


    } catch (error) {
        console.log(error);
    }
}

fetchListOfImages();


function displayImages(getImagesList) {
    console.log(getImagesList);
    
    slider.innerHTML = getImagesList.map(item => `
        <div class="slider absolute h-[30rem] w-[70%]">
        <img src="${item.download_url}" alt="${item.id} class="object-cover">
        </div>
        `).join("");

    dotsContainer.innerHTML = getImagesList.map((item, index) => `
        <span class ="dot h-4 w-4 bg-white rounded-full mt-[-6rem]" data-slide=${index}></span>
        `).join("")
}
