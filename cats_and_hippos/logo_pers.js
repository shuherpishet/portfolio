
//настройки для NPC в логотипе
    let npcLogo = {//кот
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
        }

    //создать персонажей NPC
    function createPersOnLogo() {
        let itemMainBlock = document.createElement('div'),//главный блок. внутри все части тела
            itemMainBlockUp = document.createElement('div'),//главный блок. поверх всего
            itemBody = document.createElement('div'),//тело
            itemHead = document.createElement('div'),//голова
            itemPolo = document.createElement('div'),//сверху головы информация
            itemEyeMain = document.createElement('div'),//блок для глаз
            mouth = document.createElement('div'),//рот
            logo = document.querySelector('.logo');

        itemMainBlock.className = 'item_main_block';
        itemMainBlockUp.className = 'item_main_block_up';
        itemBody.className = 'item_body';
        itemHead.className = 'item_head';
        itemPolo.className = 'item_polo';
        itemEyeMain.className = 'item_eye_main';
        mouth.className = 'item_mouth';

        itemPolo.innerHTML = '&#10004;';//информационное сообщение над головой персонажа добавим галочку

        //Применение параметров NPC
            function takeParam() {
                //тело
                    itemBody.style.width = npcLogo.body.w;
                    itemBody.style.height = npcLogo.body.h;
                    itemBody.style.top = npcLogo.body.t;
                    itemBody.style.left = npcLogo.body.l;
                    itemBody.style.right = npcLogo.body.r;
                    itemBody.style.right = npcLogo.body.r;
                    itemBody.style.right = npcLogo.body.r;
                    itemBody.style.borderRadius = npcLogo.body.brad;
                    itemBody.style.borderTop = npcLogo.body.btop;
                    itemBody.style.borderRight = npcLogo.body.bright;
                    itemBody.style.borderBottom = `${npcLogo.body.bbott}`;
                    itemBody.style.borderLeft = npcLogo.body.bleft;
                    itemBody.style.backgroundColor = npcLogo.body.backcolor;
                    itemBody.style.borderColor = npcLogo.body.bcolor;

                //голова
                    itemHead.style.width = npcLogo.head.w;
                    itemHead.style.height = npcLogo.head.h;
                    itemHead.style.top = npcLogo.head.t;
                    itemHead.style.left = npcLogo.head.l;
                    itemHead.style.right = npcLogo.head.r;
                    itemHead.style.right = npcLogo.head.r;
                    itemHead.style.right = npcLogo.head.r;
                    itemHead.style.borderRadius = npcLogo.head.brad;
                    itemHead.style.borderTop = npcLogo.head.btop;
                    itemHead.style.borderRight = npcLogo.head.bright;
                    itemHead.style.borderBottom = npcLogo.head.bbott;
                    itemHead.style.borderLeft = npcLogo.head.bleft;
                    itemHead.style.backgroundColor = npcLogo.head.backcolor;
                    itemHead.style.borderColor = npcLogo.head.bcolor;                        
            }
            takeParam();

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
                    item.style.width = npcLogo.foot.w;
                    item.style.height = npcLogo.foot.h;
                    item.style.top = npcLogo.foot.t;
                    item.style.left = npcLogo.foot.l;
                    item.style.right = npcLogo.foot.r;
                    item.style.right = npcLogo.foot.r;
                    item.style.right = npcLogo.foot.r;
                    item.style.borderRadius = npcLogo.foot.brad;
                    item.style.borderTop = npcLogo.foot.btop;
                    item.style.borderRight = npcLogo.foot.bright;
                    item.style.borderBottom = npcLogo.foot.bbott;
                    item.style.borderLeft = npcLogo.foot.bleft;      
                    item.style.backgroundColor = npcLogo.foot.backcolor;

                    item.className = itemClass;
                    item.style.left = itemLeft + 'px';

                    item.style.borderColor = npcLogo.foot.bcolor;

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
                    item.style.width = npcLogo.ear.w;
                    item.style.height = npcLogo.ear.h;
                    item.style.top = npcLogo.ear.t;
                    item.style.left = npcLogo.ear.l;
                    item.style.right = npcLogo.ear.r;
                    item.style.right = npcLogo.ear.r;
                    item.style.right = npcLogo.ear.r;
                    item.style.borderRadius = npcLogo.ear.brad;
                    item.style.borderTop = npcLogo.ear.btop;
                    item.style.borderRight = npcLogo.ear.bright;
                    item.style.borderBottom = npcLogo.ear.bbott;
                    item.style.backgroundColor = npcLogo.ear.backcolor;

                    item.className = itemClass;
                    item.style.left = itemLeft + 'px';

                    item.style.borderColor = npcLogo.ear.bcolor;

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
                let colorElem = 'rgb(80, 80, 80)';
                for (let i = 0; i < itemNum; i++) {
                    let item = document.createElement('div');//часть тела                              

                //часть тела
                    item.style.width = '10px';
                    item.style.height = '10px';
                    item.style.top = npcLogo.eye.t;
                    item.style.left = npcLogo.eye.l;
                    item.style.right = npcLogo.eye.r;
                    item.style.right = npcLogo.eye.r;
                    item.style.right = npcLogo.eye.r;
                    item.style.borderRadius = npcLogo.eye.brad;
                    item.style.borderTop = npcLogo.eye.btop;
                    item.style.borderRight = npcLogo.eye.bright;
                    item.style.borderBottom = npcLogo.eye.bbott;
                    item.style.borderLeft = npcLogo.eye.bleft;
                    item.style.backgroundColor = colorElem;

                    item.className = itemClass;

                    item.style.borderColor = npcLogo.eye.bcolor;

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
                    item.style.width = npcLogo.tail.w;
                    item.style.height = npcLogo.tail.h;
                    item.style.top = npcLogo.tail.t;
                    item.style.left = npcLogo.tail.l;
                    item.style.right = npcLogo.tail.r;
                    item.style.right = npcLogo.tail.r;
                    item.style.right = npcLogo.tail.r;
                    item.style.borderRadius = npcLogo.tail.brad;
                    item.style.borderTop = npcLogo.tail.btop;
                    item.style.borderRight = npcLogo.tail.bright;
                    item.style.borderBottom = npcLogo.tail.bbott;
                    item.style.borderLeft = npcLogo.tail.bleft;
                    item.style.backgroundColor = npcLogo.tail.backcolor;

                    item.className = itemClass;

                    item.style.borderColor = npcLogo.tail.bcolor;

                    itemIn.append(item);
                }
            }

        //ноги
            createFoot(itemMainBlock, 2, 'item_foot', npcLogo.posFoot[0], npcLogo.posFoot[1]);
            createFoot(itemMainBlock, 2, 'item_foot', npcLogo.posFoot[0] + 40, npcLogo.posFoot[1]);
        //уши
            createEar(itemHead, 2, 'item_ear', npcLogo.posEar[0], npcLogo.posEar[1]);
        //глаза
            createEyes(itemEyeMain, 2, 'item_eye');

        //Хвост
            createTail(itemBody, 1, 'item_tail');

        itemHead.append(itemEyeMain, itemPolo, mouth);
        itemBody.append(itemHead);

        itemMainBlock.append(itemBody, itemMainBlockUp);

        itemMainBlock.style.position = 'relative';
        itemMainBlock.style.left = 'unset';
        itemMainBlock.style.top = 'unset';
        itemMainBlock.style.transform = 'scale(2)';

        logo.append(itemMainBlock);
    }
    createPersOnLogo();