//предотвращение прокрутки страницы
document.addEventListener('touchmove', function(e) {
    e.preventDefault(); // Предотвращение прокрутки при касании
  }, { passive: false });

// запустим фоновую музыку
    document.querySelector('#button_music').innerHTML = '<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#4285f4"><path d="m16.1898 2h-8.37004c-3.64 0-5.80999 2.17-5.80999 5.81v8.37c0 3.64 2.16999 5.81 5.80999 5.81h8.37004c3.64 0 5.81-2.17 5.81-5.81v-8.37c0-3.64-2.17-5.81-5.81-5.81z" opacity=".4" fill="#4285f4" style="fill: rgb(67, 191, 244);"></path><path d="m16.1407 6.7099c-.34-.26-.94-.51-1.9-.25l-2.99.82001c-.93.25-1.53995 1.03995-1.53995 2.00995v1.75004 2.03c-.21-.06-.42002-.1001-.65002-.1001-1.29 0-2.34003 1.0501-2.34003 2.3401s1.05003 2.34 2.34003 2.34c1.27997 0 2.32007-1.04 2.34007-2.31 0-.01.0099-.02.0099-.03v-3.62l3.78-1.03v1.42c-.21-.06-.42-.1-.65-.1-1.29 0-2.34 1.05-2.34 2.34s1.05 2.34 2.34 2.34 2.34-1.05 2.34-2.34v-4.76002-1.07001c0-1-.41-1.51997-.74-1.77997zm-7.07997 9.25c-.36 0-.65002-.29-.65002-.65s.29002-.65.65002-.65.65002.29.65002.65-.29002.65-.65002.65zm5.47997-1c-.36 0-.65-.29-.65-.65s.29-.65.65-.65.65.29.65.65c-.01.36-.3.65-.65.65z" fill="#4285f4" style="fill: rgb(67, 191, 244);"></path></g></svg>';
    document.querySelector('#button_music').addEventListener('click', ()=> {
        document.getElementById('fon_music').play();
    });

let body = document.querySelector('body'),
    timeoutArray = [],
    CollideGlobal,//признак есть ли сейчас пересечение хотя бы одного NPC с центральным блоком
    beginEatNum = 20;//сколько единиц еды в начале

