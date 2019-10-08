
function hoverMenuItems(e)
{
  if(e.target.closest("li"))
  {
    link= e.target.firstElementChild;
    link.style.color = "white";
  }
}

function hoverOutMenuItems(e)
{
  if(e.target.closest("li"))
 {
   link= e.target.firstElementChild;
   link.style.color = "#e75aa1";
 }
}

function hoverLinks(e)
{
  if(e.target.closest("a"))
 {
   e.target.style.color = "white";
 }
}

function openMenuBar(e)
{
  menuBar.classList.toggle("open-menu-bar");
  menuIcon.classList.toggle("change"); // animating the icon menu
}

function openAppointmentForm(e)
{
 const appointmentForm = document.querySelector(".appointment-container");
 appointmentForm.classList.add("openAppointmentForm");
}

function closeAppointmentForm()
{
  const appointmentForm = document.querySelector(".appointment-container");
  const fullName = document.querySelector("#name");
  const email = document.querySelector("#email");
  
  fullName.value="";
  email.value ="";
  appointmentForm.classList.remove("openAppointmentForm");
}

function submitAppointment(e)
{
 const fullName = document.querySelector("#name");
 const email = document.querySelector("#email");
 const nameErrorMessage = document.querySelector("#nameError");
 const emailErrorMessage = document.querySelector("#emailError");
  const name = fullName.value.trim();
  const emailInput = email.value.trim();

 if(!name)
 {
   nameErrorMessage.style.display ="block";
   fullName.focus();
   e.preventDefault();
  
 }
 else
 {
  nameErrorMessage.style.display ="none";
 }

 if(!emailInput)
 {
  emailErrorMessage.style.display ="block";
  email.focus();
  e.preventDefault();
 }
 else
 {
  emailErrorMessage.style.display ="none";
 }
 
}

function openGallerySlideShow(e)
{
  const gallerySlideShow = document.querySelector(".gallery-slide-show");

  if(e.target.closest("img"))
  {
    gallerySlideShow.classList.add("open");
    
    selectGalleryImage(e);
    runSlideShow();
  }
}



function selectGalleryImage(e)
{
  const ImageCardSelected = e.target.parentElement.parentElement.dataset.image;
    const slidesArray = Array.from(document.querySelectorAll(".slide"));
    const slideWidth = slidesArray[0].getBoundingClientRect().width + 200;
    const track = document.querySelector(".track-container-gallery");

   if(ImageCardSelected==="1")
    {
      const currentSlide = slidesArray[0];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 0;

      const galleryDotImage = document.querySelector("#first-gallery-image");
      galleryDotImage.children[0].style.opacity = "1";
      galleryDotImage.classList.add("current-image-selected");
      
      const previousButton = document.querySelector(".left");
      previousButton.style.display = "none";
 
    
    }
   else if(ImageCardSelected==="2")
   {
       const currentSlide = slidesArray[1];
       currentSlide.classList.add("slide-selected");
       const position = slideWidth * 1 + "px";

       const galleryDotImage = document.querySelector("#second-gallery-image");
       galleryDotImage.children[0].style.opacity = "1";
       galleryDotImage.classList.add("current-image-selected");

       track.style.transform = `translateX(-${position})`
       

     }
    else if(ImageCardSelected==="3")
    {
      const currentSlide = slidesArray[2];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 2 + "px";
      const galleryDotImage = document.querySelector("#third-gallery-image");
      galleryDotImage.children[0].style.opacity = "1";
      galleryDotImage.classList.add("current-image-selected");

      track.style.transform = `translateX(-${position})`
    }
    else if(ImageCardSelected==="4")
    {
      const currentSlide = slidesArray[3];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 3 + "px";
      const galleryDotImage = document.querySelector("#fourth-gallery-image");
      galleryDotImage.children[0].style.opacity = "1";
      
      galleryDotImage.classList.add("current-image-selected");
       track.style.transform = `translateX(-${position})`
    }
    else if(ImageCardSelected==="5")
    {
      const currentSlide = slidesArray[4];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 4 + "px";
      const galleryDotImage = document.querySelector("#fifth-gallery-image");
      galleryDotImage.children[0].style.opacity = "1";
      galleryDotImage.classList.add("current-image-selected");
       track.style.transform = `translateX(-${position})`
    }
    else if(ImageCardSelected==="6")
    {
      const currentSlide = slidesArray[5];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 5 + "px";
      const galleryDotImage = document.querySelector("#sixth-gallery-image");
      galleryDotImage.children[0].style.opacity = "1";
      galleryDotImage.classList.add("current-image-selected");
       track.style.transform = `translateX(-${position})`
       const nextButton = document.querySelector(".right");
       nextButton.style.display = "none";
    }
 
}

function closeGallery(e)
{
  const gallerySlideShow = document.querySelector(".gallery-slide-show");
  const track = document.querySelector(".track-container-gallery");
  const originalPosition = 0;
  const firstSlide = track.firstElementChild;
 
  track.style.transform = `translateX(-${originalPosition})`
  gallerySlideShow.classList.remove("open");
}

