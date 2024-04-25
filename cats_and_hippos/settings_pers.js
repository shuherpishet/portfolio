//цвета
    let colorsEyes = [
        'rgb(247, 245, 156)','rgb(193, 245, 242)','rgb(241, 241, 241)','rgb(80, 80, 80)','rgb(172, 255, 206)'
    ];

//округлить до сотен
    function MyRound100(val) {
        return Math.round(val / 100) * 100;
    }
//округлить до десяток
    function MyRound10(val) {
        return Math.round(val / 10) * 10;
    }

let numItem = 2;//количество персонажей (фактическое количество будет на старте больше на 1, чемуказано тут)
    // windowWidth = MyRound100(document.querySelector('body').getBoundingClientRect().width);//ширина окна с округлением до сотен

//настройки для NPC
    let npcArr = [
        {//кот
            body: {
                name: 'cat',
                part: 'body',
                w: '80px',
                h: '35px',
                t: '',
                l: '',
                r: '',
                b: '',
                brad: '15px 15px 10px 10px',
                btop: '1px solid',
                bright: '',
                bbott: '8px solid',
                bleft: '',
                backcolor: '',
                bcolor: '',
                backcolor: 'rgb(226, 178, 46)',
                bcolor: 'rgb(241, 214, 138)'
            },
            head: {
                name: 'cat',
                part: 'head',
                w: '35px',
                h: '35px',
                t: '0px',
                l: '-17px',
                brad: '10px',
                btop: '',
                bright: '3px solid',
                bbott: '3px solid',
                bleft: '',
                backcolor: '',
                bcolor: '',
                backcolor: 'rgb(226, 178, 46)',
                bcolor: 'rgb(216, 166, 29)'
            },
            ear: {
                name: 'cat',
                part: 'ear',
                w: '10px',
                h: '12px',
                t: '',
                l: '0px',
                r: '',
                b: 'calc(100% - 10px)',
                brad: '5px 5px 0 0',
                btop: '2px solid',
                bright: '',
                bbott: '',
                bleft: '',
                backcolor: '',
                bcolor: '',
                backcolor: 'rgb(226, 178, 46)',
                bcolor: 'rgb(216, 166, 29)'
            },
            tail: {
                name: 'cat',
                part: 'tail',
                w: '10px',
                h: '40px',
                t: '10px',
                l: '',
                r: '10px',
                b: '',
                brad: '10px',
                btop: '',
                bright: '',
                bbott: '20px solid',
                bleft: '',
                backcolor: '',
                bcolor: '',
                backcolor: 'rgb(226, 178, 46)',
                bcolor: 'rgb(216, 166, 29)'
            },
            eye: {
                name: 'cat',
                part: 'eye',
                w: '5px',
                h: '5px',
                t: '',
                l: '',
                r: '',
                b: '',
                brad: '',
                btop: '',
                bright: '',
                bbott: '',
                bleft: '',
                backcolor: '',
                bcolor: '',
                backcolor: 'rgb(24, 196, 47)',
                bcolor: 'rgb(165, 165, 165)'
            },
            foot: {
                name: 'cat',
                part: 'foot',
                w: '10px',
                h: '20px',
                t: '',
                l: '',
                r: '',
                b: '',
                brad: '10px',
                btop: '',
                bright: '',
                bbott: '4px solid',
                bleft: '',
                backcolor: '',
                bcolor: '',
                backcolor: 'rgb(226, 178, 46)',
                bcolor: 'rgb(216, 166, 29)'
            },
            posEar: [5, 20],
            posFoot: [10, 13]
        },
        {//бегемот
            body: {
                name: 'hippopotam',
                part: 'body',
                w: '80px',
                h: '50px',
                t: '',
                l: '',
                r: '',
                b: '',
                brad: '20px 40px 20px 10px',
                btop: '1px solid',
                bright: '',
                bbott: '10px solid',
                bleft: '',
                backcolor: 'rgb(196, 196, 196)',
                bcolor: 'rgb(165, 165, 165)'
            },
            head: {
                name: 'hippopotam',
                part: 'head',
                w: '40px',
                h: '60px',
                t: '0px',
                l: '-20px',
                brad: '15px',
                btop: '',
                bright: '5px solid',
                bbott: '5px solid',
                bleft: '',
                backcolor: 'rgb(196, 196, 196)',
                bcolor: 'rgb(165, 165, 165)'
            },
            ear: {
                name: 'hippopotam',
                part: 'ear',
                w: '10px',
                h: '15px',
                t: '',
                l: '',
                r: '',
                b: 'calc(100% - 10px)',
                brad: '10px 10px 0 0',
                btop: '',
                bright: '2px solid',
                bbott: '2px solid',
                bleft: '',
                backcolor: 'rgb(196, 196, 196)',
                bcolor: 'rgb(165, 165, 165)'
            },
            tail: {
                name: 'hippopotam',
                part: 'tail',
                w: '8px',
                h: '20px',
                t: '25px',
                l: '',
                r: '5px',
                b: '',
                brad: '5px',
                btop: '',
                bright: '',
                bbott: '',
                bleft: '',
                backcolor: 'rgb(196, 196, 196)',
                bcolor: 'rgb(165, 165, 165)'
            },
            eye: {
                name: 'hippopotam',
                part: 'eye',
                w: '5px',
                h: '5px',
                t: '',
                l: '',
                r: '',
                b: '',
                brad: '100%',
                btop: '4px solid',
                bright: '',
                bbott: '',
                bleft: '',
                backcolor: '',
                bcolor: 'rgb(165, 165, 165)'
            },
            foot: {
                name: 'hippopotam',
                part: 'foot',
                w: '15px',
                h: '25px',
                t: '',
                l: '',
                r: '',
                b: '',
                brad: '10px',
                btop: '',
                bright: '',
                bbott: '',
                bleft: '',
                backcolor: 'rgb(196, 196, 196)',
                bcolor: 'rgb(165, 165, 165)'
            },
            posEar: [5, 25],
            posFoot: [5, 17]
        }
    ];

    //создать персонажей NPC
    function createPers(numElem) {
        let countLeft = 0;

        for (let i = 0; i < numElem; i++) {
            let itemMainBlock = document.createElement('div'),//главный блок. внутри все части тела
                itemMainBlockUp = document.createElement('div'),//главный блок. поверх всего
                itemBody = document.createElement('div'),//тело
                itemHead = document.createElement('div'),//голова
                itemPolo = document.createElement('div'),//сверху головы информация
                itemEyeMain = document.createElement('div'),//блок для глаз
                mouth = document.createElement('div'),//рот
                typeElem = getRandRound(0, npcArr.length - 1);//тип элемента

            itemMainBlock.className = 'item_main_block';
            itemMainBlockUp.className = 'item_main_block_up';
            itemBody.className = 'item_body';
            itemHead.className = 'item_head';
            itemPolo.className = 'item_polo';
            itemEyeMain.className = 'item_eye_main';
            mouth.className = 'item_mouth';

            itemPolo.innerHTML = '&#10004;';//информационное сообщение над головой персонажа добавим галочку

            itemMainBlock.dataset.inDroppable = false;//лежит внутри зоны куда перетаскиваем или нет
            itemMainBlock.dataset.moveNow = false;//перетаскивается ли в данный момент или нет
            itemMainBlock.dataset.timerDinner = '';

            //Применение параметров NPC
                function takeParam(takedNpcNum) {
                    //тело
                        itemBody.style.width = npcArr[takedNpcNum].body.w;
                        itemBody.style.height = npcArr[takedNpcNum].body.h;
                        itemBody.style.top = npcArr[takedNpcNum].body.t;
                        itemBody.style.left = npcArr[takedNpcNum].body.l;
                        itemBody.style.right = npcArr[takedNpcNum].body.r;
                        itemBody.style.right = npcArr[takedNpcNum].body.r;
                        itemBody.style.right = npcArr[takedNpcNum].body.r;
                        itemBody.style.borderRadius = npcArr[takedNpcNum].body.brad;
                        itemBody.style.borderTop = npcArr[takedNpcNum].body.btop;
                        itemBody.style.borderRight = npcArr[takedNpcNum].body.bright;
                        itemBody.style.borderBottom = `${npcArr[takedNpcNum].body.bbott}`;
                        itemBody.style.borderLeft = npcArr[takedNpcNum].body.bleft;
                        itemBody.style.backgroundColor = npcArr[takedNpcNum].body.backcolor;
                        itemBody.style.borderColor = npcArr[takedNpcNum].body.bcolor;

                    //голова
                        itemHead.style.width = npcArr[takedNpcNum].head.w;
                        itemHead.style.height = npcArr[takedNpcNum].head.h;
                        itemHead.style.top = npcArr[takedNpcNum].head.t;
                        itemHead.style.left = npcArr[takedNpcNum].head.l;
                        itemHead.style.right = npcArr[takedNpcNum].head.r;
                        itemHead.style.right = npcArr[takedNpcNum].head.r;
                        itemHead.style.right = npcArr[takedNpcNum].head.r;
                        itemHead.style.borderRadius = npcArr[takedNpcNum].head.brad;
                        itemHead.style.borderTop = npcArr[takedNpcNum].head.btop;
                        itemHead.style.borderRight = npcArr[takedNpcNum].head.bright;
                        itemHead.style.borderBottom = npcArr[takedNpcNum].head.bbott;
                        itemHead.style.borderLeft = npcArr[takedNpcNum].head.bleft;
                        itemHead.style.backgroundColor = npcArr[takedNpcNum].head.backcolor;
                        itemHead.style.borderColor = npcArr[takedNpcNum].head.bcolor;                        
                }
                takeParam(typeElem);

            //создать ноги
                function createFoot(itemIn, itemNum, itemClass, itemLeft, itemLeftStep) {
                    //itemIn - куда вставить
                    //itemNum - сколько элементов
                    //itemClass - класс элемента
                    //itemLeft - начальная позиция - отступ слева
                    //itemLeftStep - шаг позиции отступа слева
                    for (let i = 0; i < itemNum; i++) {
                        let item = document.createElement('div');//часть тела                           

                    //часть тела
                        item.style.width = npcArr[typeElem].foot.w;
                        item.style.height = npcArr[typeElem].foot.h;
                        item.style.top = npcArr[typeElem].foot.t;
                        item.style.left = npcArr[typeElem].foot.l;
                        item.style.right = npcArr[typeElem].foot.r;
                        item.style.right = npcArr[typeElem].foot.r;
                        item.style.right = npcArr[typeElem].foot.r;
                        item.style.borderRadius = npcArr[typeElem].foot.brad;
                        item.style.borderTop = npcArr[typeElem].foot.btop;
                        item.style.borderRight = npcArr[typeElem].foot.bright;
                        item.style.borderBottom = npcArr[typeElem].foot.bbott;
                        item.style.borderLeft = npcArr[typeElem].foot.bleft;      
                        item.style.backgroundColor = npcArr[typeElem].foot.backcolor;

                        item.className = itemClass;
                        item.style.left = itemLeft + 'px';

                        item.style.borderColor = npcArr[typeElem].foot.bcolor;

                        itemIn.append(item);
                        itemLeft += itemLeftStep;
                    }
                }

            //создать уши
                function createEar(itemIn, itemNum, itemClass, itemLeft, itemLeftStep) {
                    //itemIn - куда вставить
                    //itemNum - сколько элементов
                    //itemClass - класс элемента
                    //itemLeft - начальная позиция - отступ слева
                    //itemLeftStep - шаг позиции отступа слева
                    for (let i = 0; i < itemNum; i++) {
                        let item = document.createElement('div');//часть тела                              

                    //часть тела
                        item.style.width = npcArr[typeElem].ear.w;
                        item.style.height = npcArr[typeElem].ear.h;
                        item.style.top = npcArr[typeElem].ear.t;
                        item.style.left = npcArr[typeElem].ear.l;
                        item.style.right = npcArr[typeElem].ear.r;
                        item.style.right = npcArr[typeElem].ear.r;
                        item.style.right = npcArr[typeElem].ear.r;
                        item.style.borderRadius = npcArr[typeElem].ear.brad;
                        item.style.borderTop = npcArr[typeElem].ear.btop;
                        item.style.borderRight = npcArr[typeElem].ear.bright;
                        item.style.borderBottom = npcArr[typeElem].ear.bbott;
                        item.style.backgroundColor = npcArr[typeElem].ear.backcolor;

                        item.className = itemClass;
                        item.style.left = itemLeft + 'px';

                        item.style.borderColor = npcArr[typeElem].ear.bcolor;

                        itemIn.append(item);
                        itemLeft += itemLeftStep;
                    }
                }
                    
            //создать глаза
                function createEyes(itemIn, itemNum, itemClass) {
                    //itemIn - куда вставить
                    //itemNum - сколько элементов
                    //itemClass - класс элемента
                    //itemLeft - начальная позиция - отступ слева
                    //itemLeftStep - шаг позиции отступа слева
                    let randSizeEye = getRandRound(1, 8),
                        colorElem = colorsEyes[getRandRound(0, colorsEyes.length-1)];
                    for (let i = 0; i < itemNum; i++) {
                        let item = document.createElement('div');//часть тела                              

                    //часть тела
                        item.style.width = (parseInt(npcArr[typeElem].eye.w.replace('px', '')) + randSizeEye) + 'px';
                        item.style.height = (parseInt(npcArr[typeElem].eye.h.replace('px', '')) + randSizeEye) + 'px';
                        item.style.top = npcArr[typeElem].eye.t;
                        item.style.left = npcArr[typeElem].eye.l;
                        item.style.right = npcArr[typeElem].eye.r;
                        item.style.right = npcArr[typeElem].eye.r;
                        item.style.right = npcArr[typeElem].eye.r;
                        item.style.borderRadius = npcArr[typeElem].eye.brad;
                        item.style.borderTop = npcArr[typeElem].eye.btop;
                        item.style.borderRight = npcArr[typeElem].eye.bright;
                        item.style.borderBottom = npcArr[typeElem].eye.bbott;
                        item.style.borderLeft = npcArr[typeElem].eye.bleft;
                        item.style.backgroundColor = colorElem;

                        item.className = itemClass;

                        item.style.borderColor = npcArr[typeElem].eye.bcolor;

                        itemIn.append(item);
                    }
                }

            //создать хвост
                function createTail(itemIn, itemNum, itemClass, itemLeft, itemLeftStep) {
                    //itemIn - куда вставить
                    //itemNum - сколько элементов
                    //itemClass - класс элемента
                    //itemLeft - начальная позиция - отступ слева
                    //itemLeftStep - шаг позиции отступа слева
                    for (let i = 0; i < itemNum; i++) {
                        let item = document.createElement('div');//часть тела                              

                    //часть тела
                        item.style.width = npcArr[typeElem].tail.w;
                        item.style.height = npcArr[typeElem].tail.h;
                        item.style.top = npcArr[typeElem].tail.t;
                        item.style.left = npcArr[typeElem].tail.l;
                        item.style.right = npcArr[typeElem].tail.r;
                        item.style.right = npcArr[typeElem].tail.r;
                        item.style.right = npcArr[typeElem].tail.r;
                        item.style.borderRadius = npcArr[typeElem].tail.brad;
                        item.style.borderTop = npcArr[typeElem].tail.btop;
                        item.style.borderRight = npcArr[typeElem].tail.bright;
                        item.style.borderBottom = npcArr[typeElem].tail.bbott;
                        item.style.borderLeft = npcArr[typeElem].tail.bleft;
                        item.style.backgroundColor = npcArr[typeElem].tail.backcolor;

                        item.className = itemClass;

                        item.style.borderColor = npcArr[typeElem].tail.bcolor;

                        itemIn.append(item);
                    }
                }

            //ноги
                createFoot(itemMainBlock, 2, 'item_foot', npcArr[typeElem].posFoot[0], npcArr[typeElem].posFoot[1]);
                createFoot(itemMainBlock, 2, 'item_foot', npcArr[typeElem].posFoot[0] + 40, npcArr[typeElem].posFoot[1]);
            //уши
                createEar(itemHead, 2, 'item_ear', npcArr[typeElem].posEar[0], npcArr[typeElem].posEar[1]);
            //глаза
                createEyes(itemEyeMain, 2, 'item_eye');

            //Хвост
                createTail(itemBody, 1, 'item_tail');

            itemHead.append(itemEyeMain, itemPolo, mouth);
            itemBody.append(itemHead);

            itemMainBlock.append(itemBody, itemMainBlockUp);

            body.append(itemMainBlock);

            countLeft += 80;
        }
        fadeDropZone();//появление кормушки
    }