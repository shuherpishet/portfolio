//установим анимацию для всех карточек с текстом
    function setAnimItemText() {
        let itemTextAll = document.querySelectorAll('.item_text'),
            itemTextFirst = document.querySelector('.item_text'),
            rightItemWindowWidth = document.querySelector('#one').getBoundingClientRect().width,
            i = 0,
            arrHello = ['HELLO!','HI!','##46^&%','привет','BONJOUR','BUENOS DIAS','ДОБРЫЙ ДЕНЬ','ДРАСТЕ','ПРИВЕТСТВУЮ','OLA!','GUTEN TAG','BUONGIORNO'];

        let intervalItemText = setInterval(animItemsText, 700);

        //каждую итерацию интервала показываем следующий элемент с текстом
            function animItemsText() {
                if (i < itemTextAll.length) {
                    itemTextAll[i].style.transform = 'rotate(0deg) translateY(0px)';
                    itemTextAll[i].style.animation = `item_text_anim .7s ease-in-out`;
        
                    //для первого текстового элемента добавляем анимацию и меняем текст
                    let timerFirstItemJump = setTimeout(() => {
                        if (i>1) {
                            itemTextFirst.style.animation = `item_text_anim_first .2s ease-out`;
                            let randHello = getRandRound(0, arrHello.length-1);
                            itemTextFirst.innerText = arrHello[randHello];
                        }

                        clearTimeout(timerFirstItemJump);
                    }, 450);

                    itemTextFirst.style.animation = `unset`;

                    i++;
                }else{
                    let timerFirstItemHidden = setTimeout(() => {
                        itemTextFirst.style.transform = 'rotate(0deg) translateY(0px)';
                        itemTextFirst.style.transform = `translateX(${rightItemWindowWidth}px)`;
                        let setHiFirstItem = setTimeout(() => {
                            itemTextFirst.innerText = 'ПРИВЕТ!';
                            itemTextFirst.style.transform = `translateX(0px)`;
                            clearTimeout(setHiFirstItem);
                        }, 700);
                    
                        clearInterval(intervalItemText);
                        clearTimeout(timerFirstItemHidden);
                    }, 1500);
                    strokeNextSlide();
                }
            }
    }

//установим анимацию для фото
    function setAnimPhoto() {
        let itemPhotoCircle = document.querySelector('.photo'),
            itemPhoto = document.querySelector('.photo video');

        let timerPhotoCircle = setTimeout(() => {
            itemPhotoCircle.style.transform = 'translate(0%, 0%)';
            clearTimeout(timerPhotoCircle);
        }, 1000);

        // let timerPhoto = setTimeout(() => {
        //     itemPhoto.style.transform = 'translateY(20%)';
        //     clearTimeout(timerPhoto);
        // }, 1400);

    }

//Работаем со стрелкой вниз
    function strokeNextSlide() {
        let strokeNext = document.querySelector('.stroke_next_slide'),
            html = document.querySelector('html'),
            body = document.querySelector('body');
        strokeNext.innerHTML = svgIcons.arrowDown;
        strokeNext.style.transform ='translateY(0px)';
        let anyTimerWiggle = setTimeout(() => {
            strokeNext.style.animation = `wiggle_stroke_next 1s ease-in-out infinite`;
            clearTimeout(anyTimerWiggle);
        }, 700);

        html.style.overflow = 'unset';
        body.style.overflow = 'unset';
        body.style.overflowX = 'hidden';
    }

//Вычислить рандом между двумя числами с округлением до целого
    function getRandRound(one, two) {
        return Math.round(Math.random() * (one - two) + two)
    }

    setAnimItemText();
    setAnimPhoto();

