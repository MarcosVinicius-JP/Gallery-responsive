var modalWindow = document.getElementById('modalWindow'),
    blackout    = document.getElementById('blackout'),
    images      = document.querySelectorAll('.img'),
    picture     = document.getElementById('picture'),
    close       = document.getElementById('close'),
    previous    = document.getElementById('previous'),
    next        = document.getElementById('next'),
    number;

    images.forEach((img, index) => {
        img.addEventListener("click", function(){
            number = index;
            modalWindow.style.display = "block";
            picture.style.backgroundImage = this.style.backgroundImage;
        });
    });

    previous.onclick = function(){
        number--;
        if(number == -1)
        number = images.lenght -1;
        picture.style.backgroundImage = images[number].style.backgroundImage

    }

    next.onclick = function () {
        number++;
        if(number == images.length)
        number = 0;
        picture.style.backgroundImage = images[number].style.backgroundImage
    }

    close.onclick = function() {
        modalWindow.style.display = "none"
    }

    modalWindow.Window.onclick = function(event){
        if(event.target ==  blackout){
            modalWindow.style.display = "none"
        }
    }