//создать зону куда перетаскивать элементы и прочее
    function createDropZone(numElem) {
        let wrapper = document.querySelector('.wrapper');
        for (let i = 0; i < numElem; i++) {
            let countScore = document.createElement('div'),
                countNpc = document.createElement('div'),
                newDropZone = document.createElement('div');

            countScore.id = 'count_score';
            countNpc.id = 'count_npc';
            newDropZone.className = 'droppable';
            newDropZone.innerHTML = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 410.112 410.112" style="enable-background:new 0 0 410.112 410.112;" xml:space="preserve"><rect x="24.576" y="252.936" style="fill:#D15241;" width="355.328" height="18.432"/><path style="fill:#DC8744;" d="M393.216,323.08H16.384C7.68,323.08,0,315.912,0,306.696V287.24c0-8.704,7.168-16.384,16.384-16.384 h377.344c8.704,0,16.384,7.168,16.384,16.384v19.456C409.6,315.912,402.432,323.08,393.216,323.08z"/><path style="fill:#FCD462;" d="M357.888,398.344H41.984c-18.432,0-33.792-14.848-33.792-33.792v-20.48H391.68v20.48 C391.68,382.984,376.32,398.344,357.888,398.344z"/><path style="fill:#F6C358;" d="M199.68,344.072H8.192v22.016c1.536,24.064,18.944,35.328,51.2,32.256H199.68V344.072z"/><g><path style="fill:#44C4A1;" d="M344.576,344.072c0,6.656,7.68,12.288,17.92,12.288s17.92-5.632,17.92-12.288"/><path style="fill:#44C4A1;" d="M308.736,344.072c0,6.656,7.68,12.288,17.92,12.288c9.728,0,17.92-5.632,17.92-12.288"/><path style="fill:#44C4A1;" d="M273.408,344.072c0,6.656,7.68,12.288,17.92,12.288c9.728,0,17.92-5.632,17.92-12.288"/><path style="fill:#44C4A1;" d="M238.08,344.072c0,6.656,7.68,12.288,17.92,12.288c9.728,0,17.92-5.632,17.92-12.288"/><path style="fill:#44C4A1;" d="M202.752,344.072c0,6.656,7.68,12.288,17.92,12.288c9.728,0,17.92-5.632,17.92-12.288"/><path style="fill:#44C4A1;" d="M166.912,344.072c0,6.656,7.68,12.288,17.92,12.288c9.728,0,17.92-5.632,17.92-12.288"/><path style="fill:#44C4A1;" d="M131.584,344.072c0,6.656,7.68,12.288,17.92,12.288c9.728,0,17.92-5.632,17.92-12.288"/><path style="fill:#44C4A1;" d="M96.256,344.072c0,6.656,7.68,12.288,17.92,12.288s17.92-5.632,17.92-12.288"/><path style="fill:#44C4A1;" d="M60.416,344.072c0,6.656,7.68,12.288,17.92,12.288s17.92-5.632,17.92-12.288"/><path style="fill:#44C4A1;" d="M25.088,344.072c0,6.656,7.68,12.288,17.92,12.288s17.92-5.632,17.92-12.288"/><rect x="24.576" y="323.08" style="fill:#44C4A1;" width="355.328" height="22.016"/></g><path style="fill:#FCD462;" d="M394.24,161.288c0-82.944-84.48-150.016-189.44-150.016S15.36,78.344,15.36,161.288H394.24z"/><path style="fill:#F6C358;" d="M204.8,161.288H15.36c0-82.944,84.48-150.016,189.44-150.016V161.288z"/><rect x="24.576" y="161.288" style="fill:#D15241;" width="355.328" height="18.432"/><path style="fill:#DC8744;" d="M393.216,231.432H16.384C7.68,231.432,0,224.264,0,215.048v-19.456 c0-8.704,7.168-16.384,16.384-16.384h377.344c8.704,0,16.384,7.168,16.384,16.384v19.456 C409.6,224.264,402.432,231.432,393.216,231.432z"/><g><path style="fill:#44C4A1;" d="M344.576,252.424c0,6.656,7.68,12.288,17.92,12.288c9.728,0,17.92-5.632,17.92-12.288"/><path style="fill:#44C4A1;" d="M308.736,252.424c0,6.656,7.68,12.288,17.92,12.288s17.92-5.632,17.92-12.288"/><path style="fill:#44C4A1;" d="M273.408,252.424c0,6.656,7.68,12.288,17.92,12.288c9.728,0,17.92-5.632,17.92-12.288"/><path style="fill:#44C4A1;" d="M238.08,252.424c0,6.656,7.68,12.288,17.92,12.288c10.24,0,17.92-5.632,17.92-12.288"/><path style="fill:#44C4A1;" d="M202.752,252.424c0,6.656,7.68,12.288,17.92,12.288c9.728,0,17.92-5.632,17.92-12.288"/><path style="fill:#44C4A1;" d="M166.912,252.424c0,6.656,7.68,12.288,17.92,12.288c9.728,0,17.92-5.632,17.92-12.288"/><path style="fill:#44C4A1;" d="M131.584,252.424c0,6.656,7.68,12.288,17.92,12.288c9.728,0,17.92-5.632,17.92-12.288"/><path style="fill:#44C4A1;" d="M96.256,252.424c0,6.656,7.68,12.288,17.92,12.288c9.728,0,17.92-5.632,17.92-12.288"/><path style="fill:#44C4A1;" d="M60.416,252.424c0,6.656,7.68,12.288,17.92,12.288s17.92-5.632,17.92-12.288"/><path style="fill:#44C4A1;" d="M25.088,252.424c0,6.656,7.68,12.288,17.92,12.288s17.92-5.632,17.92-12.288"/><rect x="24.576" y="231.432" style="fill:#44C4A1;" width="355.328" height="22.016"/></g><g><path style="fill:#FFFFFF;" d="M186.88,48.648c10.24-1.536,16.896-8.192,15.36-12.288c-1.024-3.584-10.24-6.144-19.456-1.536 c-6.144,2.56-22.016,13.824-22.016,13.824S180.224,49.672,186.88,48.648z"/><path style="fill:#FFFFFF;" d="M131.584,73.736c10.24-1.536,16.896-8.192,15.36-12.288s-10.24-6.144-19.456-1.536 c-6.144,2.56-22.016,13.824-22.016,13.824S124.928,74.76,131.584,73.736z"/><path style="fill:#FFFFFF;" d="M89.6,104.968c10.24-1.536,16.896-8.192,15.36-12.288c-1.024-3.584-10.24-6.144-19.456-1.536 c-6.144,2.56-22.016,13.824-22.016,13.824S83.456,105.992,89.6,104.968z"/><path style="fill:#FFFFFF;" d="M222.208,65.544c10.24-1.536,16.896-8.192,15.36-12.288c-1.024-3.584-10.24-6.144-19.456-1.536 c-6.144,2.56-22.016,13.824-22.016,13.824S215.552,66.056,222.208,65.544z"/><path style="fill:#FFFFFF;" d="M154.624,102.408c10.24-1.536,16.896-8.192,15.36-12.288c-1.024-3.584-10.24-6.144-19.456-1.536 c-6.144,2.56-22.016,13.824-22.016,13.824S147.968,103.432,154.624,102.408z"/><path style="fill:#FFFFFF;" d="M222.208,99.336c10.24-1.536,16.896-8.192,15.36-12.288c-1.024-3.584-10.24-6.144-19.456-1.536 c-6.144,2.56-22.016,13.824-22.016,13.824S215.552,100.36,222.208,99.336z"/><path style="fill:#FFFFFF;" d="M121.856,133.64c10.24-1.536,16.896-8.192,15.36-12.288c-1.024-3.584-10.24-6.144-19.456-1.536 c-6.144,2.56-22.016,13.824-22.016,13.824S115.2,134.664,121.856,133.64z"/><path style="fill:#FFFFFF;" d="M275.456,51.72c10.24-1.536,16.896-8.192,15.36-12.288c-1.024-3.584-10.24-6.144-19.456-1.536 c-6.144,2.56-22.016,13.824-22.016,13.824S268.8,52.744,275.456,51.72z"/><path style="fill:#FFFFFF;" d="M193.024,128.52c10.24-1.536,16.896-8.192,15.36-12.288c-1.024-3.584-10.24-6.144-19.456-1.536 c-6.144,2.56-22.016,13.824-22.016,13.824S186.88,129.544,193.024,128.52z"/><path style="fill:#FFFFFF;" d="M278.528,90.12c10.24-1.536,16.896-8.192,15.36-12.288c-1.024-3.584-10.24-6.144-19.456-1.536 c-6.144,2.56-22.016,13.824-22.016,13.824S271.872,91.144,278.528,90.12z"/><path style="fill:#FFFFFF;" d="M249.856,136.712c10.24-1.536,16.896-8.192,15.36-12.288c-1.024-3.584-10.24-6.144-19.456-1.536 c-6.144,2.56-22.016,13.824-22.016,13.824S243.712,137.736,249.856,136.712z"/><path style="fill:#FFFFFF;" d="M310.784,125.448c10.24-1.536,16.896-8.192,15.36-12.288c-1.024-3.584-10.24-6.144-19.456-1.536 c-6.144,2.56-22.016,13.824-22.016,13.824S304.64,126.472,310.784,125.448z"/></g></svg>';

            // countScore.innerText = beginEatNum;

            newDropZone.dataset.dropZone = false;//dataset.dropZone - false - элемент не над дропзоной при перемещении,true - элемент над дропзоной при перемещении

            wrapper.append(countNpc, countScore, newDropZone);
        }
    }

    let isMobileDevice = IsMobileCard();
    if (isMobileDevice == false) {
        body.onmousedown = function(event) {
            // console.log('down')
            let item = event.target;

            if(event.target.className == 'item_main_block_up') {//если кликнули по перетаскиваемому элементу
                //увеличим размер блока за который тянем
                    item.style.width = 'calc(2000% + 40px)';
                    item.style.height = 'calc(2000% + 40px)';
                    item.style.top = '-400px';
                    item.style.left = '-600px';

                    item = item.parentElement;//получим главный блок, внутри которого все части item_main_block

                    //удалить все таймеры для конкретного персонажа
                        clearTimerForPers(item);   

                    item.dataset.moveNow = true;//перетаскивается ли в данный момент или нет. установим true - перетаскивается

                    setAnimationMovePers(item);//добавим анимацию персонажу, когда схватили его

                    let shiftX = event.clientX - item.getBoundingClientRect().left + 40;
                    let shiftY = event.clientY - item.getBoundingClientRect().top + 40;
                    moveAt(event.pageX, event.pageY);

                    //меняем положение NPC, когда тащим его
                        function moveAt(pageX, pageY) {
                            item.style.left = pageX - shiftX + 'px';
                            item.style.top = pageY - shiftY + 'px';

                            //оси координат для наглядности
                            // document.querySelector('.left').style.left = pageX - shiftX + 'px';
                            // document.querySelector('.left').style.top = pageY - shiftY + 'px';        
                            // document.querySelector('.top').style.left = pageX - shiftX + 'px';
                            // document.querySelector('.top').style.top = pageY - shiftY + 'px';
                        }
                        function onMouseMove(event) {
                            moveAt(event.pageX, event.pageY);
                            item.style.transition = '0s ease-in-out';
                        }
                        document.addEventListener('mousemove', onMouseMove);

                    //отпустили кнопку мыши
                    window.onmouseup = function() {
                        item.dataset.moveNow = false;//перетаскивается ли в данный момент или нет.установим false - не перетаскивается

                        //вернём размер блоку за который тянем
                            item.querySelector('.item_main_block_up').style.width = 'calc(100% + 20px)';
                            item.querySelector('.item_main_block_up').style.height = 'calc(100% + 20px)';
                            item.querySelector('.item_main_block_up').style.top = '0px';
                            item.querySelector('.item_main_block_up').style.left = '0px';

                        setAnimationStay(item);//добавим анимацию персонажу в состоянии покоя, когда отпустили его

                        let droppable = document.querySelector('.droppable');//блок куда перетаскиваем по центру
                        let timerIsCollide = setTimeout(() => {
                            if (isCollide(item, droppable)) {//если персонаж пересёкся с кормушкой
                                dinnerPers(item);//установим позицию персонажу с одной из сторон кормушки и включим анимаци поедания

                                item.dataset.inDroppable = true;//лежит почти в зоне, куда перемещаем элементы
                            }else{//если персонаж НЕ пересёкся с кормушкой
                                item.style.left = item.dataset.posX + 'px';
                                item.style.top = item.dataset.posY + 'px';

                                item.dataset.inDroppable = false;//лежит вне зоны, куда перемещаем элементы
                            }
                            clearTimeout(timerIsCollide);
                        }, 200);
                        timeoutArray.push(timerIsCollide);

                        document.removeEventListener('mousemove', onMouseMove);
                        item.onmouseup = null;
                    };
            }else{
                //кликнули не по NPC
            }
        };
    } else {
        body.ontouchstart = function(event) {
            // console.log('down')
            let item = event.target;

            if(event.target.className == 'item_main_block_up') {//если кликнули по перетаскиваемому элементу
                //увеличим размер блока за который тянем
                    item.style.width = 'calc(2000% + 40px)';
                    item.style.height = 'calc(2000% + 40px)';
                    item.style.top = '-400px';
                    item.style.left = '-600px';
    
                    item = item.parentElement;//получим главный блок, внутри которого все части item_main_block
    
                    //удалить все таймеры для конкретного персонажа
                        clearTimerForPers(item);   
    
                    item.dataset.moveNow = true;//перетаскивается ли в данный момент или нет. установим true - перетаскивается
    
                    setAnimationMovePers(item);//добавим анимацию персонажу, когда схватили его
    
                    let shiftX = event.targetTouches[0].clientX - item.getBoundingClientRect().left + 40;
                    let shiftY = event.targetTouches[0].clientY - item.getBoundingClientRect().top + 40;
                    moveAt(event.targetTouches[0].pageX, event.targetTouches[0].pageY);
    
                    //меняем положение NPC, когда тащим его
                        function moveAt(pageX, pageY) {
                            item.style.left = pageX - shiftX + 'px';
                            item.style.top = pageY - shiftY + 'px';
    
                            //оси координат для наглядности
                            // document.querySelector('.left').style.left = pageX - shiftX + 'px';
                            // document.querySelector('.left').style.top = pageY - shiftY + 'px';        
                            // document.querySelector('.top').style.left = pageX - shiftX + 'px';
                            // document.querySelector('.top').style.top = pageY - shiftY + 'px';
                        }
                        function onMouseMoveTouch(event) {
    
                            moveAt(event.targetTouches[0].pageX, event.targetTouches[0].pageY);
                            item.style.transition = '0s ease-in-out';
                        }
                        document.addEventListener('touchmove', onMouseMoveTouch);
    
                    //отпустили кнопку мыши
                    window.ontouchend = function() {
                        item.dataset.moveNow = false;//перетаскивается ли в данный момент или нет.установим false - не перетаскивается
    
                        //вернём размер блоку за который тянем
                            item.querySelector('.item_main_block_up').style.width = 'calc(100% + 20px)';
                            item.querySelector('.item_main_block_up').style.height = 'calc(100% + 20px)';
                            item.querySelector('.item_main_block_up').style.top = '0px';
                            item.querySelector('.item_main_block_up').style.left = '0px';
    
                        setAnimationStay(item);//добавим анимацию персонажу в состоянии покоя, когда отпустили его
    
                        let droppable = document.querySelector('.droppable');//блок куда перетаскиваем по центру
                        let timerIsCollide = setTimeout(() => {
                            if (isCollide(item, droppable)) {//если персонаж пересёкся с кормушкой
                                dinnerPers(item);//установим позицию персонажу с одной из сторон кормушки и включим анимаци поедания
    
                                item.dataset.inDroppable = true;//лежит почти в зоне, куда перемещаем элементы
                            }else{//если персонаж НЕ пересёкся с кормушкой
                                item.style.left = item.dataset.posX + 'px';
                                item.style.top = item.dataset.posY + 'px';
    
                                item.dataset.inDroppable = false;//лежит вне зоны, куда перемещаем элементы
                            }
                            clearTimeout(timerIsCollide);
                        }, 200);
                        timeoutArray.push(timerIsCollide);
    
                        document.removeEventListener('touchmove', onMouseMoveTouch);
                        item.onmouseup = null;
                    };
            }else{
                //кликнули не по NPC
            }
        };
    }


