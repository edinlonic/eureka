//Import Component form the angular core package
import {Component} from '@angular/core';
import {Image} from './image.interface';
//Importt the Image interface
 
//Compoent Decorator
@Component({
  //Name of our tag
  selector: 'css-carousel',
  //Template for the tag
  template: `

 <div class="carousel" style="max-height: 400px; max-width: 750px; display:block; margin:auto">
  <ul class="slides" style="heigth:200px">
    <li *ngFor="let image of images">
      <img src="{{image.url}}" alt="">
    </li>
  </ul>
</div>
  `,
  //Styles for the tag
  styles: [`
.carousel{
    overflow:hidden;
    width:100%;
}
.slides{
    list-style:none;
    position:relative;
    width:1000%; /* Number of panes * 100% */
    overflow:hidden; /* Clear floats */
        /* Slide effect Animations*/
    -moz-animation:carousel 30s infinite;
    -webkit-animation:carousel 30s infinite;
    animation:carousel 30s infinite;
}
.slides > li{
    position:relative;
    float:left;
    width: 10%; /* 100 / number of panes */
}
.carousel img{
    display:block;
    width:100%;
    max-width:100%;
}
 
@keyframes carousel{
    0%    { left: 0%; }
    11%   { left: 0%; }
    12.5% { left:-100%; }
    23.5% { left:-100%; }
    25%   { left:-200%; }
    36%   { left:-200%; }
    37.5% { left:-300%; }
    48.5% { left:-300%; }
    50%   { left:-400%; }
    61%   { left:-400%; }
    62.5% { left:-300%; }
    73.5% { left:-300%; }
    75%   { left:-200%; }
    86%   { left:-200%; }
    87.5% { left:-100%; }
    98.5% { left:-100%; }
    100%  { left: 0%; }
}
  `],
})
//Carousel Component itself
export class CSSCarouselComponent {
    //images data to be bound to the template
    public images = IMAGES;
}
 
//IMAGES array implementing Image interface
var IMAGES: Image[] = [
    { "title": "slider1", "url": "./assets/carousel-images/slide1.jpg" },
    { "title": "slider2", "url": "./assets/carousel-images/slide2.jpg" },
    { "title": "slider3", "url": "./assets/carousel-images/slide3.jpg" },
    { "title": "slider4", "url": "./assets/carousel-images/slide4.jpg" },
    { "title": "slider5", "url": "./assets/carousel-images/slide5.jpg" },
    { "title": "slider6", "url": "./assets/carousel-images/slide6.jpg" },
    { "title": "slider7", "url": "./assets/carousel-images/slide7.jpg" },
    { "title": "slider8", "url": "./assets/carousel-images/slide8.jpg" },
    { "title": "slider9", "url": "./assets/carousel-images/slide9.jpg" },
    { "title": "slider10", "url": "./assets/carousel-images/slide10.jpg" },
   
];