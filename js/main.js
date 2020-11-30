
//alert("Hello world")
(function init(){
    // start

    console.info("Hello Console")
    console.dir(document)
    console.dir(document.getElementById("myHeading"))
    document.getElementById("myHeading").innerHTML = "Ehsan's website"

    //document.querySelector("nav ul li").setAttribute("class", "currentPage")
   // document.querySelector("nav ul li a").setAttribute("href", "http://www.google.co.uk")

    //DOM Event
   /* document.getElementById("myTestEvent").onclick = function(){
        console.info("DOM Event")
    }*/

    document.getElementById("myTestEvent").addEventListener("click", myFunction)

    function myFunction(ev){
        console.info("Hello from the addList")
        console.dir(ev)
    }

    // document.querySelector(".red").addEventListener("click", function(ev){
    //     document.querySelector("body").setAttribute("class", "redBack");
    // })

    // document.querySelector(".green").addEventListener("click", function(ev){
    //     document.querySelector("body").setAttribute("class", "greenBack");
    // })

    // document.querySelector(".blue").addEventListener("click", function(ev){
    //     document.querySelector("body").setAttribute("class", "blueBack");
    // })

    // document.querySelector(".reset").addEventListener("click", function(ev){
    //     document.querySelector("body").setAttribute("class", "reset");
    // })

    var colourButtons = document.querySelectorAll(".colPicker")
    console.dir(colourButtons)

    for (var i = 0; i < colourButtons.length; i++){
        console.dir(colourButtons[i])
        colourButtons[i].addEventListener("click", chgcolour)
    }

    function chgcolour(ev){
        console.info(ev.target.classList[0])

        var colourPicked = ev.target.classList[0] + "Back"
        var bodyElement = document.querySelector("body")
        if(colourPicked === "resetBack"){
            bodyElement.removeAttribute("class")

        }else{
                bodyElement.setAttribute("class", colourPicked)
        }
    }

    //image rototor
    var imageAr = ['images/view1.jpg', 'images/view2.jpg', 
                    'images/view3.jpg', 'images/view4.jpg',
                    'images/view5.jpg', 'images/view6.jpg'
                ];


    document.getElementById("myImages").setAttribute("src", imageAr[2])

    // setInterval(function(){
    //     console.info("Hi")
    // }, 1000)

    var counter = 0;
    chgImage()
    setInterval(chgImage, 2000)
    function chgImage(){
        counter++
        if(counter === imageAr.length){
            counter = 0;
        }
        document.getElementById("myImages").setAttribute("src", imageAr[counter])
        
    }

    console.dir(window.location.href)
    var url = window.location.href;
    //console.dir(url.split("/").pop());
    var fileName = url.split("/").pop();
    console.info(fileName)


    //end

})()


//TODO built a currency convertor 