//проверка, все ли элементы размещены в своих зонах

//Вычислить рандом между двумя числами с округлением до целого
    function getRandRound(one, two) {
        return Math.round(Math.random() * (one - two) + two)
    }

//Функция для генерации случайных координат
    function getRandomCoordinate(max) {
        return Math.floor(Math.random() * max);
    }

//Функция определения процента одного числа от другого
    function relDiff(a, b) {
        return  100 * Math.abs( ( a - b ) / ( (a+b)/2 ) );
       }

//функция для определения пересечения элементов с центральным блоком
    function isCollide(a, b) {
        let aRect = a.getBoundingClientRect();//элемент
        let bRect = b.getBoundingClientRect(),//зона куда перетаскиваем
        statCollide = !(
            aRect.top + aRect.height < bRect.top ||
            aRect.top > bRect.top + bRect.height ||
            aRect.left + aRect.width < bRect.left ||
            aRect.left > bRect.left + bRect.width
        );

        if (statCollide == true) {
            a.dataset.inDroppable == 'true';
        }else{
            a.dataset.inDroppable == 'false';
        }
        return statCollide;
    }

//Проверка пересечений для всех NPC сразу
    function isCollideGlobal(off) {
        //aId - id/class NPC
        //off - если передаём значение этого аргумента, то удалим интервал


        let intervalColide = setInterval(() => {
            let itemMainBlockAll = document.querySelectorAll('.item_main_block'),
                droppable = document.querySelector('.droppable');//блок в центре. Проверяем пересечение с ним
            itemMainBlockAll.forEach(item => {
                if (isCollide(item, droppable)) {
                    droppable.style.filter = 'brightness(.9)';
                    item.querySelector('.item_polo').style.display = 'flex';
                }else{
                    droppable.style.filter = 'brightness(1)';
                    item.querySelector('.item_polo').style.display = 'none';
                }
            });

            //посчитаем есть ли хоть одно пересечение
                let calcCollide = 0;
                itemMainBlockAll.forEach(item => {
                    if (isCollide(item, droppable)) {
                        calcCollide++;
                    }
                });

            if (calcCollide > 0) {//если есть пересечения
                CollideGlobal = true;
                droppable.dataset.dropZone = true;//в данный момент есть пересечение или нет
            }else{
                CollideGlobal = false;
                droppable.dataset.dropZone = false;//в данный момент есть пересечение или нет
            }
            // console.log(off)
        }, 200);

        if (off !== undefined) {
            clearInterval(intervalColide);
        }
    }

