import { Component/*, ViewEncapsulation*/ } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  //styles: ['.msg {color: red;}'],
  //encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

	//msg: string;
	
	allowNumericDigitsOnlyOnKeyUp(e) {		
		/*const charCode = e.which ? e.which : e.keyCode;
		
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			this.msg = '<span class="msg">OOPs! Only numeric values or digits allowed</span>';
		}*/
		
		//console.log(e.target.value);
		
		if(/\D/g.test(e.target.value)) {
			e.target.value = e.target.value.replace(/\D/g,'');
		}
	}
	
}
