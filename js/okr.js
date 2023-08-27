/**
 * Card Carousel Container
 */
const CardCarouselContainer = document.querySelectorAll('.card-carousel-container')

CardCarouselContainer.forEach(container =>{
    //Active Card Item
    var activeItem = container.querySelector('.card-carousel-item.active')

    //Previous Sibling of Active Item
    var activePrevSibling = activeItem.previousElementSibling
    //Carousel Navigation
    var nextNav = container.querySelector('.card-nav-next')
    var prevNav = container.querySelector('.card-nav-prev')

    //Adding the Active Item's Previous sibling with class
    if(activePrevSibling !== null)
        activePrevSibling.classList.add('left');

    // Trigger next Card Item
    nextNav.addEventListener('click', function(e){
        e.preventDefault()
        navigateNextCard()
    })
    // Trigger previuous Card Item
    prevNav.addEventListener('click', function(e){
        e.preventDefault()
        navigatePrevCard()
    })

    // Next Card Function
    const navigateNextCard = function(){
        if(activeItem.nextElementSibling == null ||(activeItem.nextElementSibling != null && !activeItem.nextElementSibling.classList.contains('card-carousel-item')))
            return false;
        if(activePrevSibling !== null && activePrevSibling.classList.contains('left'))
            activePrevSibling.classList.remove('left');
        activeItem.nextElementSibling.classList.add('active')
        activeItem.classList.remove('active')
        activeItem = activeItem.nextElementSibling
        activePrevSibling = activeItem.previousElementSibling
        activePrevSibling.classList.add('left')
        if(activeItem.nextElementSibling == null ||(activeItem.nextElementSibling != null && !activeItem.nextElementSibling.classList.contains('card-carousel-item')))
            nextNav.style.display = 'none';
        else
            nextNav.style.display = 'flex';
        if(activeItem.previousElementSibling == null ||(activeItem.previousElementSibling != null && !activeItem.previousElementSibling.classList.contains('card-carousel-item')))
            prevNav.style.display = 'none';
        else
            prevNav.style.display = 'flex';

        
    }
    // Previous Card Function
    const navigatePrevCard = function(){
        console.log(activeItem.previousElementSibling)
        if(activeItem.previousElementSibling == null ||(activeItem.previousElementSibling != null && !activeItem.previousElementSibling.classList.contains('card-carousel-item')))
            return false;
        if(activePrevSibling !== null && activePrevSibling.classList.contains('left'))
            activePrevSibling.classList.remove('left');
        activeItem.previousElementSibling.classList.add('active')
        activeItem.classList.remove('active')
        activeItem = activeItem.previousElementSibling
        activePrevSibling = activeItem.previousElementSibling
        if(activePrevSibling !== null && !activePrevSibling.classList.contains('left'))
            activePrevSibling.classList.add('left');
        if(activeItem.nextElementSibling == null ||(activeItem.nextElementSibling != null && !activeItem.nextElementSibling.classList.contains('card-carousel-item')))
            nextNav.style.display = 'none';
        else
            nextNav.style.display = 'flex';
        console.log(activeItem.previousElementSibling)
        if(activeItem.previousElementSibling == null ||(activeItem.previousElementSibling != null && !activeItem.previousElementSibling.classList.contains('card-carousel-item')))
            prevNav.style.display = 'none';
        else
            prevNav.style.display = 'flex';
    }
})