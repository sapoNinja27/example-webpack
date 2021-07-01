import '../css/style.scss';
import img from '../assets/Desert.jpg';
const imgComponent=()=>{
    const elImg = new Image(300,150);
    elImg.src=img;
    return elImg;
}
const textComponent=()=>{
    const elH1 = document.createElement('h1');
    elH1.innerHTML= 'oasfjkaf'
    elH1.classList.add('title');
    return elH1;
}
document.body.appendChild(textComponent());
document.body.appendChild(imgComponent());