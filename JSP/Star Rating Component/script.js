const stars = document.querySelectorAll('.fa-star');
const selectedRatingValueText = document.querySelector('.selected-rating-value');

let currentTotalSelectedStars = -1;

stars.forEach((starItem, index) => {
    starItem.dataset.rating = index +1;
    starItem.addEventListener('mouseover', handleMouseOver);
    starItem.addEventListener('click', handleOnClick);
    starItem.addEventListener('mouseleave', handleMouseLeave);
});

function handleMouseOver(event){
    const currentRatingValue = event.target.dataset.rating;
    if(!currentRatingValue) return
    else{
        handleUpdateRatingState(currentRatingValue);
    }
    
}

function handleUpdateRatingState(getCurrentRatingValue){
    for(let i=0; i<5; i++){
        if(i<getCurrentRatingValue){
            stars[i].classList.add('text-[#FFD43B]')
        }
        else stars[i].classList.remove('text-[#FFD43B]')
    }

}

function handleOnClick(event){
    const currentRatingValue = event.target.dataset.rating;
    currentTotalSelectedStars = currentRatingValue;
    handleUpdateRatingState(currentTotalSelectedStars);
    selectedRatingValueText.innerHTML = `&nbsp;${currentTotalSelectedStars}`;
}


function handleMouseLeave(){
    handleUpdateRatingState(currentTotalSelectedStars);
}