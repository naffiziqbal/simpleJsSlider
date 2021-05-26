var img = ["img/img (1).jpg","img/img (2).jpg","img/img (3).jpg","img/img (4).jpg","img/img (5).jpg","img/img (6).jpg","img/img (7).jpg","img/img (8).jpg","img/img (9).jpg","img/img (10).jpg","img/img (11).jpg","img/img (12).jpg"]
var imgTag = document.querySelector("img")

var count = 0
function next(){
    count++
    if(count >= img.length){
        count = 0
        imgTag.src = img[count]
    }
    else{
        imgTag.src = img[count]
    }
   
    


}
function prev(){
    count--
    if(count < 0 ){
        count = img.length - 1
        imgTag.src = img[count]
    }
    else{
        imgTag.src = img[count]
    }


}