//получить новые координаты для элемента с краёв центрального блока (кормушки)
    function calculateNewCoordPosElInside(pers) {
        let droppableRect = document.querySelector('.droppable').getBoundingClientRect(),//координаты блока куда перетаскиваем по центру
            coordXArr = [droppableRect.left - 70, droppableRect.right - 20];

        //отразить NPC по горизонтали если выбрана левая сторона центрального блока и наоборот
            function mirrorHorisontal(side) {                
                if (side == 0) {
                    let anyTimer = setTimeout(() => {
                        pers.style.transition = '.1s ease-in-out';
                        pers.style.transform = 'scaleX(-1)';
                        clearTimeout(anyTimer);
                    }, 450);
                    pers.dataset.timerDinner += ',' + anyTimer;
                } else if(side == 1) {
                    let anyTimer = setTimeout(() => {
                        pers.style.transition = '.1s ease-in-out';
                        pers.style.transform = 'scaleX(1)';
                        clearTimeout(anyTimer);
                    }, 450);
                    pers.dataset.timerDinner += ',' + anyTimer;
                }
            }

        let newXNum = getRandRound(0, 1);
        let newX = coordXArr[newXNum];
        let newY = getRandRound(droppableRect.top + 10, droppableRect.top + droppableRect.height - 80);

        mirrorHorisontal(newXNum);

        //нужны для определения границ блока
            // let top = document.querySelector('.top'),
            //     left = document.querySelector('.left');
            // top.style.top = newY + 'px';
            // left.style.left = newX + 'px';

            // console.log('up:'+(droppableRect.top))
            // console.log('down:'+(droppableRect.top + droppableRect.height))
            // console.log('newY:'+newY)

            // console.log('*********')

            // console.log('left:'+(droppableRect.left))
            // console.log('right:'+(droppableRect.left + droppableRect.width))
            // console.log('newX:'+newX)
        //нужны для определения границ блока

        return {x: newX, y: newY}
    }

