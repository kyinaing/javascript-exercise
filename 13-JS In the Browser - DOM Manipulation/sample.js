const myImg = document.createElement('img');
myImg.src = 'https://images7.alphacoders.com/660/thumb-1920-660597.jpg';
myImg.style.width = '200px';
document.body.append(myImg);
myImg.style.transition = 'all 2s';

const sheet = new CSSStyleSheet();
sheet.replaceSync('* {transition: all 2s}');
document.adoptedStyleSheets = [sheet];


const allEls = document.body.children;

setInterval(() => {
    for(let el of allEls) {
        const rotation = Math.floor(Math.random() * 360);
        const x = Math.floor(document.body.clientWidth * Math.random())
        const y = Math.floor(document.body.clientHeight * Math.random())
    
        myImg.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
    }
    
}, 2000)









