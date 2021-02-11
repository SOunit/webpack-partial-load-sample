import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import './styles/image_viewer.css';

const image = document.createElement('img');
// image.src = 'https://picsum.photos/200/300';
image.src = small;

document.body.appendChild(image);

const bigImage = document.createElement('img');
// bigImage.src = 'https://picsum.photos/200/300';
bigImage.src = big;

document.body.appendChild(bigImage);
