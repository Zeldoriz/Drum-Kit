for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {

    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        switch (this.innerHTML) {
            case 'w':
                var audio = new Audio("sounds/crash.mp3");
                currentButton = document.querySelector('.' + this.innerHTML)
                currentButton.classList.add('pressed')
                setTimeout(function () {
                    currentButton.classList.remove('pressed')
                }, 75)
                audio.play();
                break;
            case 'a':
                var audio = new Audio("sounds/kick-bass.mp3");
                currentButton = document.querySelector('.' + this.innerHTML)
                currentButton.classList.add('pressed')
                setTimeout(function () {
                    currentButton.classList.remove('pressed')
                }, 75)
                audio.play();
                break;
            case 's':
                var audio = new Audio("sounds/snare.mp3");
                currentButton = document.querySelector('.' + this.innerHTML)
                currentButton.classList.add('pressed')
                setTimeout(function () {
                    currentButton.classList.remove('pressed')
                }, 75)
                audio.play();
                break;
            case 'd':
                var audio = new Audio("sounds/tom-1.mp3");
                currentButton = document.querySelector('.' + this.innerHTML)
                currentButton.classList.add('pressed')
                setTimeout(function () {
                    currentButton.classList.remove('pressed')
                }, 75)
                audio.play();
                break;
            case 'j':
                var audio = new Audio("sounds/tom-2.mp3");
                currentButton = document.querySelector('.' + this.innerHTML)
                currentButton.classList.add('pressed')
                setTimeout(function () {
                    currentButton.classList.remove('pressed')
                }, 75)
                audio.play();
                break;
            case 'k':
                var audio = new Audio("sounds/tom-3.mp3");
                currentButton = document.querySelector('.' + this.innerHTML)
                currentButton.classList.add('pressed')
                setTimeout(function () {
                    currentButton.classList.remove('pressed')
                }, 75)
                audio.play();
                break;
            case 'l':
                var audio = new Audio("sounds/tom-4.mp3");
                currentButton = document.querySelector('.' + this.innerHTML)
                currentButton.classList.add('pressed')
                setTimeout(function () {
                    currentButton.classList.remove('pressed')
                }, 75)
                audio.play();
                break;

            default:
                console.log(this.innerHTML);
                break;
        };
    });
}

document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'w':
            var audio = new Audio("sounds/crash.mp3");
            document.querySelector('.w').classList.add('pressed')
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/kick-bass.mp3");
            document.querySelector('.a').classList.add('pressed')
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/snare.mp3");
            document.querySelector('.s').classList.add('pressed')
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-1.mp3");
            document.querySelector('.d').classList.add('pressed')
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/tom-2.mp3");
            document.querySelector('.j').classList.add('pressed')
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/tom-3.mp3");
            document.querySelector('.k').classList.add('pressed')
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/tom-4.mp3");
            document.querySelector('.l').classList.add('pressed')
            audio.play();
            break;

        default:
            console.log(this.innerHTML);
            break;
    }
});

document.addEventListener('keyup', function () {
    eleList = document.querySelectorAll('.drum')
    for (var i = 0; i < eleList.length; i++) {
        console.log(eleList[i].classList)
        eleList[i].classList.remove('pressed')
    }
})