function runSlideShow()
{
  const slides = Array.from(document.querySelectorAll(".slide"));
  const slideWidth = slides[0].getBoundingClientRect().width + 2600;
  
  slides.forEach((slide,index)=>
  {
    slide.style.left = slideWidth * index + "px";
  
  }
  );

  const nextButton = document.querySelector(".right");
  const previousButton = document.querySelector(".left");

  nextButton.addEventListener("click",moveNextSlide);
  previousButton.addEventListener("click",movePreviousSlide);
}

function moveNextSlide()
{
  const track = document.querySelector(".track-container-gallery");
  const currentSlide = document.querySelector(".slide-selected");
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = nextSlide.style.left;

 track.style.transform = `translateX(-${amountToMove})`

 nextSlide.classList.add("slide-selected");
 currentSlide.classList.remove("slide-selected");

 const lastSlide = !nextSlide.nextElementSibling;
 const previousButton = document.querySelector(".left");

 if(lastSlide)
 {
   this.style.display = "none";
 }
 else
 {
   previousButton.style.display = "block";
 }

 updateImageDots("move-forward");
}

function movePreviousSlide()
{
  const track = document.querySelector(".track-container-gallery");
  const currentSlide = document.querySelector(".slide-selected");
  const previousSlide = currentSlide.previousElementSibling;
  const amountToMove = previousSlide.style.left;

 track.style.transform = `translateX(-${amountToMove})`

 previousSlide.classList.add("slide-selected");
 currentSlide.classList.remove("slide-selected");

 const firstSlide = !previousSlide.previousElementSibling;
 const nextButton = document.querySelector(".right");

 if(firstSlide)
 {
   this.style.display = "none";
 }

 else
 {
   nextButton.style.display = "block";
 }

 updateImageDots("move-back");
} 

function loadTestimonyCarrousel()
{
  const slides = Array.from(document.querySelectorAll(".testimony-slide"));
  const slideWidth = slides[0].getBoundingClientRect().width + 60;
  
  slides.forEach((slide,index)=>
  {
    slide.style.left = slideWidth * index + "px";
  
  }
  ); 

  const nextButton = document.querySelector(".right-arrow");
  const previousButton = document.querySelector(".left-arrow");

  nextButton.addEventListener("click",moveNextTestimonySlide);
  previousButton.addEventListener("click",movePreviousTestimonySlide);


}

function moveNextTestimonySlide()
{
  const track = document.querySelector(".slide-container");
  const currentSlide = document.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = nextSlide.style.left;
 
   track.style.transform = `translateX(-${amountToMove})`;

   nextSlide.classList.add("current-slide");
   currentSlide.classList.remove("current-slide");

   updateDots("move-forward");

}

function movePreviousTestimonySlide()
{
  const track = document.querySelector(".slide-container");
  const currentSlide = document.querySelector(".current-slide");
  const previousSlide = currentSlide.previousElementSibling;
  const amountToMove = previousSlide.style.left;
 
   track.style.transform = `translateX(-${amountToMove})`;

   previousSlide.classList.add("current-slide");
   currentSlide.classList.remove("current-slide");

   updateDots("move-back");
}

function targetDot(e)
{
  const track = document.querySelector(".slide-container");
  const currentSlide = document.querySelector(".current-slide");

  if(e.target.dataset.dot==="first")
  {
    const nextSlide = document.querySelector("#first-testimony-slide");
    const amountToMove = nextSlide.style.left;
    track.style.transform = `translateX(-${amountToMove})`;

    currentSlide.classList.remove("current-slide");
    nextSlide.classList.add("current-slide");

    const currentDot = document.querySelector(".dot-selected");
    currentDot.classList.remove("dot-selected");
    e.target.classList.add("dot-selected");
  }

  else if(e.target.dataset.dot==="second")
  {
    const nextSlide = document.querySelector("#second-testimony-slide");
    const amountToMove = nextSlide.style.left;
    track.style.transform = `translateX(-${amountToMove})`;

    currentSlide.classList.remove("current-slide");
    nextSlide.classList.add("current-slide");

    const currentDot = document.querySelector(".dot-selected");
    currentDot.classList.remove("dot-selected");
    e.target.classList.add("dot-selected");
  }

  else if(e.target.dataset.dot==="third")
  {
    const nextSlide = document.querySelector("#third-testimony-slide");
    const amountToMove = nextSlide.style.left;
    track.style.transform = `translateX(-${amountToMove})`;

    currentSlide.classList.remove("current-slide");
    nextSlide.classList.add("current-slide");

    const currentDot = document.querySelector(".dot-selected");
    currentDot.classList.remove("dot-selected");
    e.target.classList.add("dot-selected");
  }

}

function updateDots(action)
{
  const currentDot = document.querySelector(".dot-selected");

  if(action==="move-forward")
  {
    const nextDot = currentDot.nextElementSibling;
    currentDot.classList.remove("dot-selected");
    nextDot.classList.add("dot-selected");
    return;
  }

  if(action==="move-back")
  {
    const previousDot = currentDot.previousElementSibling;
    currentDot.classList.remove("dot-selected");
    previousDot.classList.add("dot-selected");
    return;
  }
}

