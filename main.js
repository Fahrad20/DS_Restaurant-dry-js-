const body = document.body;
const header = document.createElement('header');
body.appendChild(header);
header.style = 'min-height: 1200px; display: grid; align-content: flex-start; justify-content: center; grid-template-columns: 1fr; background: url(img/header/back.jpg) no-repeat center/cover; padding-top: 180px; text-align: center;';
const nav = document.createElement('nav');
header.appendChild(nav);
//nav.className = 'AAA BBB';
nav.style = 'width: 80%; margin: 0 auto 100px;';
const menu = document.createElement('ul');
menu.style = 'display: flex; justify-content: space-around; border-width: 2px 0; border-style: solid; border-color: #ffe4b5; list-style: none; padding: 5px 0';
nav.appendChild(menu);
for(let i = 0; i < 4; i++) {
    let menuItem = document.createElement('li');
    menu.appendChild(menuItem);
    let link = document.createElement('a');
    menuItem.appendChild(link);
    menuItem.onmouseover = () => menuItem.style.transform = 'scale(1.05)';
    menuItem.onmouseleave = () => menuItem.style.transform = 'scale(1)';
    menuItem.style = 'transition: .2s;';
    i == 0 ? link.innerText = 'We' : i == 1 ? link.innerText = 'Menu' : i == 2 ? link.innerText = 'Services' : link.innerText = 'Contact';
    link.style = 'text-decoration: none; color: #ffe4b5; font-family: RobotoRegular; font-size: 41.67px;';
    i == 0 ? link.href = 'https://facebook.com' : i ==1 ? link.href = 'https://youtube.com' : i == 2 ? link.href = 'https:/vk.com' : link.href = 'https:/twitter.com';
}
const homeTitle = document.createElement('h1');
const homeTitle2 = document.createElement('h3');
homeTitle.textContent = 'DS';
homeTitle2.textContent = 'RESTAURANT';
homeTitle.style = 'font: 188.24px/.8 RobotoThin; color: #ffe4b5';
homeTitle2.style = 'font: 23.53px RobotoLight; color: #ffe4b5'
nav.after(homeTitle);
homeTitle.after(homeTitle2);
let headerP = document.createElement('p');
headerP.textContent = "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed";
headerP.style = 'font: 16.67px RobotoRegular; color: #fefefd; width: 47%; margin: 35em auto 0;';
header.appendChild(headerP);

//-----------------------------SECTION-1----------------------------------------------
const section1 = document.createElement('section');
body.appendChild(section1);
section1.style = 'display: grid; grid-row-gap: 100px; align-content: center; justify-items: center; min-height: 885px; background: url(img/section1/back2.jpg) no-repeat center/cover; text-align: center';
const section1TextH2 = document.createElement('h2');
const section1TextP = document.createElement('p');
const section1TextH3 = document.createElement('h3');
section1TextH2.innerHTML = 'Special <b style="font-family: RobotoRegular">CHEF</b>';
section1TextP.textContent = 'This is Photoshops version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem';
section1TextH3.textContent = 'Delights';
section1.appendChild(section1TextH2);
section1.appendChild(section1TextP);
section1.appendChild(section1TextH3);
section1TextH2.style = 'font-family: RobotoLight; font-size: 77.1px; color: #ffe4b5; font-weight: normal';
section1TextP.style = 'font-family: RobotoRegular; font-size: 15.37px; color: #fff; font-weight: normal; width: 65%';
section1TextH3.style = 'font-family: RobotoLight; font-size: 59.44px; color: #ffe4b5; font-weight: normal';

//-----------------------------SECTION-2----------------------------------------------
const section2 = document.createElement('section');
body.appendChild(section2);
section2.style = 'display: grid; justify-items: center; align-content: space-between; min-height: 760px; background: url(img/section2/back.jpg) no-repeat center/cover';
const section2TextP = document.createElement('p');
section2TextP.textContent = 'This is Photoshops version of Lorem';
section2TextP.style = 'font-family: RobotoRegular; font-size: 25px; color: #fffdfd; font-weight: normal';
section2.appendChild(section2TextP);
const section2TextH2 = document.createElement('h2');
section2TextH2.textContent = 'MENU';
section2TextH2.style = 'font-family: RobotoMedium; font-size: 71.91px; color: #fcfafa';
section2.appendChild(section2TextH2);

