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

// function SendMail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "selvam.s3403@gmail.com",
//         Password : "4892BB1AE5CB9E11063305D35AF4C11425DA",
//         To : 'selvam.s3403@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }
