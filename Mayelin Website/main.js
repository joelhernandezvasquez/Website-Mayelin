
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
    const slideWidth = slidesArray[0].getBoundingClientRect().width + 50;
    const track = document.querySelector(".track-container-gallery");

   if(ImageCardSelected==="1")
    {
      const currentSlide = slidesArray[0];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 0;
      const previousButton = document.querySelector(".left");
      previousButton.style.display = "none";
    }
   else if(ImageCardSelected==="2")
   {
       const currentSlide = slidesArray[1];
       currentSlide.classList.add("slide-selected");
       console.log(currentSlide);
       
       const position = slideWidth * 1 + "px";
       track.style.transform = `translateX(-${position})`

     }
    else if(ImageCardSelected==="3")
    {
      const currentSlide = slidesArray[2];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 2 + "px";
      track.style.transform = `translateX(-${position})`
    }
    else if(ImageCardSelected==="4")
    {
      const currentSlide = slidesArray[3];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 3 + "px";
       track.style.transform = `translateX(-${position})`
    }
    else if(ImageCardSelected==="5")
    {
      const currentSlide = slidesArray[4];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 4 + "px";
       track.style.transform = `translateX(-${position})`
    }
    else if(ImageCardSelected==="6")
    {
      const currentSlide = slidesArray[5];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 5 + "px";
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
  const slideWidth = slides[0].getBoundingClientRect().width + 50;
  
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
} 
