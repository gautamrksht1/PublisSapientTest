import { Component, OnInit } from '@angular/core';
import { MedicineDetailVM } from '../Models/ViewModels/medicine-detail-vm.class';
import { Router } from '@angular/router';
import { MedicineService } from '../services/medicine-service.service';
import { Result } from '../Models/response.class';

@Component({
  selector: 'app-medicine-detail',
  templateUrl: './medicine-detail.component.html',
  styleUrls: ['./medicine-detail.component.css'],
  providers:[MedicineService]
})
export class MedicineDetailComponent implements OnInit {
viewModel = new MedicineDetailVM();
  constructor(private router:Router,private medicineSvc:MedicineService) { 

  }

  ngOnInit(): void {
   const medicineDisplay = history.state;
   this.viewModel.medicine.id = medicineDisplay.id;
   this.viewModel.medicine.brand = medicineDisplay.brand;
   this.viewModel.medicine.name = medicineDisplay.name;
   this.viewModel.medicine.price = medicineDisplay.price;
   this.viewModel.medicine.quantity = medicineDisplay.quantity;
   this.viewModel.medicine.expiryDate = medicineDisplay.expiryDate;
   this.viewModel.medicine.notes = medicineDisplay.notes;
console.log('medicineDisplay',medicineDisplay);
  }
  backToMedicineList() {
    this.router.navigateByUrl('/medicineList');
  }
  updateNote(){
    this.medicineSvc.updateMedicine(this.viewModel.medicine.id,this.viewModel.medicine).subscribe(()=>{     
        this.viewModel.msg='Record  Saved Successfully';
        setTimeout(()=>{
          this.viewModel.msg='';
          this.router.navigateByUrl('/medicineList');
        },3000);      
    },
    ()=>{
      this.viewModel.msg='Server Error';
    }
    );
  }
}
