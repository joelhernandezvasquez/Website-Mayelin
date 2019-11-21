
function hoverMenuItems(e)
{
  if(e.target.closest("li"))
  {
   const link= e.target.firstElementChild;
    link.style.color = "white";
  }
}

function hoverOutMenuItems(e)
{
  if(e.target.closest("li"))
 {
   const link= e.target.firstElementChild;
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

function hoverOutLinks(e)
{
  if(e.target.closest("a"))
 {
   e.target.style.color = "#e75aa1";
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
  const message = document.querySelector("#mensaje");
  const phoneNumber = document.querySelector("#phone");
  const nameErrorMessage = document.querySelector("#nameError");
 const emailErrorMessage = document.querySelector("#emailError");
  
  fullName.value="";
  email.value ="";
  message.value ="";
  phoneNumber.value ="";
  appointmentForm.classList.remove("openAppointmentForm");
  
  nameErrorMessage.style.display ="none";
  emailErrorMessage.style.display="none";
 
}

function submitAppointment(e)
{
 const fullName = document.querySelector("#name");
 const email = document.querySelector("#email");
 const nameErrorMessage = document.querySelector("#nameError");
 const emailErrorMessage = document.querySelector("#emailError");
  const name = fullName.value.trim();
  const emailInput = email.value.trim();
 

  //Get the form.
   var form = $('#form-appointment');
  
  //Get the messages div.
   var formMessages = $('#form-messages');
  
  // Serialize the form data.
  var formData = $(form).serialize();

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


// Submit the form using AJAX.
  $.ajax({
  type: 'POST',
  url: $(form).attr('action'),
  data:formData
 })

 .done(function (response){

  alert("se envio");
})

.fail(function (data){

  alert("fallo");
})

 
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
  const slideWidth = slides[0].getBoundingClientRect().width + 200;
  
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
  const slideWidth = slides[0].getBoundingClientRect().width + 80;
  
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

function closeVideo()
{
  const videoModalBox = document.querySelector(".video-modal-box");
  videoModalBox.classList.remove("open-video-modal");
}


 function openSlideShowGallery(e)
{
  const gallerySlideShow = document.querySelector(".gallery-slide-show");

  if(e.target.closest("img"))
  {
    gallerySlideShow.classList.add("open");
    
    chooseGalleryImage(e);
    runSlideShow();
  }
}

function chooseGalleryImage(e)
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

      const previousButton = document.querySelector(".left");
      previousButton.style.display = "none";
 
    
    }
   else if(ImageCardSelected==="2")
   {
       const currentSlide = slidesArray[1];
       currentSlide.classList.add("slide-selected");
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
    
    }

    else if(ImageCardSelected==="7")
    {
      const currentSlide = slidesArray[6];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 6 + "px";
       track.style.transform = `translateX(-${position})`
    
    }

    else if(ImageCardSelected==="8")
    {
      const currentSlide = slidesArray[7];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 7 + "px";
       track.style.transform = `translateX(-${position})`
    
    }
    else if(ImageCardSelected==="9")
    {
      const currentSlide = slidesArray[8];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 8 + "px";
       track.style.transform = `translateX(-${position})`
    }

    else if(ImageCardSelected==="10")
    {
      const currentSlide = slidesArray[9];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 9 + "px";
       track.style.transform = `translateX(-${position})`
    }

    else if(ImageCardSelected==="11")
    {
      const currentSlide = slidesArray[10];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 10 + "px";
       track.style.transform = `translateX(-${position})`
    }

    else if(ImageCardSelected==="12")
    {
      const currentSlide = slidesArray[11];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 11 + "px";
       track.style.transform = `translateX(-${position})`
    }

    else if(ImageCardSelected==="13")
    {
      const currentSlide = slidesArray[12];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 12 + "px";
       track.style.transform = `translateX(-${position})`
    }

    else if(ImageCardSelected==="14")
    {
      const currentSlide = slidesArray[13];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 13 + "px";
       track.style.transform = `translateX(-${position})`
    }

    else if(ImageCardSelected==="15")
    {
      const currentSlide = slidesArray[14];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 14 + "px";
       track.style.transform = `translateX(-${position})`
    }

    else if(ImageCardSelected==="16")
    {
      const currentSlide = slidesArray[15];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 15 + "px";
       track.style.transform = `translateX(-${position})`
    }

    else if(ImageCardSelected==="17")
    {
      const currentSlide = slidesArray[16];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 16 + "px";
       track.style.transform = `translateX(-${position})`
    }

    else if(ImageCardSelected==="18")
    {
      const currentSlide = slidesArray[17];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 17 + "px";
       track.style.transform = `translateX(-${position})`
    }

    else if(ImageCardSelected==="19")
    {
      const currentSlide = slidesArray[18];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 18 + "px";
       track.style.transform = `translateX(-${position})`
    }

    else if(ImageCardSelected==="20")
    {
      const currentSlide = slidesArray[19];
      currentSlide.classList.add("slide-selected");
      const position = slideWidth * 19 + "px";
       track.style.transform = `translateX(-${position})`
    }
 
}

function openAniversaryImages(e)
{
  const container = document.querySelector(".contenedor-imagen");
  container.classList.add("open-imagenes");

  selectAniversaryImage(e);
}

function closeIconGalleryAniversary(e)
{
  const container = document.querySelector(".contenedor-imagen");
  container.classList.remove("open-imagenes");
  location.reload();


}

function selectAniversaryImage(e)
{
  const divNode = e.target.dataset.photo;
  const imageContainer = document.querySelector(".contenedor-imagen")
  
  const image = document.createElement("img");
   image.style.marginTop ="10px";
  
  if(divNode==="1")
  {
    image.src="img/NGXH1449.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="2")
  {
    image.src="img/DGAC9540.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }
  if(divNode==="3")
  {
    image.src="img/JSBQ2231.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }
  if(divNode==="4")
  {
    image.src="img/MFXC8615.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }
  if(divNode==="5")
  {
    image.src="img/SEXK2821.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }
  if(divNode==="6")
  {
    image.src="img/EWRP6558.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }
  if(divNode==="7")
  {
    image.src="img/WIHO4174.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }
  if(divNode==="8")
  {
    image.src="img/EGXV9251.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }
  if(divNode==="9")
  {
    image.src="img/CEHP0089.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }
  if(divNode==="10")
  {
    image.src="img/KWUL5095.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }
  if(divNode==="11")
  {
    image.src="img/GUTC0913.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }
  
  if(divNode==="12")
  {
    image.src="img/EPOJ3930.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }
  if(divNode==="13")
  {
    image.src="img/ECRL3087.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }
  if(divNode==="14")
  {
    image.src="img/EREZ4554.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }
  if(divNode==="15")
  {
    image.src="img/VCRC1108.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }
  if(divNode==="16")
  {
    image.src="img/OICQ1587.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="17")
  {
    image.src="img/DHWQ8087.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="18")
  {
    image.src="img/JVVL7637.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }
  if(divNode==="19")
  {
    image.src="img/MZHM5292.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }
  if(divNode==="20")
  {
    image.src="img/WNKO8082.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="21")
  {
    image.src="img/WIVE4510.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="22")
  {
    image.src="img/VYMG0711.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="23")
  {
    image.src="img/IUVY7387.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="24")
  {
    image.src="img/GCAB1632.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="25")
  {
    image.src="img/NUPM8491.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="26")
  {
    image.src="img/HMVM4825.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="27")
  {
    image.src="img/DGAC9540.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="28")
  {
    image.src="img/DLOV7127.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="29")
  {
    image.src="img/IZKF1570.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="30")
  {
    image.src="img/IYRR0513.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="31")
  {
    image.src="img/TNMX6204.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="32")
  {
    image.src="img/NXBQ7424.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="33")
  {
    image.src="img/FFXC2240.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="34")
  {
    image.src="img/TJCG9321.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="35")
  {
    image.src="img/RJGK4296.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="36")
  {
    image.src="img/JAMA1519.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="37")
  {
    image.src="img/ETVK0159.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="38")
  {
    image.src="img/GAHJ2965.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="39")
  {
    image.src="img/thumbnail_Image-8.jpg";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="40")
  {
    image.src="img/SLUH7000.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="41")
  {
    image.src="img/PVER3654.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="42")
  {
    image.src="img/QNDO0900.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="43")
  {
    image.src="img/LURX0720.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="44")
  {
    image.src="img/JUZY6674.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="45")
  {
    image.src="img/ANZM2657.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="46")
  {
    image.src="img/UWDX9045.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="47")
  {
    image.src="img/OERN3473.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="48")
  {
    image.src="img/DWWF8154.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="49")
  {
    image.src="img/DDHG8214.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="50")
  {
    image.src="img/XEVM7038.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="51")
  {
    image.src="img/COHX0041.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="52")
  {
    image.src="img/LAQW2922.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="53")
  {
    image.src="img/SUXI9311.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="54")
  {
    image.src="img/HLKK8783.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="55")
  {
    image.src="img/LTRQ5270.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="56")
  {
    image.src="img/VKYE5679.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="57")
  {
    image.src="img/UMKE4917.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="58")
  {
    image.src="img/WGJN9239.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="59")
  {
    image.src="img/NZUR0567.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="60")
  {
    image.src="img/FVSG4902.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="61")
  {
    image.src="img/SGFB5150.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="62")
  {
    image.src="img/HFZC4502.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="63")
  {
    image.src="img/OSYO5805.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="64")
  {
    image.src="img/thumbnail_Image-9.jpg";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="65")
  {
    image.src="img/UOSO8567.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="66")
  {
    image.src="img/PFFS6541.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="67")
  {
    image.src="img/JKRJ7444.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="68")
  {
    image.src="img/WUPY1854.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="69")
  {
    image.src="img/NUIA1978.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="70")
  {
    image.src="img/OCCR8195.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="71")
  {
    image.src="img/thumbnail_Image-10.jpg";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="72")
  {
    image.src="img/WJWW1141.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="73")
  {
    image.src="img/JMGX7322.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="74")
  {
    image.src="img/LECQ9448.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="75")
  {
    image.src="img/NRCR7849.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="76")
  {
    image.src="img/SOOF4632.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="77")
  {
    image.src="img/BSAM9560.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="78")
  {
    image.src="img/BGXB1616.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="79")
  {
    image.src="img/BKQM2189.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="80")
  {
    image.src="img/CRQE8185.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="81")
  {
    image.src="img/DOHP8532.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="82")
  {
    image.src="img/ECBL5455.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="83")
  {
    image.src="img/EIYL8756.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="84")
  {
    image.src="img/GRTJ1979.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="85")
  {
    image.src="img/JFTO9062.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="86")
  {
    image.src="img/MPZO0665.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="87")
  {
    image.src="img/NFBR1427.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="88")
  {
    image.src="img/OXJG2113.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="89")
  {
    image.src="img/TBZP7466.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="90")
  {
    image.src="img/TQLW0966.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }

  if(divNode==="91")
  {
    image.src="img/WPWV0533.png";
    image.classList.add("responsive-images");
    imageContainer.appendChild(image);
    return;
  }
  
}

function sendContactForm(e)
{
  const fullName = document.querySelector("#contact-name");
  const emailInput = document.querySelector("#contact-email");
  const nameErrorMessage = document.querySelector("#nameError");
 const emailErrorMessage = document.querySelector("#emailError");

 const name = fullName.value.trim();
 const email = emailInput.value.trim();

 if(!name)
 {
   
  nameErrorMessage.style.display="block";
   fullName.focus();
   e.preventDefault();
   return;
 }

 if(!email)
 {
   emailErrorMessage.style.display="block";
   emailInput.focus();
   e.preventDefault();
   return;
 }

 


  
}

