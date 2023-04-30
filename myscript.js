// scrolling animation 

AOS.init();

// menu script 
        let logo = document.querySelector(".logo");
        let svg = document.querySelector(".svgburg");
        var menuList=document.getElementById("menulist");
        let row = document.querySelector(".row-1");



        function togglemenu(){
            if(menuList.style.transform =="translate(0%)")
                {
                menuList.style.transform="translate(100%)";
                logo.style.position = "relative";
                svg.style.position = "relative";
                svg.style.top = "-7px";
                svg.style.right = "10px";
                row.style.opacity= "1";


                }
            else
                {
                menuList.style.transform="translate(0%)";
                logo.style.position = "fixed";
                svg.style.position = "fixed";
                svg.style.top = "26px";
                svg.style.right = "35px";
                row.style.opacity= "0";

                }

            }



// cursor movement script 


        var cursor = document.querySelector('.cursor');
        var cursorinner = document.querySelector('.cursor2');
        var a = document.querySelectorAll('a');

        document.addEventListener('mousemove', function(e){
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
        });

        document.addEventListener('mousemove', function(e){
        var x = e.clientX;
        var y = e.clientY;
        cursorinner.style.left = x + 'px';
        cursorinner.style.top = y + 'px';
        });

        document.addEventListener('mousedown', function(){
        cursor.classList.add('click');
        cursorinner.classList.add('cursorinnerhover')
        });

        document.addEventListener('mouseup', function(){
        cursor.classList.remove('click')
        cursorinner.classList.remove('cursorinnerhover')
        });

        a.forEach(item => {
        item.addEventListener('mouseover', () => {
            cursor.classList.add('hover');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
        })

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
        };


// counter 

    