//переместить персонажа к кормушке
    function dinnerPers(pers) {
        let newCoord = calculateNewCoordPosElInside(pers);

        //персонаж бежит к миске
            pers.style.transition = '2s ease-in-out';

            setAnimationForFoot(pers, 'run_foot_one', 'run_foot_two');
            let runPersTimer = setTimeout(() => {
                pers.style.left = newCoord.x + 'px';
                pers.style.top = newCoord.y + 'px';
                clearTimeout(runPersTimer);
            }, 100);
            pers.dataset.timerDinner += ',' + runPersTimer;

        //начал кушать
            let dinnerTimer = setTimeout(() => {
                setAnimationDinner(pers);
                clearTimeout(dinnerTimer);
            }, 2000);
            pers.dataset.timerDinner += ',' + dinnerTimer;
    }
    
//появление кормушки
    function fadeDropZone() {
        let timerPosMainElemInWrapper = setTimeout(() => {
            document.querySelector('.droppable').style.transform = 'scale(1)';
            clearTimeout(timerPosMainElemInWrapper);
        }, 600);
    }

//установить любую анимацию
    function setAnimation(pers, animName, longTime, delayTime) {
        //animName - название анимации
        //longTime - время выполнения
        //delayTime - время задержки
        let animStr = '';

        if (longTime) {
            animStr += `${animName} ${longTime}s ease-in-out infinite`;
        }else{
            animStr += `${animName} .5s ease-in-out infinite`;
        }

        pers.style.animation = animStr;
    }

