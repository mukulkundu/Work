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
        <span class ="dot cursor-pointer ${index === 0 ? 'bg-yellow-500' : ''} h-4 w-4 bg-white rounded-full mt-[-6rem]" data-slide=${index}></span>
        `).join("")
}



//Slider Functionality



setTimeout(() => {
    const slides = document.querySelectorAll('.slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentSlide = 0;

    function activeDot(slide) {
        document.querySelectorAll('.dot').forEach(dotItem => dotItem.classList.remove('bg-yellow-500'))
        document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('bg-yellow-500')
    }

    function changeCurrentSlide(currentSlide) {
        slides.forEach((slideItem, index) => slideItem.style.transform = `translateX(${100* (index - currentSlide)}%)`)
    }

    changeCurrentSlide(currentSlide)


    nextBtn.addEventListener('click', () => {
        currentSlide++;

        if (slides.length - 1 < currentSlide) {
            currentSlide = 0;
        }

        changeCurrentSlide(currentSlide)
        activeDot(currentSlide)
    })

    prevBtn.addEventListener('click', () => {
        currentSlide--;
        if (0 > currentSlide) {
            currentSlide = slides.length -1;
        }

        changeCurrentSlide(currentSlide)
        activeDot(currentSlide)
    })

    dotsContainer.addEventListener('click', (event) => {
        if(event.target.classList.contains('dot')){
            const currentSlide = event.target.dataset.slide
            changeCurrentSlide(currentSlide)
            activeDot(currentSlide)
        }
    })

}, 1000)