
//GLOBAL VARIABLES FOR APPOINTMENT Form

const name = document.querySelector("#name");
const email = document.querySelector("#email");


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
  appointmentForm.classList.remove("openAppointmentForm");
}

function submitAppointment(e)
{
 e.preventDefault();


alert(email);

 if(name.length <=0)
 {
   alert("empty");
 }
 else
 {
   alert("is not empty");
 }

}