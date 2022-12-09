// scrolling animation 

AOS.init();

// menu script 

var menuList=document.getElementById("menulist");
menuList.style.maxHeight="0px";
function togglemenu(){
    if(menuList.style.maxHeight =="0px")
        {
         menuList.style.maxHeight="1200px";
        }
    else
        {
            menuList.style.maxHeight="0px";
        }

    }