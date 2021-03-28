import { Component, OnInit } from '@angular/core';
import { MedicineAddVM } from '../Models/ViewModels/medicine-add.vm.class';
import { Router } from '@angular/router';
import { MedicineService } from '../services/medicine-service.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css'],
  providers: [MedicineService]
})
export class AddMedicineComponent implements OnInit {
  viewModel = new MedicineAddVM();
  constructor(private router: Router, private medicineSvc: MedicineService) { }
  ngOnInit(): void {
  }
  backToMedicineList() {
    this.router.navigateByUrl('/medicineList');
  }
  addMedicine() {
    if (this.validatedRequiredFields() === false){
      return;
    }
      if (this.validateExpiryDate(new Date(this.viewModel.medicine.expiryDate)) === -1) {
        this.viewModel.validationMessage = 'Validation Failed: Expiry is less than 15 days you cannot proceed';       
        return;
      }
    if (this.validateExpiryDate(new Date(this.viewModel.medicine.expiryDate)) === -2) {
      this.viewModel.validationMessage = 'Warning: Expiry is less than 30 days';
      setTimeout(() => {
        this.viewModel.validationMessage = '';
      }, 2000);
    }
    this.medicineSvc.addMedicine(this.viewModel.medicine).subscribe(() => {
      this.viewModel.msg = 'Record  Added Successfully';
      setTimeout(() => {
        this.viewModel.msg = '';
        this.router.navigateByUrl('/medicineList');
      }, 3000);
    },
      () => {
        this.viewModel.msg = 'Server Error';
      }
    );
  }
  validatedRequiredFields() {
    let result = true;
    if (!this.viewModel.medicine.brand || this.viewModel.medicine.brand.length < 0) {
      this.viewModel.brandValidation = true;
      result = false;
    } else {
      this.viewModel.brandValidation = false;
    }
    if (!this.viewModel.medicine.name || this.viewModel.medicine.name.length < 0) {
      this.viewModel.nameValidation = true;
      result = false;
    }else {
      this.viewModel.nameValidation = false;
    }
    if (!this.viewModel.medicine.price || this.viewModel.medicine.price <= 0) {
      this.viewModel.priceValidation = true;
      result = false;
    }else {
      this.viewModel.priceValidation = false;
    }
    if (!this.viewModel.medicine.quantity || this.viewModel.medicine.quantity <=0) {
      this.viewModel.quantityValidation = true;
      result = false;
    }else {
      this.viewModel.quantityValidation = false;
    }
    if (!this.viewModel.medicine.expiryDate) {
      this.viewModel.expiryValidation = true;
      result = false;
    }else {
      this.viewModel.expiryValidation = false;
    }
    if (!this.viewModel.medicine.notes || this.viewModel.medicine.notes.length < 0) {
      this.viewModel.notesValidation = true;
      result = false;
    }else {
      this.viewModel.notesValidation = false;
    }
    return result;
  }
  validateExpiryDate(date: Date): number {
    const currentDate = new Date();
    let result;
    const diffDays = Math.floor((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())) / (1000 * 60 * 60 * 24));

    if (diffDays < 15) {
      result = -1;
    } else if (diffDays < 30) {
      result = -2;
    }
    return result;
  }
}