function updateImageDots(action)
{
  const currentImage = document.querySelector(".current-image-selected");
  

  if(action==="move-forward")
  {
    const nextImage = currentImage.nextElementSibling;
   
    nextImage.classList.add("current-image-selected");
    currentImage.classList.remove("current-image-selected");
    

    currentImage.children[0].style.opacity = "0.5";
    nextImage.children[0].style.opacity = "1";
    
    return;
  }

  if(action==="move-back")
  {
    const previousImage = currentImage.previousElementSibling;
    previousImage.classList.add("current-image-selected");
    currentImage.classList.remove("current-image-selected");
    
    
    currentImage.children[0].style.opacity = "0.5";
    previousImage.children[0].style.opacity = "1";
    return;
  }
}

function targetDotsImageContainer(e)
{
  const track = document.querySelector(".track-container-gallery");
  const currentSlide = document.querySelector(".slide-selected");

  const currentDivDotImage = document.querySelector(".current-image-selected");
  

  if(e.target.dataset.imagen==="first")
  {
   
    const nextSlide = document.querySelector("#first-gallery-slide");
    const amountToMove = nextSlide.style.left;
    track.style.transform = `translateX(-${amountToMove})`;

    currentSlide.classList.remove("slide-selected");
    nextSlide.classList.add("slide-selected");

    currentDivDotImage.classList.remove("current-image-selected");
    e.target.parentElement.classList.add("current-image-selected");

    currentDivDotImage.children[0].style.opacity ="0.5";
    e.target.parentElement.children[0].style.opacity ="1"

    return;
  }

  if(e.target.dataset.imagen==="second")
  {
   
    const nextSlide = document.querySelector("#second-gallery-slide");
    const amountToMove = nextSlide.style.left;
    track.style.transform = `translateX(-${amountToMove})`;

    currentSlide.classList.remove("slide-selected");
    nextSlide.classList.add("slide-selected");

    currentDivDotImage.classList.remove("current-image-selected");
    e.target.parentElement.classList.add("current-image-selected");

    currentDivDotImage.children[0].style.opacity ="0.5";
    e.target.parentElement.children[0].style.opacity ="1"
    return;
  }

  if(e.target.dataset.imagen==="third")
  {
   
    const nextSlide = document.querySelector("#third-gallery-slide");
    const amountToMove = nextSlide.style.left;
    track.style.transform = `translateX(-${amountToMove})`;

    currentSlide.classList.remove("slide-selected");
    nextSlide.classList.add("slide-selected");

    currentDivDotImage.classList.remove("current-image-selected");
    e.target.parentElement.classList.add("current-image-selected");

    currentDivDotImage.children[0].style.opacity ="0.5";
    e.target.parentElement.children[0].style.opacity ="1"
    
    return;
  }

  if(e.target.dataset.imagen==="fourth")
  {
   
    const nextSlide = document.querySelector("#fourth-gallery-slide");
    const amountToMove = nextSlide.style.left;
    track.style.transform = `translateX(-${amountToMove})`;

    currentSlide.classList.remove("slide-selected");
    nextSlide.classList.add("slide-selected");

    currentDivDotImage.classList.remove("current-image-selected");
    e.target.parentElement.classList.add("current-image-selected");

    currentDivDotImage.children[0].style.opacity ="0.5";
    e.target.parentElement.children[0].style.opacity ="1"
    
    return;
  }

  if(e.target.dataset.imagen==="fifth")
  {
   
    const nextSlide = document.querySelector("#fifth-gallery-slide");
    const amountToMove = nextSlide.style.left;
    track.style.transform = `translateX(-${amountToMove})`;

    currentSlide.classList.remove("slide-selected");
    nextSlide.classList.add("slide-selected");

    currentDivDotImage.classList.remove("current-image-selected");
    e.target.parentElement.classList.add("current-image-selected");

    currentDivDotImage.children[0].style.opacity ="0.5";
    e.target.parentElement.children[0].style.opacity ="1"
    
    return;
  }
  if(e.target.dataset.imagen==="sixth")
  {
   
    const nextSlide = document.querySelector("#sixth-gallery-slide");
    const amountToMove = nextSlide.style.left;
    track.style.transform = `translateX(-${amountToMove})`;

    currentSlide.classList.remove("slide-selected");
    nextSlide.classList.add("slide-selected");

    currentDivDotImage.classList.remove("current-image-selected");
    e.target.parentElement.classList.add("current-image-selected");

    currentDivDotImage.children[0].style.opacity ="0.5";
    e.target.parentElement.children[0].style.opacity ="1"
    
    return;
  }

}

// END OF HOME PAGE

// FUNCTIONS FOR ABOUT US PAGE

function openVideo(e)
{
  const openVideo = document.querySelector(".video-modal-box");
  openVideo.classList.add("open-video-modal");
  
}

