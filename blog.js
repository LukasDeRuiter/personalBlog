

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


let userScrollLocation = 1;

window.onscroll = function(){
    let scrollPercentage = Math.floor((window.scrollY / document.body.scrollHeight) * 100);
    let image1 = document.getElementById("image1ID");
    let image2 = document.getElementById("image2ID");
    console.log(`yes ${userScrollLocation}`);
    console.log(scrollPercentage);
    if(scrollPercentage < 20 && userScrollLocation != 1){
        image1.style.animation = "disappear 0.5s 1";
        image1.onanimationend = function(){
            image1.src = "article1Img1.png";
            image1.style.animation = "appear 0.5s 1";
        }
        userScrollLocation = 1;
    }
    else if(scrollPercentage >= 20 && userScrollLocation != 2){
        image1.style.animation = "disappear 0.5s 1";
        image1.onanimationend = function(){
            image1.src = "article1Img2.png";
            image1.style.animation = "appear 0.5s 1";
        }
        userScrollLocation = 2;
    
    }
}