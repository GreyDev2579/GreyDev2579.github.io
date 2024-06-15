const content = document.querySelectorAll(".title");

content.forEach(function (title){
    const btn = title.querySelector(".myBtn");
    console.log(btn);
    btn.addEventListener("click", function(){
        content.forEach(function (item){
            item.classList.toggle("none");
            console.log("hey")
        })
    })
 console.log(btn)
});
// Showcase text effect
const showcaseMainText = document.querySelector("#showcase-main-text");
let text = "Hello! My name is Grey I’m a web developer specializing in Front-end development.";
function typewriterFX(element,text,i=0){
    if(i === 0){
        let out = "";
    }
    element.textContent += text[i];
    if(i === text.length - 1){
        return;
    }
    setTimeout(()=>typewriterFX(element,text,i+1),50);
}
typewriterFX(showcaseMainText,text);