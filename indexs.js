const yesbtn=document.querySelector("#yesbtn");

yesbtn.addEventListener("click" ,function () {
    alert("Sabia que ibas a decir que si uwu")
});

const notbtn=document.querySelector("#notbtn");

notbtn.addEventListener("mouseover", function(){
    const randomx=parseInt(Math.random()*100);
    const randomy=parseInt(Math.random()*100);
    notbtn.style.setProperty("top",randomy+"%");
    notbtn.style.setProperty("left",randomx+"%");
    notbtn.style.setProperty("transform",`translate(-${randomx}%,-${randomy}%)`);

    notbtn.addEventListener("click" ,function () {
        alert("Me has partido el kokoro T_T , pero grasias por ser el motivo de mi felicidad.")
    });
})