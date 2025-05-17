const VideoScreenshots = document.querySelectorAll('.SocialVideo_Screenshot'); // All screenshots
const Videos = document.querySelectorAll('.SocialVideo'); // All videos
const VideoContainers = document.querySelectorAll('.SocialVideo_Container'); // All video containers

// Loop through each container to add event listeners
VideoContainers.forEach((VideoContainer, index) => {
    const Video = Videos[index];
    const VideoScreenshot = VideoScreenshots[index];

    VideoContainer.addEventListener('mouseover', () => {
        Video.play();  // Play the video
    });

    VideoContainer.addEventListener('mouseout', () => {
        Video.pause();
        setTimeout(() => {
            Video.currentTime = 0; // Reset video to the beginning after 500ms
        }, 500);
    });
});

const SearchBar = document.querySelector('.Newsletter_SearchBar');
const Newsletter = document.querySelector('.Newsletter'); // Target the parent Newsletter

// Add event listeners to the SearchBar to toggle hover class
SearchBar.addEventListener('mouseover', () => {
    Newsletter.classList.add('Newsletter_SearchBarHovered');
});

SearchBar.addEventListener('mouseout', () => {
    Newsletter.classList.remove('Newsletter_SearchBarHovered');
});

const PerfumeButton = document.querySelector('.FeaturedProduct_Buttons');
const PerfumeButtonText = document.querySelector('.PerfumeButtonText');
const PerfumeButtonIcon = document.querySelector('.PerfumeButtonIcon');
const PerfumeButtonIconImg = document.querySelector('.PerfumeButtonIcon img');

PerfumeButton.addEventListener('mouseover', () => {
    PerfumeButtonText.style.backgroundColor = "rgba(0, 0, 0, 0)";
    PerfumeButtonText.style.color = "#000";
    PerfumeButtonIcon.style.backgroundColor = "rgba(0, 0, 0, 0)";
    PerfumeButtonIconImg.setAttribute('src', 'icon/Diagonal_arrow_hover.svg')
})

PerfumeButton.addEventListener('mouseout'
    , () => {
    PerfumeButtonText.style.backgroundColor = "#000";
    PerfumeButtonText.style.color = "#fff";
    PerfumeButtonIcon.style.backgroundColor = "#000";
    PerfumeButtonIconImg.setAttribute('src', 'icon/Diagonal_arrow.svg')

});

const Steps = document.querySelectorAll('.Routine_Step');
const StepChoosenBasic = document.querySelector('.Routine_StepChoosen_Basic');

Steps.forEach(Step => {
    Step.addEventListener('click', () => {
        console.log('Hovered over:', Step);

        // Reset the class of all other steps to 'Routine_Step'
        Steps.forEach(otherStep => {
            if (otherStep !== Step) {
                otherStep.classList.replace('Routine_StepChoosen', 'Routine_Step');
                StepChoosenBasic.classList.remove('Routine_StepChoosen_Basic')
            }
        });

        // Change the class of the hovered element to 'Routine_StepChoosen'
        Step.classList.replace('Routine_Step', 'Routine_StepChoosen');
    });
});

const ScrollerCard = document.querySelectorAll('.FeaturedProduct_ScrollerCard');

ScrollerCard.forEach(Card => {
    Card.addEventListener('mouseenter', () => {
        const Imagecard = Card.querySelector('.FeaturedProduct_ScrollerCard_Image');  // Get the image within the card
        
        // Start the opacity change smoothly
        Imagecard.style.opacity = "0";  // Fade out
        setTimeout(() => {  // Delay for the fade-out transition
            Imagecard.src = Imagecard.src.replace('.jpg', '2.jpg');  // Change the image source
            Imagecard.style.opacity = "1";  // Fade back in
        }, 150);  // 300ms corresponds to the duration of the fade-out
    });

    Card.addEventListener('mouseleave', () => {
        const Imagecard = Card.querySelector('.FeaturedProduct_ScrollerCard_Image');  // Get the image within the card
        
        // Start the opacity change smoothly
        Imagecard.style.opacity = "0";  // Fade out
        setTimeout(() => {  // Delay for the fade-out transition
            Imagecard.src = Imagecard.src.replace('2.jpg', '.jpg');  // Change the image back
            Imagecard.style.opacity = "1";  // Fade back in
        }, 150);  // 300ms corresponds to the duration of the fade-out
    });
});


