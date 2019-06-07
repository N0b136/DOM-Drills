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
    h1.addEventListener('dblclick', function (){
        let randColor = colors[Math.floor(Math.random()*colors.length)];
        h1.style.color = randColor;
    });

    let h2 = document.createElement('h2');
    let h2text = document.createTextNode('This is an h2');
    h2.appendChild(h2text);
    div1.appendChild(h2);
    h2.className = "h2";
    h2.addEventListener('dblclick', function (){
        let randColor = colors[Math.floor(Math.random()*colors.length)];
        h2.style.color = randColor;
    });

    let h3 = document.createElement('h3');
    let h3text = document.createTextNode('This is an h3');
    h3.appendChild(h3text);
    div1.appendChild(h3);
    h3.className = "h3";
    h3.addEventListener('dblclick', function (){
        let randColor = colors[Math.floor(Math.random()*colors.length)];
        h3.style.color = randColor;
    });
   
    let h4 = document.createElement('h4');
    let h4text = document.createTextNode('This is an h4');
    h4.appendChild(h4text);
    div1.appendChild(h4);
    h4.className = "h4";
    h4.addEventListener('dblclick', function (){
        let randColor = colors[Math.floor(Math.random()*colors.length)];
        h4.style.color = randColor;
    });

    let h5 = document.createElement('h5');
    let h5text = document.createTextNode('This is an h5');
    h5.appendChild(h5text);
    div1.appendChild(h5);
    h5.className = "h5";
    h5.addEventListener('dblclick', function (){
        let randColor = colors[Math.floor(Math.random()*colors.length)];
        h5.style.color = randColor;
    });

    let h6 = document.createElement('h6');
    let h6text = document.createTextNode('This is an h6');
    h6.appendChild(h6text);
    div1.appendChild(h6);
    h6.className = "h6";
    h6.addEventListener('dblclick', function (){
        let randColor = colors[Math.floor(Math.random()*colors.length)];
        h6.style.color = randColor;
    });
   
    let i = 1;
    function createLi() {
        let li = document.createElement('li');
        let liText = document.createTextNode('This is list item '+ i);
        li.appendChild(liText);
        document.body.appendChild(li);
        if (i >= 1) { i++; }
        li.addEventListener('click', function(){
            let randColor = colors[Math.floor(Math.random()*colors.length)];
            li.style.color = randColor;
        });
        li.addEventListener('dblclick', function (){
            document.body.removeChild(li);
        });
        
    };

    let btn = document.getElementById('btn');
    btn.addEventListener('click', createLi, false);

    
    
});

