

document.getElementById("article1BtnID").addEventListener('click', function(){
    document.getElementById("mainArticleContainerID").style.display = "none";
    document.getElementById("container2ID").style.display = "none";
    document.getElementById("article1ID").style.display = "flex";
})

document.getElementById("returnBtn1ID").addEventListener('click', function(){
    document.getElementById("article1ID").style.display = "none";
    document.getElementById("mainArticleContainerID").style.display = "flex";
    document.getElementById("container2ID").style.display = "flex";
})

document.getElementById("exitIcon1ContainerID").addEventListener('mouseenter', function(){
    document.getElementById("returnBtn1ID").style.display = "flex";
    document.getElementById("returnBtn2ID").style.display = "none";

})

document.getElementById("exitIcon1ContainerID").addEventListener('mouseleave', function(){
    document.getElementById("returnBtn1ID").style.display = "none";
    document.getElementById("returnBtn2ID").style.display = "flex";

})

window.onscroll = function(){
    console.log(Math.floor((window.scrollY / document.body.scrollHeight) * 100));
}