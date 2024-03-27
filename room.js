// const MainImg = document.querySelector('#img1');

// ChangeRight = document.querySelector(".right")
// ChangeRight.addEventListener('click', ()=>{
//     MainImg.src='./images/desktop-image-hero-2.jpg';
// })

// ChangeRight = document.querySelector(".left")
// ChangeRight.addEventListener('click', ()=>{
//     MainImg.src='./images/desktop-image-hero-1.jpg';
// })

const imgs = document.querySelectorAll('.header-slider .top-left ul img')
const prev_btn = document.querySelector(' .control_prev');
const next_btn = document.querySelector(' .control_next');
const changeText = document.getElementById('first-text'); // Change this to match the correct ID of the text element
const changeText2 = document.getElementById('second-text');

// let n = 0;

var images = [
    "./images/desktop-image-hero-1.jpg",
    "./images/desktop-image-hero-2.jpg",
    "./images/desktop-image-hero-3.jpg"
];




var texts = [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials"
];

var texts2 = [
    "We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love. ",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
];

var currentIndex = 0; // Variable to keep track of the current index

function changeSlide() {
    
    // Select the image with class name "bac-img"
    var bac_img = document.querySelector('.bac-img');

    next_btn.addEventListener('click', () => {   
        // Set new image source
        bac_img.src = images[currentIndex];
        console.log(images[currentIndex]);
        
        // Increment currentIndex for the next click
        currentIndex++;

        // If currentIndex exceeds the length of the images array, reset it to 0
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        
        document.querySelector('.bac-img').src = images[currentIndex];
        changeText.textContent = texts[currentIndex];
        changeText2.textContent = texts2[currentIndex];
    });

    prev_btn.addEventListener('click', ()=>{
        var bac_img = document.querySelector('.bac-img');
        bac_img.src = images[currentIndex];
        currentIndex--;
         if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        // Change the image
        document.querySelector('.bac-img').src = images[currentIndex];
        // Change the text
        changeText.textContent = texts[currentIndex];
        changeText2.textContent = texts2[currentIndex];
    })

  
}

// Call the function to attach the event listener to the button
changeSlide();


// const backwards =()=>{
//     prev_btn.addEventListener('click' ,()=>{
//         var bac_img = document.querySelector('.bac-img');
//         bac_img.src = images[currentIndex];
//         currentIndex--;
//         if (currentIndex < 0) {
//             currentIndex = 0;
//         }
//     });
// }
// backwards();

// prev_btn.addEventListener('click', (e)=>{
//     if(n > 0){
//         n--;
//     }
//     else{
//         n = imgs.length - 1;
//     }
//     changeSlide();
// })

// next_btn.addEventListener('click', (e)=>{
//     if(n < imgs.length - 1){
//         n++;
//     }
//     else{
//         n = 0;
//     }
//     changeSlide();
// })