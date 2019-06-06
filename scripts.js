let colors = ['blue','red','orange','green','purple','yellow','indigo','black'];
     function changeColor(e){
        let randColor = colors[Math.floor(Math.random()*colors.length)];
        e.style.color = randColor;
    }; 

document.addEventListener('DOMContentLoaded', function() {
    let div1 = document.createElement('div');
    div1.className = "header-container";
    document.body.appendChild(div1);

    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode('This is an h1');
    h1.appendChild(h1Text);
    div1.appendChild(h1);
    h1.className = "h1"
    h1.addEventListener('dblclick', changeColor, h1);

    let h2 = document.createElement('h2');
    let h2text = document.createTextNode('This is an h2');
    h2.appendChild(h2text);
    div1.appendChild(h2);
    h2.className = "h2";

    let h3 = document.createElement('h3');
    let h3text = document.createTextNode('This is an h3');
    h3.appendChild(h3text);
    div1.appendChild(h3);
    h3.className = "h3";
   
    let h4 = document.createElement('h4');
    let h4text = document.createTextNode('This is an h4');
    h4.appendChild(h4text);
    div1.appendChild(h4);
    h4.className = "h4";

    let h5 = document.createElement('h5');
    let h5text = document.createTextNode('This is an h5');
    h5.appendChild(h5text);
    div1.appendChild(h5);
    h5.className = "h5";

    let h6 = document.createElement('h6');
    let h6text = document.createTextNode('This is an h6');
    h6.appendChild(h6text);
    div1.appendChild(h6);
    h6.className = "h6";

    
});