//установить анимацию в состоянии покоя
    function setAnimationStay(pers) {
        setAnimation(pers, '');
        let itemFootAll = pers.querySelectorAll('.item_foot');
        itemFootAll.forEach(itemFoot => {
            itemFoot.style.transform = 'rotate(0deg)';
            setAnimation(itemFoot, '');
        });
        setAnimation(pers.querySelector('.item_head'), 'stay_pers_head', 1);
        setAnimation(pers.querySelector('.item_mouth'), '');
    }

//установить анимацию тащим NPC
    function setAnimationMovePers(pers) {
        setAnimation(pers, 'move_body');
        let itemFootAll = pers.querySelectorAll('.item_foot');
        itemFootAll.forEach(itemFoot => {
            setAnimation(itemFoot, '');
            itemFoot.style.transform = 'rotate(-60deg)';
        });
        setAnimation(pers.querySelector('.item_head'), 'move_head');
        setAnimation(pers.querySelector('.item_mouth'), '');
    }

//установить анимацию для ног
    function setAnimationForFoot(pers, nameAnimOnePair, nameAnimTwoPair, dontStop, timeAnim) {
        let itemFootAll = pers.querySelectorAll('.item_foot'),//все ноги
            countFoot = 0;
        itemFootAll.forEach(item => {
            if (countFoot == 0) {
                setAnimation(item, nameAnimOnePair, timeAnim);
                countFoot++;
            }else{
                setAnimation(item, nameAnimTwoPair, timeAnim);
                countFoot--;
            }            
        });

        if (dontStop) {
            
        }else{
            let anyTimer = setTimeout(() => {
                let itemFootAll = pers.querySelectorAll('.item_foot');//все ноги
                itemFootAll.forEach(item => {
                    setAnimation(item, '');
                });
                
                clearTimeout(anyTimer);
            }, 2000);
            pers.dataset.timerDinner += ',' + anyTimer;
        }
    }

