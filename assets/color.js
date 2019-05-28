var colors= getcolor(6);
var corrcolor=colors[Math.floor(Math.random() * 6)];
var easy=document.getElementById("easy");
var hard=document.getElementById("hard");
var rgb=document.getElementById("rgb");
var square=document.getElementsByClassName("square");
var hq=document.querySelector("h1");
var tex=document.getElementById("te");
var bu=document.getElementById("bu");
var p=6;
easy.addEventListener("click",function(){
    p=3;
    easy.classList.add("cul");
    hard.classList.remove("cul");
    colors=getcolor(3);
    corrcolor=colors[Math.floor(Math.random() * 3)];
    rgb.textContent=corrcolor;
	tex.textContent="";
    for(var i=0;i<6;i++)
{if(colors[i])
    {square[i].style.background=colors[i];}
    else{
        square[i].style.display="none";
    }
}
});
hard.addEventListener("click",function(){
    this.classList.add("cul");
    easy.classList.remove("cul");
    p=6;
    colors=getcolor(6);
	tex.textContent="";
    corrcolor=colors[Math.floor(Math.random() * 6)];
    rgb.textContent=corrcolor;
    for(var i=0;i<6;i++)
{if(colors[i])
    {square[i].style.background=colors[i];
    square[i].style.display="block";}
}});


for(var i=0;i<p;i++)
{
    console.log(colors[i]);
}


// console.log(corrcolor);

rgb.textContent=corrcolor;

for(var i=0;i<p;i++)
{
    square[i].style.background=colors[i];
}


bu.addEventListener("click",function(){
    colors=getcolor(p);
    corrcolor=colors[Math.floor(Math.random() * p)];
    rgb.textContent=corrcolor;
    for(var i=0;i<p;i++)
    {
    square[i].style.background=colors[i];
    }
    bu.textContent="New Colors";
    hq.style.background="#3e72c4";
    tex.textContent="";
});



for(var i=0;i<p;i++)
{
    square[i].addEventListener("click",function(){
        var clickedcolor= this.style.background;
        if(clickedcolor===corrcolor)
        {
            for(var j=0;j<p;j++)
            {
                square[j].style.background=clickedcolor;
            }
            tex.textContent="Correct!";
            bu.textContent="Play Again?";
            hq.style.background=clickedcolor;
        }
        else{
            this.style.background="#232323";
            tex.textContent="Try Again!"
        }
    })
}





function getcolor(num)
{
    var arr=[];
    for(var i=0; i<num;i++)
    {
        var p=gencolor();
        arr.push(p);
    }
    return arr;
}

function gencolor()
{
    var r= Math.floor(Math.random() * 256);
    var g= Math.floor(Math.random() * 256);
    var b= Math.floor(Math.random() * 256);
    var p="rgb("+r+", "+g+", "+b+")"
    return p;
}