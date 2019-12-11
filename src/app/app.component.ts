import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fdata: any;
  submitted = false;
  fname1: any
  lname1: any
  storage: any;
  status: boolean = false;
  status1: boolean = false;
  i: number;
  constructor(private s: DataService, private fb: FormBuilder) { }
  form = this.fb.group({
    id: [],
    fname: ['', Validators.required],
    lname: ['', Validators.required]
  })
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.s.ge().subscribe(res => this.fdata = res);
    this.status = false;
  
  }
  get f() { return this.form.controls; }
  onSubmit() {
    this.submitted = true;
    this.status1 = false;
    this.fname1 = this.form.controls['fname'].value;
    this.lname1 = this.form.controls['lname'].value;

    this.storage = this.fname1.charAt(0) + this.lname1.charAt(0);
    for (this.i = 0; this.i <= 4; this.i++) {
      if (this.fdata[this.i].fname == this.fname1 && this.fdata[this.i].lname == this.lname1) {
        this.status = true;
      }
    }
    if(this.status==false)
    {
    
      this.status1=true;
    }


    if (this.form.invalid) {
      return;
    }
    alert('Login successful');
    //this.form.reset();
    //this.submitted = false;
  }
}

