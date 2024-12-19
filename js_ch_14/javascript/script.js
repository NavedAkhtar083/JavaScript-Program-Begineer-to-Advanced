let allinput =document.querySelector("input");
let button =document.querySelector("button");
let image =document.querySelector("img");
let videos=document.querySelector("video");


button.onclick = (e) => {
    e.preventDefault();
    let letter = allinput.value.toLocaleLowerCase();
    if (letter ==='a')
        {
            image.src="assets/images/apple.jpg";
            videos.src="assets/video/Apple.mp4";
        }
    else if(letter ==='b')
        {
            image.src="assets/images/baby.jpg";
            videos.src="assets/video/baby.mp4";
        }
    else if(letter ==='c')
        {
            image.src="assets/images/candy.jpeg";
            videos.src="assets/video/candy.mp4";
        }
    else if(letter ==='d')
        {
            image.src="assets/images/dog.jpg";
            videos.src="assets/video/diamond.mp4";
        }
    else if(letter ==='e')
        {
            image.src="assets/images/elephant.jpg";
            videos.src="assets/video/elephant.mp4";
        }
    else if(letter ==='f')
        {
            image.src="assets/images/fairy.jpg";
            videos.src="assets/video/fairy.mp4";
        }
    else if(letter ==='g')
        {
            image.src="assets/images/glasses.jpeg";
            videos.src="assets/video/glasses.mp4";
        }
    else if(letter ==='h')
        {
            image.src="assets/images/hen.jpeg";
            videos.src="assets/video/hen.mp4";
        }
    else if(letter ==='i')
        {
            image.src="assets/images/igloo.jpeg";
            videos.src="assets/video/igloo.mp4";
        }
    else if(letter ==='j')
        {
            image.src="assets/images/jelly.jpeg";
            videos.src="assets/video/jelly.mp4";
        }
    else if(letter ==='k')
        {
            image.src="assets/images/keyboard.jpeg";
            videos.src="assets/video/keyboard.mp4";
        }
    else if(letter ==='l')
        {
            image.src="assets/images/ladybug.jpeg";
            videos.src="assets/video/ladybug.mp4";
        }
    else if(letter ==='m')
        {
            image.src="assets/images/monkey.jpeg";
            videos.src="assets/video/monkey.mp4";
        }
    else if(letter ==='n')
        {
            image.src="assets/images/needle.jpg";
            videos.src="assets/video/needle.mp4";
        }
    else if(letter ==='o')
        {
            image.src="assets/images/orange.jpg";
            videos.src="assets/video/orange.mp4";
        }
    else if(letter ==='p')
        {
            image.src="assets/images/pony.webp";
            videos.src="assets/video/pony.mp4";
        }
    else if(letter ==='q')
        {
            image.src="assets/images/queen.jpg";
            videos.src="assets/video/queen.mp4";
        }
    else if(letter ==='r')
        {
            image.src="assets/images/rainbow.jpg";
            videos.src="assets/video/rainbow.mp4";
        }
    else if(letter ==='s')
        {
            image.src="assets/images/spider.jpg";
            videos.src="assets/video/spider.mp4";
        }
    else if(letter ==='t')
        {
            image.src="assets/images/tiger.webp";
            videos.src="assets/video/tiger.mp4";
        }
    else if(letter ==='u')
        {
            image.src="assets/images/umbrella.jpg";
            videos.src="assets/video/umbrella.mp4";
        }
    else if(letter ==='v')
        {
            image.src="assets/images/violen.jpg";
            videos.src="assets/video/violen.mp4";
        }
    else if(letter ==='w')
        {
            image.src="assets/images/wale.jpg";
            videos.src="assets/video/wale.mp4";
        }
    else if(letter ==='x')
        {
            image.src="assets/images/xylophone.jpg";
            videos.src="assets/video/xylophone.mp4";
        }
    else if(letter ==='y')
        {
            image.src="assets/images/yoyo.jpg";
            videos.src="assets/video/yoyo.mp4";
        }
    else if(letter ==='z')
        {
            image.src="assets/images/zebra.jpg";
            videos.src="assets/video/zebra.mp4";
        }
    
   

}