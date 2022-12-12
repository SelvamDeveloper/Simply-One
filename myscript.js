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


// mail section script 
function SendMail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "selvam.s3403@gmail.com",
        Password : "B521A14A4E2C63A95347FA3682F9024B155A",
        To : 'selvam.s3403@gmail.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
