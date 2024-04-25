'use strict';
let body = document.querySelector('body'),
    bgbg = document.createElement('div');
    bgbg.classList.add('bg_load');
    //console.log(body)
    body.append(bgbg);
window.addEventListener('load', function () {

//пишем запись о посещении страницы в local storage
function workFromLocalStorage() {
    bgbg.style.display = 'none';
        if(localStorage.visit) {
            let dateActual = getNowDate(),
                localStorDate = localStorage.visit_date;
            localStorage.visit = dateActual;
            //console.log(localStorage.getItem('visit'));
        
            setTimeout(() => {
                popMassege(`Я вас помню! Вы уже заходили на мою страничку ${localStorDate}`, 'img/briefcase.png');
            }, 100000);
            localStorage.setItem('visit_date', dateActual);
        }
        localStorage.setItem('visit', true);
        setTimeout(() => {
            popMassege('Вы уже три минуты на моей страничке. Спасибо за проявленный интерес. Свяжитесь со мной:','img/timer.svg','icon', 'https://api.whatsapp.com/send?phone=<79990596649>', 'img/whatsapp.svg', 'tg://resolve?domain=shuherpishet', 'img/telegramm.svg', 'https://www.instagram.com/shuherpishetrovno', 'img/instagram.svg', 'https://vladivostok.hh.ru/resume/9885f7fdff0821fd9d0039ed1f416668635950', 'img/hh.png', 'https://github.com/shuherpishet', 'img/githubSN.svg', 'https://codepen.io/shuherpishet', 'img/codepen.svg');
        }, 180000);
    
    }
    workFromLocalStorage();
    
    //Получаем актуальную дату
    function getNowDate() {
        let nowTime = new Date();
    
        let nowDate = nowTime.getDate();
        let nowMonth = nowTime.getMonth() + 1;
        let nowYear = nowTime.getFullYear();
    
        nowTime = nowDate + '.' + nowMonth + '.' + nowYear;
        return nowTime;
    }
    
    function popMassege(textMsg, imgMsg, switchIcon) {//textMsg - текст уведомления. imgMsg - полный путь к изображению для вставки в блок с уведомлением. switchIcon - если передать аргументом слово icon, то добавим иконки связаться со мной
        let bgPopMsg = document.createElement('div'),
            popMsg = document.createElement('div'),
            popImg = document.createElement('img'),
            btnClose = document.createElement('div'),     
            bodyMain = document.querySelector('body');
    
            bgPopMsg.classList.add('bg_pop_msg');
            popMsg.classList.add('pop_msg');
            popImg.src = imgMsg;
            btnClose.classList.add('btn_close');
            btnClose.innerText = 'X';
            popMsg.innerHTML = textMsg + '<br><br>';
            popImg.style.width = '20%';
    
            popMsg.append(popImg);
            bgPopMsg.append(popMsg, btnClose);
            bodyMain.append(bgPopMsg);
            
            let i = 4;
            if(switchIcon == 'icon' && arguments[i] !== '') {
                let headerFrameBottom = document.createElement('div');
                for(i = 5; i< arguments.length; i++) {
                    let blockIcon = document.createElement('div'),    
                        link = document.createElement('a'),    
                        img = document.createElement('img');
                    headerFrameBottom.classList.add('header_frame_bottom');
                    blockIcon.classList.add('icone_code');
                    link.target = 'blank';
            
                    link.href = arguments[i];
                    i++;
                    img.src = arguments[i];
                    link.append(img);
            
                    blockIcon.append(link);
                    headerFrameBottom.append(blockIcon);
            
                    headerFrameBottom.style.position = 'relative';
                    headerFrameBottom.style.width = '100%';
                    headerFrameBottom.style.minWidth = '200px';
                    headerFrameBottom.style.marginTop = '50px';
                    popMsg.append(headerFrameBottom);
                }
            }
    
            //анимируем появление блока с информацией
            popMsg.style.transform = 'scale(0, 0)';
            setTimeout(() => {
                popMsg.style.transform = 'scale(1.1, 1.3)';
            }, 100);
            setTimeout(() => {
                popMsg.style.transform = 'scale(1, 1)';
            }, 300);
    
            //анимируем появление кнопки "закрыть"
            setTimeout(() => {
                btnClose.style.transform = 'translate(0, 10%)';
            }, 400);
            
            //Обрабочик события кнопки Закрыть
            btnClose.addEventListener('click', () => {
                bgPopMsg.remove();           
            });
    }
    
    
    
    //Создаём заголовки
    function createHeader(numMainFrame, headerTextNoteHead, headerTextNote) {//numMainFrame-порядковый номер фрейма главного фрейма. headerTextNoteHead-заголовок с большими буквами.headerTextNote-подзаголовок
        let headerFrameMain = document.createElement('div'),
            headerFrameHead = document.createElement('div'),
            headerFrame = document.createElement('div'),
            frameCenter = document.querySelectorAll('.main_frame');
    
            headerFrameMain.classList.add('header_frame_main');
            headerFrameHead.classList.add('header_frame');
            headerFrame.classList.add('header_frame');
    
            headerFrameHead.style.fontSize = '2em';
            headerFrameHead.innerHTML = headerTextNoteHead;
            headerFrame.innerHTML = headerTextNote;
    
            headerFrameMain.append(headerFrameHead, headerFrame);
            frameCenter[numMainFrame - 1].prepend(headerFrameMain);
    }
    //создаём главные фреймы
    function createMainFrame(counter) {//counter - Количество главных блоков с блоком контента внутри(вертикально выронен)
        let wrapper = document.querySelector('.wrapper');
    
        for(let i = 0; i < counter; i++) {
            let mainFrame = document.createElement('div');//Создаём главный фрейм
            mainFrame.classList.add('main_frame');
            wrapper.append(mainFrame);
    
            let verticalFrame = document.createElement('div');//Создаём вертикально-выровненый фрейм внутри главного
            verticalFrame.classList.add('frame_vertical_center');
            mainFrame.append(verticalFrame);
        }
        let mainFramesAll = document.querySelectorAll('.main_frame');
            for(let i = 1; i < mainFramesAll.length; i += 2) {
                mainFramesAll[i].style.backgroundColor = '#ffffff';
                mainFramesAll[i].style.color = 'black';
            }
    }
    //создаём блоки внутри фреймов с шириной 25%
    function createCenterFrame(numMainFrame, counter) {//counter - сколько создать блоков в центре. numMainFrame - порядковый номер блока куда вставляем
        for(let i = 0; i < counter; i++) {
            let frameCenter = document.createElement('div'),
                frameVertCenter = document.querySelectorAll('.frame_vertical_center');
    
            frameCenter.classList.add('frame_center');
            frameVertCenter[numMainFrame - 1].append(frameCenter);
            
        }
    }
    //создаём блоки внутри фреймов с шириной 100%
    function createCenterFrameWidthFull(numMainFrame, numFrame, counter, rowParam) {//counter - сколько создать блоков в центре. numMainFrame - порядковый номер блока куда вставляем. numFrame - порядковый номер блока для которого меняем flex-direction на row
        for(let i = 0; i < counter; i++) {
            let frameCenter = document.createElement('div'),
                frameVertCenter = document.querySelectorAll('.frame_vertical_center');
    
            frameCenter.classList.add('frame_center');
            frameCenter.style.maxWidth = '100%';
            frameVertCenter[numMainFrame - 1].append(frameCenter);
            
        }
        let frameVertCenter = document.querySelectorAll('.frame_vertical_center');
        let frameCenterAll = frameVertCenter[numMainFrame - 1].querySelectorAll('.frame_center');
        frameCenterAll[numFrame -1].style.flexDirection = rowParam;
        frameCenterAll[numFrame -1].style.flexWrap = 'wrap';
        frameCenterAll[numFrame -1].style.justifyContent = 'center';
        frameCenterAll[numFrame -1].style.textAlign = 'center';
    }
    //Создаём маленькие плитки для надписей
    function createMiniTag (arrWords, numMainFrame, numFrame) {
        let frameVertCenter = document.querySelectorAll('.frame_vertical_center');//Получим все блоки frame_vertical_center. что бы указать в какой из них вставляем Тэги
        let frameCenterAll = frameVertCenter[numMainFrame - 1].querySelectorAll('.frame_center');
        let frameCenter = frameCenterAll[numFrame -1];//Получим все блоки frame_center. что бы указать в какой из них вставляем Тэги
    
        arrWords.forEach(item => {
            let miniTag = document.createElement('div');
            miniTag.classList.add('mini_tag');
            miniTag.append(item);
            frameCenter.append(miniTag);
        })
    }
    
    //создаём строчные блоки
    function createCenterFrameStr(numframeVertCenter, numframeCenter, counter) {//numframeVertCenter - порядковый номер блока где ищем нужный блок. numframeCenter - порядковый блок куда вставляем. counter - сколько создать блоков строк
        for(let i = 0; i < counter; i++) {
            let frameCenterStr = document.createElement('div'),
                frameVertCenter = document.querySelectorAll('.frame_vertical_center'),
                frameCenter = frameVertCenter[numframeVertCenter - 1].querySelectorAll('.frame_center');
    
            frameCenterStr.classList.add('frame_center_str');
    
            frameCenter[numframeCenter - 1].append(frameCenterStr);
        }
    }
    //пишем текст в мелкие блоки внутри главного
    function setTextCenterFrame(numframeVertCenter, numframeCenter, headerTextNoteHead, headerTextNote, switchIcon) {//numframeVertCenter-порядковый номер блока внутри главного фрейма. numframeCenter-порядковый номер фрейма frame_center.strTextNote-текст, который вставляем в строку
        //, linkGitA, imgGitA, linkCodepenA, imgCodepenA
        let frameVertCenter = document.querySelectorAll('.frame_vertical_center'),
            frameCenter = frameVertCenter[numframeVertCenter - 1].querySelectorAll('.frame_center'),
    
            headerFrameHead = document.createElement('div'),
            headerFrame = document.createElement('div');
            headerFrameHead.classList.add('header_frame');
            headerFrame.classList.add('header_frame');
    
            headerFrameHead.innerHTML = headerTextNoteHead;
            headerFrame.innerHTML = headerTextNote;
    
            frameCenter[numframeCenter - 1].prepend(headerFrameHead, headerFrame);
    
        let i = 5;
    
        if(switchIcon == 'icon' && arguments[i] !== '') {
            let headerFrameBottom = document.createElement('div');
            for(i = 5; i< arguments.length; i++) {
                let blockIcon = document.createElement('div'),    
                    link = document.createElement('a'),    
                    img = document.createElement('img');
                headerFrameBottom.classList.add('header_frame_bottom');
                blockIcon.classList.add('icone_code');
                link.target = 'blank';
        
                link.href = arguments[i];
                i++;
                img.src = arguments[i];
                link.append(img);
        
                blockIcon.append(link);
        
                headerFrameBottom.append(blockIcon);
        
                frameCenter[numframeCenter - 1].prepend(headerFrameBottom);
            }
        }
    
    
    
    }
    //Пишем текст в блоки строковые
    function setTextCenterFrameStr(numframeVertCenter, numframeCenter, numframeCenterStr, strTextNote) {//numframeVertCenter-порядковый номер блока внутри главного фрейма. numframeCenter-порядковый номер фрейма frame_center. numframeCenterStr-порядковый номер frame_center_str. strTextNote-текст, который вставляем в строку
        let frameVertCenter = document.querySelectorAll('.frame_vertical_center'),
            frameCenter = frameVertCenter[numframeVertCenter - 1].querySelectorAll('.frame_center'),
            frameCenterStr = frameCenter[numframeCenter - 1].querySelectorAll('.frame_center_str');
    
            frameCenterStr[numframeCenterStr - 1].innerHTML = strTextNote;
    }
    //Применяем стили к блокам с текстом
    function setStyleFrameCenter(numframeVertCenter) {//numframeVertCenter - номер мэйн фрэймов, в которых ищем frame_center
        let frameVertCenter = document.querySelectorAll('.frame_vertical_center'),
            frameCenter = frameVertCenter[numframeVertCenter - 1].querySelectorAll('.frame_center');
    
            frameCenter.forEach(item => {
                item.classList.add('frame_center_hover');
                item.style.border = '5px dotted';
            });
    }
    //Вставляем изображение
    function setImage(numframeVertCenter, numframeCenter, srcImage) {//numframeVertCenter-порядковый номер блока внутри главного фрейма. numframeCenter-порядковый номер фрейма frame_center. numframeCenterStr-порядковый номер frame_center_str. strTextNote-текст, который вставляем в строку
        let frameVertCenter = document.querySelectorAll('.frame_vertical_center'),
            frameCenter = frameVertCenter[numframeVertCenter - 1].querySelectorAll('.frame_center'),
            frameImg = document.createElement('div'),
            image = document.createElement('img'),
            headerFrameBottom = document.createElement('div'),
            zoomImage = document.createElement('div');
            image.src  = srcImage;
    
            frameImg.classList.add('frame_img');
            zoomImage.classList.add('zoom_image');
            headerFrameBottom.classList.add('header_frame_bottom');
            zoomImage.innerHTML = '&#128269';
            
            frameImg.append(image, zoomImage);
            headerFrameBottom.append(frameImg);
            frameCenter[numframeCenter - 1].append(headerFrameBottom);
    
    
            frameImg.addEventListener('click', ()=> {
                let wrapper = document.querySelector('.wrapper'),
                    frameImgSertificate = document.createElement('div'),
                    imageSertificate = document.createElement('img'),
                    btnClose = document.createElement('div');
                    
                frameImgSertificate.classList.add('frame_img_sertificate');
                btnClose.classList.add('btn_close');
                imageSertificate.src  = srcImage;
                btnClose.innerHTML = 'X';
                frameImgSertificate.append(imageSertificate, btnClose);
    
                wrapper.append(frameImgSertificate);
    
                //анимируем появление кнопки "закрыть"
                setTimeout(() => {
                    btnClose.style.transform = 'translate(0, 10%)';
                }, 400);
    
                btnClose.addEventListener('click', ()=> {
                    frameImgSertificate.style.transform = 'scale(0)';
                    setTimeout(()=> {
                        frameImgSertificate.remove();
                        imageSertificate.remove();
                        btnClose.remove();
                    }, 200);
    
                });
            });
    
    
    
    }
    
    
    //Создаём блок для руки          заморозил 11.10
    // function createHandFirstFrame() {
    //     let bodyMain = document.querySelector('body'),
    //         firstFrame = document.querySelector('.frame_center').childNodes[3];//Получаем последнюю строчку на первом фрейме
    //     let firstFrameStrPos = firstFrame.getBoundingClientRect().top - 50;//получаем её позицию по оси координат Y
        
    
    //     let hand = document.createElement('div');
    //         hand.classList.add('hand');
    //         hand.style.top = firstFrameStrPos +'px';
    
    //     let handBg = document.createElement('div');
    //         handBg.classList.add('hand_bg');
    //         handBg.style.top = firstFrameStrPos +'px';
    
    //         bodyMain.append(handBg, hand);
    
    //     handBg.onmouseover = () => {
    //         hand.classList.add('hand_hover');
    //     }
        
    //     handBg.onmouseout = () => {
    //         hand.classList.remove('hand_hover');
    //     }
    // }
    //Создаём круги для второго фрейма и анимацию для них
    function createCircle(numframeVertCenter, numframeCenter, numframeCenterStr, circleTextNote) {//numframeVertCenter-порядковый номер блока внутри главного фрейма. numframeCenter-порядковый номер фрейма frame_center. numframeCenterStr-порядковый номер frame_center_str. circleTextNote-текст, который вставляем в круг
        let circleTop = document.createElement('div'),
            circle = document.createElement('div'),
            circleText = document.createElement('div'),
            circleEyeLeft = document.createElement('div'),
            circleEyeRight = document.createElement('div');
    
            circleTop.classList.add('circle_top');
            circle.classList.add('circle');
            circleText.classList.add('circle_text');
            circleEyeLeft.classList.add('eye');
            circleEyeRight.classList.add('eye');
    
            circleText.innerHTML = circleTextNote;
    
        let frameVertCenter = document.querySelectorAll('.frame_vertical_center'),
            frameCenter = frameVertCenter[numframeVertCenter - 1].querySelectorAll('.frame_center'),
            frameCenterStr = frameCenter[numframeCenter - 1].querySelectorAll('.frame_center_str');
    
            circle.append(circleText, circleEyeLeft, circleEyeRight);
            frameCenterStr[numframeCenterStr - 1].append(circleTop, circle);
    
            //Анимация при наведении на круги
            document.onmouseover = (event) => {
                if(event.target.classList == 'circle_top') {
                    let eFrameCenterText = event.target.parentNode.querySelector('.circle_text'),
                        eCircleEye = event.target.parentNode.querySelectorAll('.eye');
                        event.target.parentNode.querySelector('.circle').classList.add('circle_hover');
                        eFrameCenterText.style.marginBottom = '-100px';
                        eFrameCenterText.style.opacity = '0';
                    setTimeout(() => {
                        eFrameCenterText.style.display = 'none';
                        eCircleEye.forEach((item) => {
                            item.style.display = 'block';
                            item.classList.add('eye_hover');
                        });
                    }, 200);
                }
            }
    
            document.onmouseout = (event) => {
                if(event.target.classList == 'circle_top') {
                    let eFrameCenterText = event.target.parentNode.querySelector('.circle_text'),
                        eCircleEye = event.target.parentNode.querySelectorAll('.eye');
                        event.target.parentNode.querySelector('.circle').classList.remove('circle_hover');
                        eFrameCenterText.style.marginBottom = '0px';
                        eFrameCenterText.style.opacity = '1';
                    setTimeout(() => {
                        eFrameCenterText.style.display = 'block';
                        eCircleEye.forEach((item) => {
                            item.style.display = 'none';
                            item.classList.add('eye_hover');
                        });
                    }, 200);
                }
            }
    }
    //Меняем размер кругов
    function setSizeCircle(numframeVertCenter) {//numframeVertCenter-порядковый номер блока внутри главного фрейма. numframeCenter-порядковый номер фрейма frame_center. numframeCenterStr-порядковый номер frame_center_str. strTextNote-текст, который вставляем в строку
        let frameVertCenter = document.querySelectorAll('.frame_vertical_center'),
            circleFrame = frameVertCenter[numframeVertCenter - 1].querySelectorAll('.circle');
            circleFrame.forEach((item) => {
                item.classList.add('circle_little');
            });
    }
    //Меняем цвет кругов
    function setColorCircle(numframeVertCenter) {
        let frameVertCenter = document.querySelectorAll('.frame_vertical_center'),
            circleFrame = frameVertCenter[numframeVertCenter - 1].querySelectorAll('.circle'),
            circleColor = ['#ffa084', '#f4656a', '#695381', '#355b70', '#eea0ea', '#87CEFA', '#a1d491'];
    
    
                for(let i = 0; i < circleColor.length; i++) {
                    circleFrame[i].style.backgroundColor = circleColor[i];
                }
    }
    //Создаём анимацию тени под изображением на втором фрейме
    function shadowAnimTwoFrame() {
        let shadow = document.createElement('div'),
            frameVertCenter = document.querySelectorAll('.frame_vertical_center'),
            conFrameCenter = frameVertCenter[1].querySelectorAll('.frame_center');
            shadow.classList.add('shadow_two_frame');
            conFrameCenter[1].append(shadow);
    }
    //Кнопка прокрутка страницы вверх
    function scrollToTopMainFunc() {
        let scrollBtn = document.createElement('div'),
            bodyMain = document.querySelector('body');
            scrollBtn.classList.add('scrollToTopBtn');
            scrollBtn.innerHTML = '&uarr;';
            bodyMain.append(scrollBtn);
        let  scrollToTopBtn = document.querySelector('.scrollToTopBtn'),
            rootElement = document.documentElement;
    
            
        function buttonToTopVisible() {
            scrollToTopBtn.style.display = "flex";
        }
    
        function scrollToTop() {
            rootElement.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    
        window.addEventListener('scroll', buttonToTopVisible);
        scrollToTopBtn.addEventListener("click", scrollToTop);
    }
    scrollToTopMainFunc();
    
    createMainFrame(7);
    
    //Первый фрейм
    createCenterFrame(1, 1);
    let setHeightFirstMainFrame = document.querySelector('.main_frame');
    setHeightFirstMainFrame.style.height = '100vh';
    setHeightFirstMainFrame.style.fontSize = '2em';
    
    createCenterFrameStr(1, 1, 5);
    setTextCenterFrameStr(1, 1, 1, 'Привет!');
    setTextCenterFrameStr(1, 1, 2, 'Я Марченков');
    setTextCenterFrameStr(1, 1, 3, 'Максим');
    setTextCenterFrameStr(1, 1, 4, 'Юрьевич');
    setTextCenterFrameStr(1, 1, 5, '&darr;');
    let frameVerticalCenterAll = document.querySelectorAll('.frame_vertical_center');
    let frameCenterStrAll = frameVerticalCenterAll[0].querySelectorAll('.frame_center_str');
    frameCenterStrAll[0].style.fontSize = '0.8em';
    // frameCenterStrAll[0].style.color = 'rgb(160, 160, 160)';
    frameCenterStrAll[4].style.fontSize = '2em';
    frameCenterStrAll[4].classList.add('anim_max_non_shadow');
    // createHandFirstFrame();//блок с рукой на первом фрейме
    setHeightFirstMainFrame.style.display = 'none';
    
    
    //Второй фрейм
    createHeader(2, 'Знания в моей голове', 'Я непрерывно обучаюсь новым технологиям. Вот то, что уже осилил:');
    createCenterFrameWidthFull(2, 4, 4, 'row');
    
    let frameCenterAll = frameVerticalCenterAll[1].querySelectorAll('.frame_center');
    frameCenterAll[0].style.width = '25%';
    frameCenterAll[1].style.width = '25%';
    frameCenterAll[2].style.width = '25%';
    frameCenterAll[0].style.maxWidth = '25%';
    frameCenterAll[1].style.maxWidth = '25%';
    frameCenterAll[2].style.maxWidth = '25%';
    
    createCenterFrameStr(2, 1, 4);
    createCenterFrameStr(2, 3, 4);
    createCircle(2, 1, 1, 'CSS');
    createCircle(2, 1, 2, 'HTML');
    createCircle(2, 1, 3, 'JS');
    createCircle(2, 1, 4, 'PHP');
    createCircle(2, 3, 1, 'React');
    createCircle(2, 3, 2, 'Redux');
    createCircle(2, 3, 3, 'MySQL');
    createCircle(2, 3, 4, 'Git');
    // setTextCenterFrame(2, 4, '<h2>А так же я работаю с :</h2>', 'JavaScript<br>PHP<br>React<br>Redux<br>HTML<br>CSS<br>Знаю основы python<br>GitHub<br>GitLab<br>ОС linux и Windows <br>Active directory<br>SQL Server Management Studio<br>Хорошо знаю устройство компьютера изнутри<br>Adobe photoshop<br>Adobe illustrator<br>Adobe flash<br>Adobe after effects<br>MS Office<br>Libre office<br>WP Office<br>MS Navision Attain<br>Проще говоря: я опытный пользователь ПК &#9786;<br>');
    
    let arrWordsForTwoFrame = ['JavaScript','PHP', 'Основы C#', 'Основы Java', 'Основы ASP.NET', 'Большой опыт работы с Legacy кодом', 'React','Redux','HTML','CSS','Основы python','GitHub','GitLab','ОС linux','ОС Windows','Active directory','SQL Server Management Studio','Хорошо знаю устройство компьютера изнутри','Adobe photoshop','Adobe illustrator','Adobe flash','Adobe after effects','MS Office','Libre office','WP Office','WP Office','MS Navision Attain'];
    createMiniTag (arrWordsForTwoFrame, 2, 4)
    
    setColorCircle(2);
    
    //Вставим изображение Макс + сформируем анимированную тень
    let farameTwoImg = document.querySelectorAll('.frame_center'),
        imgTwoFrame = document.createElement('img');
    imgTwoFrame.src = 'img/maks_non_shadow.png';
    imgTwoFrame.classList.add('anim_max_non_shadow');
    farameTwoImg[2].prepend('!');
    farameTwoImg[2].append(imgTwoFrame);
    shadowAnimTwoFrame();
    //Вставим изображение Макс + сформируем анимированную тень
    
    //Третий фрейм
    createHeader(3, 'Карьера', '(итал. carriera — бег, жизненный путь, поприще, от лат. carrus — телега, повозка)— успешное (не всегда) продвижение в области служебной, социальной, научной и другой деятельности; продвижение вверх по служебной лестнице.<br>&copy; Wikipedia');
    createCenterFrame(3, 7);
    setTextCenterFrame(3, 1, '<h2>Школа</h2>', 'Закончил в 2008 году, получив среднее образование.<br><br>МУНИЦИПАЛЬНОЕ ОБЩЕОБРАЗОВАТЕЛЬНОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ "СРЕДНЯЯ ОБЩЕОБРАЗОВАТЕЛЬНАЯ ШКОЛА №5" АРСЕНЬЕВСКОГО ГОРОДСКОГО ОКРУГА ПРИМОРСКОГО КРАЯ.<br>г. Арсеньев, ул. Садовая 19');
    setTextCenterFrame(3, 2, '<h2>Университет</h2>', 'С 2008 по 2013 год я учился в ДВФУ на специальности "Прикладная информатика в экономике". Изучил основы программирования. Получил немало знаний по экономике и ведению бизнеса. Изучил различные ERP и многое другое');
    setTextCenterFrame(3, 3, '<h2>ИП</h2>', 'С 2006 по 2009 я работал мастером по ремонту ПК. Юридически оформлен не был, только "Йо хо хо". Подавал объявление в газету и ждал звонков.<br>Получил огромный практический опыт на этой работе');
    setTextCenterFrame(3, 4, '<h2>Магазин</h2>', 'С 2014 года я работал продавцом - консультантом в магазине бытовой техники "Домотехника" в отделе цифровой и компьютерной техники. Обучился деловой этике, этике общения с клиентами, пополнил знания из области ИТ<br>г. Арсеньев, ул. Островского 5');
    setTextCenterFrame(3, 5, '<h2>Диспетчер</h2>', 'С 2014 года по 2015 год работал диспетчером ИТ службы внутри компании "Домотехника". Получил навыки диалога с пользователями. Научился выявлять суть проблем и грамотно грейдировать, поступающие заявки.<br>г. Владивосток, ул. Алеутская 11');
    setTextCenterFrame(3, 6, '<h2>Менеджер</h2>', 'Спустя год работы диспетчером мои обязанности помножились, засчёт растущих навыков. Теперь я решал заявки, участвовал в реализации проектов, контактировал с поставщиками, отвечал за логистику техники внутри отдела, за закуп комплектующих для её ремонта, документального оформления счетов на оплату услуг и многое другое');
    setTextCenterFrame(3, 7, '<h2>Программист</h2>', 'С 2023 года я стал официально работать программистом. "Ведущий инженер-программист" - так теперь написано в моей трудовой книжке. Огромный список интересных проектов по работе с Legacy-кодом не перестаёт пополняться новыми пунктами');
    
    setStyleFrameCenter(3);
    
    
    
    //Четвёртый фрейм
    createHeader(4, 'Я расту как личность', '. . .');
    createCenterFrame(4, 9);
    
    setTextCenterFrame(4, 1, '<h2>Компьютер</h2>', 'В школе у меня появился первый компьютер на базе AMD Sempron. Тогда то первая страничка книги "Максим в стране ИТ" была написана. Я очень увлёкся изучением программ и компьютерного железа');
    setTextCenterFrame(4, 2, '<h2>Работа на себя</h2>', 'На первом курсе университета я занялся ремонтом и настройкой компьютеров, обзавёлся постоянными клиентами, расширил набор услуг. Это не приносило много денег, но доставляло удовольствие. Тогда же я твёрдо понял, что моя дорога в ИТ мир верная, хоть и не будет простой');
    setTextCenterFrame(4, 3, '<h2>Let`s Rock</h2>', 'Помню свою первую бас-гитару. Марка "Урал". Красивая! Учился играть на басухе долго, сложно, но всё же финал был успешен. Группа МарченкOFF выступила на дне города Арсеньева.<br>ТУТ ВИДОСИК');
    setTextCenterFrame(4, 4, '<h2>Продавец консультант</h2>', 'Моя первая серьёзная работа - продавец консультант в магазине бытовой техники магазина "Домотехника". Взяли меня в отдел цифровой техники за знания и опыт работы с ней. Тогда то я и стал большим мальчиком: съехал от родителей, сняв шикарную однушку. К моим навыкам прибавилось "грамотное общение с клиентами". Я научился правильно вести диалог и с его помощью получать то что мне было нужно - прибыль!');
    setTextCenterFrame(4, 5, '<h2>Бытовая техника</h2>', 'На втором курсе университета мне уже во всю хотелось стать независимым от родителей, а денег от ремонта компьютеров на это не хватало. Тогда я пошёл работать в магазин "Домотехника". Попал в отдел цифровой техники. Узнал что такое клиентоориентированность и стальные нервы. Отточил грамотную речь. Купил свой первый графический планшет Bamboo Pen. Изучил photoshop, illustrator, Adobe after effects');
    setTextCenterFrame(4, 6, '<h2>Сложное слово</h2>', 'После выпуска из университета я переехал жить в г. Владивосток. Устроился работать в компанию "Pepsi Co". Должность называлась сложным словом Мерчендайзер. Работа интересная, очень стрессовая, активная. Ежедневно я должен был мониторить качество и объём, выставленной продукции компании в торговых точках партнёров. Тут мой навык коммуникабельности был прокачан по максимуму');
    setTextCenterFrame(4, 7, '<h2>Диспетчер ОПП</h2>', 'Далее я попал в ИТ службу "Домотехники"(Опять же) и стал "Диспетчером ОПП". Работа на первой линии технической поддержки внутри компании. Прошёл год, мои навыки выросли в разы. Руководитель стал наращивать мои обязанности. Вот я уже: решал заявки, участвовал в реализации проектов, контактировал с поставщиками, оформлял счета на оплату услуг, мониторил работу всех систем компании: по сути стал менеджером');
    setTextCenterFrame(4, 8, '<h2>Next level</h2>', 'Решил, что пора идти дальше. И путь мой лежит в мир web технологий<br>Топ Топ Топ...<br>Параллельно с основной работой изучал front-end инструменты. В онлайн университете Udemy изучил Javascript и React. Научился работать с GitHub, GitLub. Изучил php, немного python');
    setTextCenterFrame(4, 9, '<h2>Web-разработчик</h2>', 'Теперь я занимаюсь разработкой приложений и web-порталов для нужд компании. Уже реализовал несколько проектов в связке инструментов JS, PHP, MySQL, Postgres, NodeJs, SocketIo. Продолжаю заниматься разработкой и улучшать свои навыки');
    
    setStyleFrameCenter(4);
    
    //Пятый фрейм
    createHeader(5, 'Мои работы на GitHub и Codepen', 'За свою карьеру я выполнил много работ. Часть из них разместил ниже');
    createCenterFrame(5, 9);
    
    setTextCenterFrame(5, 1, '<h2>widget persent</h2>', 'Красивый виджет с ползунками на нативном JS. Виджт нужен для визуального представления процентного соотношения одних данных к другим. Так же реализовал его сворачивание и разворачивание. Можно интегрировать на любой сайт где есть числовые данные', 'icon', 'https://github.com/shuherpishet/widget_persent', 'img/github.svg', 'https://codepen.io/shuherpishet/pen/bGYQzae', 'img/codepen.svg');
    setTextCenterFrame(5, 2, '<h2>ToDo</h2>', 'Веб-приложение для создания бумажных ярлыков со списком задач. Если вам привычней видеть напоминания на мониторе, холодильнике микроволновке или зеркале, то моё приложение специально для вас. Просто заполните нужные поля, нажмите "Создать ярлык", "Напечатать ярлык". Печатать можно как на обычный лист бумаги А4, так и на самоклеящиеся этикетки', 'icon', 'https://github.com/shuherpishet/toDo', 'img/github.svg', 'https://codepen.io/shuherpishet/pen/bGYQzjw', 'img/codepen.svg');
    setTextCenterFrame(5, 3, '<h2>game clicker</h2>', 'Игра в жанре кликер. Написана на нативном синтаксисе языка javascript. Пока игра не имеет графического оформления. История описывает мир постядерного мира, в котором существа сражаются за право владения рессурсами. Находится в статусе разработки', 'icon', 'https://github.com/shuherpishet/game_clicker', 'img/github.svg',  'https://codepen.io/shuherpishet/pen/gOXQqBa', 'img/codepen.svg');
    setTextCenterFrame(5, 4, '<h2>teach JS</h2>', 'В этом репозитории собрал материалы с уроков по обучению JS в университете Udemy. Сейчас учусь в универе, старался выкладывать часть выполненных уроков в репозитории Github. Просмотрев их вы поймёте что я уже умею', 'icon', 'https://github.com/shuherpishet/teachJS', 'img/github.svg');
    setTextCenterFrame(5, 5, '<h2>game-circles</h2>', 'Это игра, в которой нужно найти среди смешных шариков цвет, который выбирается случайным образом. Игра на числом js. Анимации и весь front-end в том числе писал сам.', 'icon', 'https://github.com/shuherpishet/Game-Circles', 'img/github.svg',  'https://codepen.io/shuherpishet/pen/bGKOQrw', 'img/codepen.svg');
    setTextCenterFrame(5, 6, '<h2>псевдо-select</h2>', 'Иногда использование  стандартного элемента select невозможно.Тогда можно создать псевдо-элемент с использованием javascript', 'icon', 'https://codepen.io/shuherpishet/pen/gOENVzo', 'img/codepen.svg');
    setTextCenterFrame(5, 7, '<h2>loader_on_button</h2>', 'Генератор лоадера, который встраивается в кнопку любого размера и типа', 'icon', 'https://codepen.io/shuherpishet/pen/QWoXemJ', 'img/codepen.svg');
    setTextCenterFrame(5, 8, '<h2>run_dragon_on_snow</h2>', 'Игра для самых маленьких. Симпатичный дракон гуляет по снежной долине в канун нового года. Он любит покопать землю и покривляться. Отлично смотритс на дисплеях всех размеров любых устройств', 'icon', 'https://codepen.io/shuherpishet/pen/rNREXpX', 'img/codepen.svg');
    setTextCenterFrame(5, 9, '<h2>Игра "Котики-бегемотики"</h2>', 'Игра для самых маленьких и не очень. Не дайте котикам и бегимотикам съесть гамбургер. Эти прожорливые ребята бегут со всех сторон', 'icon', 'https://codepen.io/shuherpishet/pen/rNREXGX', 'img/codepen.svg');

    setStyleFrameCenter(5);
    
    //Шестой фрейм
    createHeader(6, 'Дополнительное образование', 'Ниже сертификаты из онлайн школ. Я регулярно участвую в различных интенсивах, марафонах и прохожу курсы по повышению квалификации');
    createCenterFrame(6, 5);
    createCenterFrame(6, 9);
    
    setTextCenterFrame(6, 1, '<h2>Основы программирования</h2>', 'На курсе получил фундаментальные знания принципов программирования');
    setTextCenterFrame(6, 2, '<h2>Основы веб-разработки</h2>', 'На курсе обучали как:Создавать небольшие сайты;Использовать хостинги и публиковать сайты в интернете;Работать с языком разметки HTML/CSS');
    setTextCenterFrame(6, 3, '<h2>PHP.Личный блог</h2>', 'На курсе разобрали основы языка php, базовые принципы, функции, классы и т.д. По итогу написали личный блог');
    setTextCenterFrame(6, 4, '<h2>Python для начинающих</h2>', 'На курсе разобрали как:Устанавливать интерпретатор Python и инструменты разработчика;Подключать библиотеку Turtle;Работать с 2D-графикой;Реализовывать игровую логику и клиент-серверное взаимодействие');
    setTextCenterFrame(6, 5, '<h2>Основы Веб-дизайна</h2>', 'На курсе разобрали как:Создавать посадочные страницы;Работать с Adobe Photoshop;Стимулировать дизайном продажи');
    setTextCenterFrame(6, 6, '<h2>Профессия Верстальщик Сайтов</h2>', 'На курсе учили:Грамотному коду вёрстки;Адаптивной вёрстке;Работе с библиотеками стилейСверстали несколько макетов страниц');
    setTextCenterFrame(6, 7, '<h2>Основы коммерческой иллюстрации в Adobe Photoshop</h2>', 'Научился подбирать палитру цыетов для сайта. По итогу курса нарисовал несколько шаблонов проекта');
    setTextCenterFrame(6, 8, '<h2>Университет BrushGuru</h2>', 'На данном онлайн курсе я изучил базовые навыки работы с векторной иллюстрацией в Adobe illustrator.Сертификат можно проверить по адресу https://brush.guru/medal_start. Проверочный номер S2699');
    setTextCenterFrame(6, 9, '<h2>Университет Skillbox. Найди себя в Digital</h2>', 'В этой онлайн - конференции разобрали направления ИТ: Дизайн, кодинг, маркетинг. Получил ключевые заниня по большинству отраслей ИТ специализаций');
    setTextCenterFrame(6, 10, '<h2>Университет Udemy. Курс по Javascript + React</h2>', 'На протяжении нескольких месяцев углублённо изучал Java script, React, Redux. Обучение проходило с преподавателем и экзаменами по итогу изучения модулей');
    
    setStyleFrameCenter(6);
    
    setImage(6, 1, 'img/sertificate/1.Сертификат. Основы программирования-0.png');
    setImage(6, 2, 'img/sertificate/2.Сертификат. Основы веб-разработки-0.png');
    setImage(6, 3, 'img/sertificate/3.КурсPHP.png');
    setImage(6, 4, 'img/sertificate/4.Сертификат Интенсив Python для начинающих.GeekBrains.png');
    setImage(6, 5, 'img/sertificate/5.Сертификат Основы Веб-дизайна. _ GeekBrains - образовательный портал.png');
    setImage(6, 6, 'img/sertificate/6.Genius Courses-geniuscourses.com - Профессия Верстальщик Сайтов..png');
    setImage(6, 7, 'img/sertificate/7.Сертификат. Основы коммерческой иллюстрации в Adobe Photoshop.png');
    setImage(6, 8, 'img/sertificate/8.BrushGuru_Проверочный код-S2699.brush.gurumedal_start.png');
    setImage(6, 9, 'img/sertificate/9.Skillbox_конференция_Найди_себя_в_Digital.png');
    setImage(6, 10, 'img/sertificate/10.Udemy.Полный курс по Javascript + React - с нуля до результата.png');
    
    //Седьмой фрейм
    createCenterFrameWidthFull(7, 1, 1, 'column');
    setTextCenterFrame(7, 1, '<h2>Свяжитесь со мной</h2>', 'Эту страницу я сделал сам. Для её вёрстки использовал javascript, все элементы DOM дерева создаются динамически.<br>Я регулярно обучаюсь новому и продолжаю совершенствовать эту страницу.<br><br>До скорых встреч!', 'icon', 'https://api.whatsapp.com/send?phone=<79990596649>', 'img/whatsapp.svg', 'tg://resolve?domain=shuherpishet', 'img/telegramm.svg', 'https://www.instagram.com/shuherpishetrovno', 'img/instagram.svg', 'https://vladivostok.hh.ru/resume/9885f7fdff0821fd9d0039ed1f416668635950', 'img/hh.png', 'https://github.com/shuherpishet', 'img/githubSN.svg', 'https://codepen.io/shuherpishet', 'img/codepen.svg');
    
    
    
    
    
    
    
    //Создаём появление блоков при прокрутке страницы(https://webgolovolomki.com/poyavlenie-elementov-pri-skrolle/)
    function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
           change.target.classList.add('element-show');
          }
        });
      }
    
      let options = {
        threshold: [0.5] };
      let observer = new IntersectionObserver(onEntry, options);
      let elFrameCenter = document.querySelectorAll('.frame_center');
    
      for (let elm of elFrameCenter) {
        observer.observe(elm);
      }
    
    let emptyCenterFrame = document.querySelectorAll('.frame_center');
    
    
    emptyCenterFrame.forEach(item => {
        if(item.innerText == '') {
            item.remove();
        }
    });
    
    
    
    
    
    
    if (document.documentElement.clientWidth < 479) {
        let frameSenterStr = document.querySelectorAll('.frame_center_str'),
            frameSenter = document.querySelectorAll('.frame_center'),
            allImg = document.querySelectorAll('.frame_img'),
            allZoomImg = document.querySelectorAll('.zoom_image');
    
        frameSenterStr[4].remove();
        frameSenterStr[5].remove();
        frameSenterStr[6].remove();
        frameSenterStr[7].remove();
        frameSenterStr[8].remove();
        frameSenterStr[9].remove();
    
        frameSenter[1].remove();
        frameSenter[2].remove();
        frameSenter[3].remove();
    
        allImg.forEach(item => {
            item.querySelector('img').style.display = 'none';
        });
        allZoomImg.forEach(item => {
            item.style.transform = 'translateY(-50px)';
            item.style.width = '70px';
            item.style.height = '70px';
        })
    }else if(document.documentElement.clientWidth > 479 && document.documentElement.clientWidth < 767) {
        let allFrameImg = document.querySelectorAll('.frame_img'),
            allImg = document.querySelectorAll('img');
        allFrameImg.forEach(item => {
            item.querySelector('img').style.width = '100%';
        });
        allImg[0].style.width = '200%';
    }else if(document.documentElement.clientWidth > 767 && document.documentElement.clientWidth < 991) {
        let allImg = document.querySelectorAll('img');
    
        allImg[0].style.width = '200%';
    }

});