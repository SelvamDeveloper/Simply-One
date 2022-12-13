// scrolling animation 

AOS.init();

// menu script 

        var menuList=document.getElementById("menulist");
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


// portfolio filter 

let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;

for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
        }

        this.classList.add('current');
        

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');

            if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}