const FeaturedProductButton = document.querySelector('.FeaturedProduct .Button_Text');
const FeaturedProductIcon = document.querySelector('.FeaturedProduct .Button_Icon');
const FeaturedProductIconImg = document.querySelector('.FeaturedProduct .Button_Icon_Arrow');
const FeaturedProduct = [FeaturedProductButton, FeaturedProductIcon];

FeaturedProduct.forEach(element => {
    element.addEventListener('mouseover', () => {
        FeaturedProductButton.style.backgroundColor = "#fff";
        FeaturedProductButton.style.color = "#000";
        FeaturedProductIcon.style.backgroundColor = "#fff";
        FeaturedProductIconImg.setAttribute('src', 'icon/Diagonal_arrow_hover.svg');
    });
});

FeaturedProduct.forEach(element => {
    element.addEventListener('mouseout', () => {
        FeaturedProductButton.style.backgroundColor = "#000";
        FeaturedProductButton.style.color = "#fff";
        FeaturedProductIcon.style.backgroundColor = "#000";
        FeaturedProductIconImg.setAttribute('src', 'icon/Diagonal_arrow.svg');
    });
});

const productContainers = [...document.querySelectorAll('.FeaturedProduct_Scroller')];
const nxtBtn = [...document.querySelectorAll('.nxt_btn')];
const preBtn = [...document.querySelectorAll('.pre_btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth*0.8;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth*0.8;
    });
});

const CheckOutBtn = document.querySelector('.Header_Items > .ImportantItem');
const CheckOutIcon = document.querySelector('.Header_Items > .ImportantItem > svg');

CheckOutBtn.addEventListener('mouseover', () => {
    CheckOutIcon.style.fill = "#fff";
});

const HeroInfoPart = document.querySelector('.Hero_InfoPart');
const HeroInfoPartBtn = document.querySelectorAll('.Hero_InfoPart_Top .Hero_InfoPart_TopElement');
const HeroInfoPartMain = document.querySelector('.Hero_InfoPart_Main');
const HeroInfoPartImg = document.querySelector('.Hero_InfoPart_MainTop img');


HeroInfoPart.addEventListener('mouseover', () => {
    HeroInfoPartBtn.forEach(Btn => {
        Btn.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        Btn.style.color = "rgba(33,29,30,0.8)";
    });
    HeroInfoPartMain.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    HeroInfoPartMain.style.color = "rgba(33,29,30,0.8)";
    HeroInfoPartImg.setAttribute('src', 'icon/Diagonal_arrow_hover.svg');
});

HeroInfoPart.addEventListener('mouseout', () => {
    HeroInfoPartBtn.forEach(Btn => {
        Btn.style.backgroundColor = "rgba(33,29,30,0.8)";
        Btn.style.color = "#fff";
    });
    HeroInfoPartMain.style.backgroundColor = "rgba(33,29,30,0.8)";
    HeroInfoPartMain.style.color = "#fff";
    HeroInfoPartImg.setAttribute('src', 'icon/Diagonal_arrow.svg');
});

const Body = document.querySelector('body');
const burgerIcon = document.querySelector('.Burger_menu_icon');
const burgerMenu = document.querySelector('.Burger_menu');

burgerIcon.addEventListener('click', () => {
    if (burgerMenu.style.display === 'block') {
      burgerMenu.style.display = 'none';
      Body.style.overflowY = "visible";
    } else {
      burgerMenu.style.display = 'block';
      Body.style.overflowY = "hidden";
    }
  });

  