import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private abc:ActivatedRoute,private def:Router) { }

  ngOnInit(): void {
  }

  intro(){
	  this.def.navigate(['singlesearch'],{relativeTo:this.abc})
  }


}