//установить анимацию танца
    function setAnimationDanse(pers, nameAnimBody, nameAnimOnePair, nameAnimTwoPair, nameAnimHead, dontStop, timeAnim) {
        if (pers.dataset.moveNow == 'false') {//если сейчас не перетаскивается
            setAnimation(pers, nameAnimBody, '1');
            setAnimation(pers.querySelector('.item_head'), nameAnimHead, '1');
            
            setAnimationForFoot(pers, nameAnimOnePair, nameAnimTwoPair, dontStop, timeAnim);
            setAnimation(pers.querySelector('.item_mouth'), '');
        }
    }

//установить анимацию кушает
    function setAnimationDinner(pers) {
        setAnimation(pers, '');
        let itemFootAll = pers.querySelectorAll('.item_foot');
        itemFootAll.forEach(itemFoot => {
            itemFoot.style.transform = 'rotate(0deg)';
            setAnimation(itemFoot, '');
        });

        setAnimation(pers.querySelector('.item_mouth'), 'dinner_mouth', '.7');
        setAnimation(pers.querySelector('.item_head'), 'dinner_head', '.7');
        setPoloIn(pers);
    }

//установить содержимое кружочка над головой
    function setPoloIn(pers) {
        let polo = pers.querySelector('.item_polo');
            polo.innerHTML = '<svg id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><g id="Page-1_14_"><g id="tasty_export_14_" transform="translate(-296 -296)"><path id="meal_x2C_-food_x2C_-eat_x2C_-restaurant_x2C_-spoon_x2C_-fork-2" d="m552 808c-141.385 0-256-114.615-256-256s114.615-256 256-256 256 114.615 256 256-114.615 256-256 256zm0-30.118c124.751 0 225.882-101.131 225.882-225.882s-101.131-225.882-225.882-225.882-225.882 101.131-225.882 225.882 101.131 225.882 225.882 225.882zm-67.765-203.294v112.941c0 8.317-6.742 15.059-15.059 15.059s-15.059-6.742-15.059-15.059v-112.941c-33.267 0-60.235-26.968-60.235-60.235v-82.824c0-8.317 6.742-15.059 15.059-15.059s15.059 6.742 15.059 15.059v82.824c0 16.633 13.484 30.118 30.118 30.118h30.118c16.634 0 30.118-13.484 30.118-30.118v-82.824c0-8.317 6.742-15.059 15.059-15.059s15.059 6.742 15.059 15.059v82.824c-.001 33.267-26.97 60.235-60.237 60.235zm180.706 20.687v92.254c0 8.317-6.742 15.059-15.059 15.059s-15.059-6.742-15.059-15.059v-92.254c-35.14-9.043-60.235-49.213-60.235-95.981 0-53.213 32.487-97.882 75.294-97.882s75.294 44.67 75.294 97.882c0 46.769-25.094 86.938-60.235 95.981zm-15.059-28.216c23.727 0 45.177-29.493 45.177-67.765s-21.449-67.765-45.177-67.765c-23.727 0-45.176 29.493-45.176 67.765s21.449 67.765 45.176 67.765zm-195.764-135.53c0-8.317 6.742-15.059 15.059-15.059s15.059 6.742 15.059 15.059v75.294c0 8.317-6.742 15.059-15.059 15.059s-15.059-6.742-15.059-15.059z" fill="#000000" style="fill: rgb(92, 92, 92);"></path></g></g></g></svg>';

    }

//очистка сцены
    function clearScene() {
        //удалим всех NPC
            let itemElemAll = document.querySelectorAll('.item_main_block');//все элементы
            itemElemAll.forEach(item => {
                item.remove();
            });

        //удалим все активные таймауты
            for (let i = 0; i < timeoutArray.length; i++) {
                clearTimeout(timeoutArray[i]);
            }
            timeoutArray = [];
    }

