
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