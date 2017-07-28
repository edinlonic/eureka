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
    margin: 0px;
    padding:0px;
    position:relative;
    width:2000%; /* Number of panes * 100% */
    overflow:hidden; /* Clear floats */
        /* Slide effect Animations*/
    -moz-animation:carousel 240s infinite;
    -webkit-animation:carousel 240s infinite;
    animation:carousel 240s infinite;
}
.slides > li{
    position:relative;
    float:left;
    width: 5%; /* 100 / number of panes */
}
.carousel img{
    display:block;
    width:100%;
    max-width:100%;
}
 
@keyframes carousel{
    0%      { left: 0%; }
    2.5%    { left: 0%; }
    5%      { left:-100%; }
    7.5%   { left:-200%; }
    10%     { left:-300%; }
    12.5%   { left:-400%; }
    15%     { left:-500%; }
    17.5%   { left:-600%; }
    20%     { left:-700%; }
    22.5%   { left:-800%; }
    25%     { left:-900%; }
    27.5%   { left:-1000%; }
    30%     { left:-1100%; }
    32.5%   { left:-1200%; }
    35%     { left:-1300%; }
    37.5%   { left:-1400%; }
    40%     { left:-1500%; }
    42.5%   { left:-1600%; }
    45%     { left:-1700%; }
    47.5%   { left:-1800%; }
    50%     { left:-1900%; }
    52.5%   { left:-1900%; }
    55%      { left: -1800%; }
    57.5%    { left: -1700%; }
    60%      { left:-1600%; }
    62.5%   { left:-1500%; }
    65%     { left:-1400%; }
    67.5%   { left:-1300%; }
    70%     { left:-1200%; }
    72.5%   { left:-1100%; }
    75%     { left:-1000%; }
    77.5%   { left:-900%; }
    80%     { left:-800%; }
    82.5%   { left:-700%; }
    85%     { left:-600%; }
    87.5%   { left:-500%; }
    90%     { left:-400%; }
    92.5%   { left:-300%; }
    95%     { left:-200%; }
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
    { "title": "slider11", "url": "./assets/carousel-images/slide11.jpg" },
    { "title": "slider12", "url": "./assets/carousel-images/slide12.jpg" },
    { "title": "slider13", "url": "./assets/carousel-images/slide13.jpg" },
    { "title": "slider14", "url": "./assets/carousel-images/slide14.jpg" },
    { "title": "slider15", "url": "./assets/carousel-images/slide15.jpg" },
    { "title": "slider16", "url": "./assets/carousel-images/slide16.png" },
    { "title": "slider17", "url": "./assets/carousel-images/slide17.jpg" },
    { "title": "slider18", "url": "./assets/carousel-images/slide18.jpg" },
    { "title": "slider19", "url": "./assets/carousel-images/slide19.jpg" },
    { "title": "slider20", "url": "./assets/carousel-images/slide20.jpg" },
    
   
];