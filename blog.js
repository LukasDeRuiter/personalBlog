

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