//-----------------------------SECTION-3----------------------------------------------
const section3 = document.createElement('section');
body.appendChild(section3);
section3.style = 'display: grid; text-align: center; justify-items: center; align-items: start; align-content: start; min-height: 1880px; background: url(img/section3/back.png) no-repeat center/cover, #000';
const section3TextP1 = document.createElement('p');
section3TextP1.textContent = 'This is Photoshops version of';
section3TextP1.style = 'font-family: RobotoRegular; font-size: 24.9px; color: #fffdfd; font-weight: normal; margin: 80px 0';
section3.appendChild(section3TextP1);
const section3TextH2 = document.createElement('h2');
section3TextH2.textContent = 'STARTERS';
section3TextH2.style = 'font-family: RobotoRegular; font-size: 41.5px; color: #ffe4b5';
section3.appendChild(section3TextH2);
const section3Ul1 = document.createElement('ul');
section3Ul1.style = 'list-style: none; margin: 40px 0 90px; display: grid; gap: 25px';
section3.appendChild(section3Ul1);
for(let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    section3Ul1.appendChild(li);
    i == 0 ? li.innerHTML = "Food Name Here  (<span style='font-size: 19.37px'>This is Photoshop's version  of Lorem Ipsum).</span>   .................................  $18.90" : i == 1 ? li.innerHTML= "Food Name Here  (<span style='font-size: 19.37px'>This is Photoshop's version  of Lorem Ipsum).</span>   .................................  $18.90" : li.innerHTML = "Food Name Here  (<span style='font-size: 19.37px'>This is Photoshop's version  of Lorem Ipsum).</span>   .................................  $18.90";
    li.style = 'font-family: RobotoRegular; font-size: 27.67px; color: #fcfbf9;';
}
const cloneH2 = section3TextH2.cloneNode(true);
const cloneUl = section3Ul1.cloneNode(true);
cloneH2.textContent = 'SPECIALTIES';
section3.appendChild(cloneH2);
section3.appendChild(cloneUl);
const clone2H2 = section3TextH2.cloneNode(true);
const clone2Ul = section3Ul1.cloneNode(true);
clone2H2.textContent = 'DRINKS';
section3.appendChild(clone2H2);
section3.appendChild(clone2Ul);
const section3TextH3 = document.createElement('h3');
const cloneH3 = section3TextH3.cloneNode(true);
section3TextH3.textContent = '2 x 1';
section3TextH3.style = 'font-family: RobotoMedium; font-size: 94.1px; color: #ffe4b5; margin-top: 100px';
cloneH3.textContent = 'DISCOUNT';
cloneH3.style = 'font-family: RobotoMedium; font-size: 62.5px; color: #ffe4b5';
section3.appendChild(section3TextH3);
section3.appendChild(cloneH3);
const section3TextP2 = document.createElement('p');
section3TextP2.textContent = 'This is Photoshops version of Lorem Ipsum.';
section3TextP2.style = 'font-family: RobotoMedium; font-size: 24.45px; color: #fdfdfd; margin-top: 40px';
section3.appendChild(section3TextP2);

//-----------------------------SECTION-4----------------------------------------------
const section4 = document.createElement('section');
section4.style = 'display: grid; justify-items: center; align-content: start; min-height: 910px; background: url(img/section4/back.png) no-repeat center/cover, #000; line-height: 80px';
body.appendChild(section4);
const section4TextP = document.createElement('p');
section4TextP.textContent = 'This is Photoshops version of Lorem';
section4TextP.style = 'font-family: RobotoRegular; font-size: 16.67px; color: #fdfcfb';
section4.appendChild(section4TextP);
const section4TextH2 = document.createElement('h2');
section4TextH2.textContent = 'Special OFFER';
section4TextH2.style = 'font-family: RobotoRegular; font-size: 58.33px; color: #ffe4b5; font-weight: normal;';
section4.appendChild(section4TextH2);
const section4Text2H2 = document.createElement('h2');
section4Text2H2.textContent = 'Burgers';
section4Text2H2.style = 'font-family: RobotoRegular; font-size: 58.33px; color: #ffe4b5; font-weight: normal; padding-top: 9.5em;';
section4.appendChild(section4Text2H2);
const section4Text3H2 = document.createElement('h2');
section4Text3H2.style = 'font-family: RobotoMedium; font-size: 79.01px; color: #ffe4b5; font-weight: normal';
section4Text3H2.textContent = '25% Off';
section4.appendChild(section4Text3H2);

//-----------------------------SECTION-5----------------------------------------------
const section5 = document.createElement('section');
section5.style = 'display: grid; justify-items: center; align-content: space-around; min-height: 865px; background: url(img/section5/back.png) no-repeat center/cover, #000; text-align: center';
body.appendChild(section5);
const section5TextP = document.createElement('p');
section5TextP.textContent = 'This is Photoshops version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.';
section5TextP.style = 'font-family: RobotoRegular; font-size: 16.67px; color: #fffffe; width: 45%; margin-top: 85px';
section5.appendChild(section5TextP);
const section5TextH2 = document.createElement('h2');
section5TextH2.textContent = 'DELIVERY SERVICE';
section5TextH2.style = 'font-family: RobotoRegular; font-size: 45.27px; color: #fbfaf8; font-weight: normal;';
section5.appendChild(section5TextH2);
const section5TextPhone = document.createElement('h3');
section5TextPhone.textContent = '034 654 8526 541';
section5TextPhone.style = 'font-family: RobotoRegular; font-size: 58.33px; color: #ffe4b5; margin-top: -115px;';
section5.appendChild(section5TextPhone);
const section5Text2P = document.createElement('p');
section5Text2P.textContent = 'This is Photoshops version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.';
section5Text2P.style = 'font-family: RobotoRegular; font-size: 16.67px; color: #fffffe; width: 88%';
section5.appendChild(section5Text2P);

