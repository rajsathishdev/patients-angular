import { Component, OnInit } from '@angular/core';
import { Patient } from '../Patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {
  displayedColumns: string[] = ['id','name','address','country', 'status'];
  data: Patient[] = [];
  isLoadingResults = true;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getPatients()
      .subscribe((res: any) => {
        this.data  = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err =>
      {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