//удалить таймеры для конкретного персонажа
    function clearTimerForPers(pers) {
        let timersDinnerArr = pers.dataset.timerDinner;
        timersDinnerArr = timersDinnerArr.split(',');
        timersDinnerArr.forEach(itemDinner => {
            clearTimeout(itemDinner);
        });
        pers.dataset.timerDinner = '';
    }

//вычисление количества съеденной еды
    function calcScore() {
        let droppable = document.querySelector('.droppable'),
            countScore = document.querySelector('#count_score'),
            burger = droppable.querySelector('svg');

        if (beginEatNum == 0) {
            // countScore.innerText = 'Всё скушали';
            refreshSettings();
        }else if(droppable.dataset.dropZone == 'true') {
            beginEatNum--;
            countScore.style.width = beginEatNum + '%';
            burger.style.height = beginEatNum + '%';
        }
    }
    
//перезапуск сцены
    function refreshSettings() {
        clearScene();//очистить сцену
        numItem++;// на одного больше
        createPers(numItem);//создаём персонажей
        countScore = document.querySelector('#count_score');
        let countNpc = document.querySelector('#count_npc');
        countNpc.innerHTML ='<div>' + numItem + '</div><div style="font-size:.7em;">NPC</div>';

        //обнулим счётчик
            beginEatNum = 100;
            // countScore.innerText = beginEatNum;
            countScore.style.width = '100%';
    }

//Начало игры при клике на кнопку Старт в главном меню
    document.querySelector('.btn_start').addEventListener('click', (e)=> {
        document.querySelector('.logo').querySelector('.item_main_block').remove();
        document.querySelector('#menu').style.transform = 'translateX(-100%)';
    
        let anyTimer = setTimeout(() => {
            //настроим сцену при первом запуске страницы
                createDropZone(1);//создадим зону куда перестаскиваются объекты
                refreshSettings();//перезапуск сцены
                CollideGlobal = isCollideGlobal();//запустим глобальную проверку пересечения NPC и кормушки
    
            //каждые 10000мс добавим анимацию танца случайному NPC
                setInterval(() => {
                    let itemMainBlockAll = document.querySelectorAll('.item_main_block'),
                        numElem = getRandRound(0, itemMainBlockAll.length - 1),//рандомный персонаж
                        droppable = document.querySelector('.droppable');
    
                    if (!isCollide(itemMainBlockAll[numElem], droppable) && itemMainBlockAll[numElem].dataset.moveNow == 'false') {
                        setAnimationDanse(itemMainBlockAll[numElem], 'dance_body', 'dance_foot_one', 'dance_foot_two', 'dance_head', 'dont_stop', 1);
                    }
                }, 10000);
    
            //каждые dinnerTime рандомный персонаж подбегает к кормушке
                let dinnerTime = 900;
                setInterval(() => {
                    dinnerTime = getRandRound(1000, 3000);
                }, 1000);
                
                setInterval(() => {
                    let itemMainBlockAll = document.querySelectorAll('.item_main_block'),
                        numElem = getRandRound(0, itemMainBlockAll.length - 1),//рандомный персонаж
                        droppable = document.querySelector('.droppable');
    
                        if (!isCollide(itemMainBlockAll[numElem], droppable) && itemMainBlockAll[numElem].dataset.moveNow == 'false') {
                            dinnerPers(itemMainBlockAll[numElem]);
                        }            
                }, dinnerTime);
    
            let calcScoreINterval = setInterval(() => {
                calcScore();
                // clearInterval(calcScoreINterval);
            }, 200);
    
            clearTimeout(anyTimer);
        }, 200);
    });

//установка координат
// setTimeout(() => {
//     let droppableRect = document.querySelector('.droppable').getBoundingClientRect(),//координаты блока куда перетаскиваем по центру
//     itemElemRect = document.querySelector('.item_main_block').getBoundingClientRect();//координаты элемента
//     console.log(droppableRect.top)
//     document.querySelector('.left').style.left = droppableRect.right - 20 + 'px';
//     document.querySelector('.left').style.top = droppableRect.top + 'px';

//     document.querySelector('.top').style.left = droppableRect.left + 20 + 'px';
//     document.querySelector('.top').style.top = droppableRect.top + 40 + 'px';
// }, 2000);

//проверка на каком устройстве запущена игра
    function IsMobileCard() {
        var check =  false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);

        return check;   
    }