//-----------------------------SECTION-6----------------------------------------------
const section6 = document.createElement('section');
section6.style = 'position: relative; display: grid; justify-items: center; align-content: space-between; min-height: 855px; background: url(img/section6/back.png) no-repeat center/cover, #000; overflow: hidden;';
body.appendChild(section6);
const section6Up = document.createElement('div');
section6Up.style = 'height: 222px; width: 100%; background: url(img/section6/up.png) no-repeat center/cover, #000; position: absolute; top: 0; left: 0; text-align: center; transition: 1s';
section6.appendChild(section6Up);
const section6TextH2 = document.createElement('h2');
section6TextH2.textContent = '20%';
section6TextH2.style = 'font-family: RobotoMedium; font-size: 80.78px; color: #ffe4b5;';
section6Up.appendChild(section6TextH2);
const section6TextH3 = document.createElement('h3');
section6TextH3.textContent = 'DISCOUNT';
section6TextH3.style = 'font-family: RobotoRegular; font-size: 52.38px; color: #ffe4b5';
section6Up.appendChild(section6TextH3);
const section6Down = document.createElement('div');
section6Down.style = 'display: grid; align-items: center; justify-items: center; height: 222px; width: 100%; background: url(img/section6/down.png) no-repeat center/cover, #000; position: absolute; bottom: 0; left: 0; text-align: center; transition: 1s;';
section6.appendChild(section6Down);
const section6Textp = document.createElement('p');
section6Textp.textContent = 'This is Photoshops version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit';
section6Textp.style = 'font-family: RobotoRegular; font-size: 20.83px; color: #fefefe; width: 55%;';
section6Down.appendChild(section6Textp);
section6.onclick = () => {
    section6Up.classList.toggle('openUp');  
    section6Down.classList.toggle('openDown');
    const newSection6Up = document.querySelector('.openUp');
    const newSection6Down = document.querySelector('.openDown');
    if(newSection6Up) {
        newSection6Up.style.top = '-218px';
        newSection6Down.style.bottom = '-218px';
    } else {
        section6Up.style.top = '0px';
        section6Down.style.bottom = '0px';
    }
};

//----------------------------- Footer ----------------------------------------------
const footer = document.createElement('footer');
footer.style = 'display: grid; justify-content: center; text-align: center; align-content: space-between; min-height: 530px; background: url(img/footer/back.png) no-repeat center/cover';
body.appendChild(footer);
const footerH2 = document.createElement('h2');
footerH2.textContent = 'THANK YOU';
footerH2.style = 'font-family: RobotoRegular; font-size: 55.93px; color: #fefdfc';
footer.appendChild(footerH2);
const info = document.createElement('div');
info.style = 'display: flex; justify-content: center; flex-wrap: wrap';
footer.appendChild(info);
for(let i = 0; i < 4; i++) {
    const link = document.createElement('a');
    info.appendChild(link);
    const button = document.createElement('button');
    link.appendChild(button);
    i == 0 ? link.href = 'https://instagram.com' : i == 1 ? link.href = 'https://facebook.com' : i == 2 ? link.href = 'https://twitter.com' : link.href = 'https://whatsapp.com';
    link.style = 'width: 30px; height: 30px; margin: 0 5px';
    i == 0 ? button.style = 'width: 30px; height: 30px; background: url(img/footer/instagram.png) center/cover, #fff; border-radius: 50%; border: 0; outline: 0; cursor: pointer; transition: .3s' : i == 1 ? button.style = 'width: 30px; height: 30px; background: url(img/footer/facebook.png) center/cover, #fff; border-radius: 50%; border: 0; outline: 0; cursor: pointer; transition: .3s' : i == 2 ? button.style = 'width: 30px; height: 30px; background: url(img/footer/twitter.png) center/cover, #fff; border-radius: 50%; border: 0; outline: 0; cursor: pointer; transition: .3s' : button.style = 'width: 30px; height: 30px; background: url(img/footer/whatsapp.png) center/cover, #fff; border-radius: 50%; border: 0; outline: 0; cursor: pointer; transition: .5s';
    button.onmouseover = () => { button.style.transform = 'scale(1.1)'; button.style.filter = 'invert(1) sepia(1)'; }
    button.onmouseleave = () => { button.style.transform = 'scale(1)'; button.style.filter = 'none'; }
}
const footerLink = document.createElement('a');
footerLink.textContent = 'Your city address ● 034 568 5602 412 ● yourmail@email.com ● www.yoursite.com';
footerLink.style = 'font-family: RobotoRegular; font-size: 27.28px; color: #ffe4b5; text-decoration: none; width: 100%; margin: 35px 0';
footerLink.href = '#';
info.appendChild(footerLink);
const footerP = document.createElement('p');
footerP.textContent = 'This is Photoshops version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.';
footerP.style = 'font-family: RobotoRegular; font-size: 16.67px; color: #fefdfc; width: 100%; margin-bottom: 150px';
info.appendChild(footerP);


