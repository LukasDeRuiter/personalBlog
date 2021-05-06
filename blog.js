

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
    let image1Text = document.getElementById("imgDescription1ID");
    let image2 = document.getElementById("image2ID");
    let image2Text = document.getElementById("imgDescription2ID");
    console.log(`yes ${userScrollLocation}`);
    console.log(scrollPercentage);

    if(scrollPercentage < 20 && userScrollLocation != 1){
        image1.style.animation = "disappear 0.5s 1";
        image1Text.style.animation = "disappear 0.5s 1";
        image1.onanimationend = function(){
            image1.src = "article1Img1.png";
            image1.style.animation = "appear 0.5s 1";
            image1Text.style.animation = "appear 0.5s 1";
        }
        userScrollLocation = 1;
    }
    else if(scrollPercentage >= 20 && scrollPercentage < 30 && userScrollLocation != 2){
        image1.style.animation = "disappear 0.5s 1";
        image1Text.style.animation = "disappear 0.5s 1";
        image1.onanimationend = function(){
            image1.src = "article1Percentage20.jpg";
            image1Text.innerHTML = "the Age of Fire";
            image1.style.animation = "appear 0.5s 1";
            image1Text.style.animation = "appear 0.5s 1";
        }
        userScrollLocation = 2;
    }
    else if(scrollPercentage >= 30 && scrollPercentage < 40 && userScrollLocation != 3){
        image2.style.animation = "disappear 0.5s 1";
        image2Text.style.animation = "disappear 0.5s 1";
        image2.onanimationend = function(){
            image2.src = "article1Percentage30.jpg";
            image2Text.innerHTML = "Unknown player linking the First Flame";
            image2.style.animation = "appear 0.5s 1";
            image2Text.style.animation = "appear 0.5s 1";
        }
        userScrollLocation = 3;
    }
    else if(scrollPercentage >= 40 && scrollPercentage < 50  && userScrollLocation != 4){
        image1.style.animation = "disappear 0.5s 1";
        image1Text.style.animation = "disappear 0.5s 1";
        image1.onanimationend = function(){
            image1.src = "article1Percentage40.jpg";
            image1Text.innerHTML = "Undead Prince Ricard";
            image1.style.animation = "appear 0.5s 1";
            image1Text.style.animation = "appear 0.5s 1";
        }
        userScrollLocation = 4;
    }
    else if(scrollPercentage >= 50 && scrollPercentage < 60 && userScrollLocation != 5){
        image2.style.animation = "disappear 0.5s 1";
        image2Text.style.animation = "disappear 0.5s 1";
        image2.onanimationend = function(){
            image2.src = "article1Percentage50.jpg";
            image2Text.innerHTML = "Sen's Fortress";
            image2.style.animation = "appear 0.5s 1";
            image2Text.style.animation = "appear 0.5s 1";
        }
        userScrollLocation = 5;
    }
    else if(scrollPercentage >= 60 && scrollPercentage < 70 && userScrollLocation != 6){
        image1.style.animation = "disappear 0.5s 1";
        image1Text.style.animation = "disappear 0.5s 1";
        image1.onanimationend = function(){
            image1.src = "article1Percentage60.jpg";
            image1Text.innerHTML = "The remains of Iron Tarkus";
            image1.style.animation = "appear 0.5s 1";
            image1Text.style.animation = "appear 0.5s 1";
        }
        userScrollLocation = 6;
    }
    else if(scrollPercentage >= 70 && scrollPercentage < 80 && userScrollLocation != 7){
        image2.style.animation = "disappear 0.5s 1";
        image2Text.style.animation = "disappear 0.5s 1";
        image2.onanimationend = function(){
            image2.src = "article1Percentage70.jpg";
            image2Text.innerHTML = "The Duke's Archives";
            image2.style.animation = "appear 0.5s 1";
            image2Text.style.animation = "appear 0.5s 1";
        }
        userScrollLocation = 7;
    }
    else if(scrollPercentage >= 80 && scrollPercentage < 90 && userScrollLocation != 8){
        image1.style.animation = "disappear 0.5s 1";
        image1Text.style.animation = "disappear 0.5s 1";
        image1.onanimationend = function(){
            image1.src = "article1Percentage80.jpg";
            image1Text.innerHTML = "Pisaca's leaving their cell";
            image1.style.animation = "appear 0.5s 1";
            image1Text.style.animation = "appear 0.5s 1";
        }
        userScrollLocation = 8;
    }
    else if(scrollPercentage >= 90 && userScrollLocation != 9){
        image2.style.animation = "disappear 0.5s 1";
        image2Text.style.animation = "disappear 0.5s 1";
        image2.onanimationend = function(){
            image2.src = "article1Percentage90.jpg";
            image2Text.innerHTML = "Darkstalker Kaathe in the Abyss";
            image2.style.animation = "appear 0.5s 1";
            image2Text.style.animation = "appear 0.5s 1";
        }
        userScrollLocation = 9;
    }
}