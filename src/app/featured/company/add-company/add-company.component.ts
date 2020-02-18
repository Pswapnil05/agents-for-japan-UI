import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AgentService } from 'src/app/shared/services/agent.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  id: number;

  constructor(private formB : FormBuilder,private route: ActivatedRoute, private agencyService: AgentService, private router: Router) { }
  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    }

  //getter, it returns FormControl for name 
  get name(){
    return this.addCompanyForm.get('name');
  }

  addCompanyForm = this.formB.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    contact: [''],
    email: [''],
    currentAddress: this.formB.group({
      city: [''],
      state: [''],
      zipCode: ['']
    })
  });

  // addCompanyForm = new FormGroup({
  //   name : new FormControl('Titan'),
  //   contact : new FormControl(''),
  //   email : new FormControl(''),
  //   currentAddress : new FormGroup({
  //     city : new FormControl(''),
  //     state : new FormControl(''),
  //     zipCode : new FormControl('')
  //   })
  // });


/**
 * use patchValue to display required data and use setValue to display entire form data.
 */
  loadApiData() {
    this.addCompanyForm.patchValue({
      name : "Dakota",
      contact : "Dakota",
      email : "Dakota",

    });
  }

  onSubmit() {
    console.log(this.addCompanyForm.value);
    console.log(this.id);
    this.agencyService.addNewCompany(this.addCompanyForm.value,this.id)
      .subscribe(
        response => console.log('Success!', response),
        error => console.log('Error!', error)
      );
    this.router.navigate(['/agency']);  
  }
  

}
