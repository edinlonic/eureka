import { Component, Input } from '@angular/core';
declare var $:any;
@Component({
    selector: "ilvana",
    templateUrl: 'ilvana.component.html',
})
export class IlvanaComponent {


ngAfterViewInit(){
           $(document).ready(function(){
             $(".bio-link").click(function(){
             $(this).hide();
             });
           });
     }

}
