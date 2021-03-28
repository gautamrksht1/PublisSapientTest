import { Component, OnInit } from '@angular/core';
import { MedicineListVM } from 'src/app/Models/ViewModels/medicine-list-vm.class';
import { Router } from '@angular/router';
import { MedicineDisplay } from 'src/app/Models/ViewModels/medicine-display.class';
import { MedicineService } from 'src/app/services/medicine-service.service';
import { Medicine } from 'src/app/Models/medicine.class';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css'],
  providers:[MedicineService]
})
export class MedicineListComponent implements OnInit {
  viewModel = new MedicineListVM()
  constructor(private router:Router,private medicineService:MedicineService) { }

  ngOnInit(): void {   
    let apiResult:Array<Medicine>;
    this.medicineService.getAllMedicines().subscribe((x:Medicine[])=>{
     apiResult = x;
     for(let i =0;i<apiResult.length;i++){      
      let medicine = new MedicineDisplay();
      medicine.id = apiResult[i].id;
      medicine.name = apiResult[i].name;
      medicine.brand = apiResult[i].brand;
      medicine.price = apiResult[i].price;
      medicine.quantity = apiResult[i].quantity;
      medicine.expiryDate =new Date(apiResult[i].expiryDate);
      medicine.notes = apiResult[i].notes;
      medicine.isLessAvailable = medicine.quantity < 10 ? true:false;
      medicine.hasLessExpiryTime = this.checkForLowExpiryTime(medicine.expiryDate);
      this.viewModel.medicineList.push(medicine);
    }   
    this.viewModel.displayMedicineList = this.viewModel.medicineList;
    }); 

  }
 checkForLowExpiryTime(date:Date): boolean {
  const currentDate = new Date();  
  
  const diffDays= Math.floor((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) ) /(1000 * 60 * 60 * 24));
  const result = diffDays < 30 ? true:false ;
  return result;
 }
 viewDetail(medicine:MedicineDisplay){
  this.router.navigateByUrl('/medicineDetail', { state: medicine });
 }
 navigateToAddMedicine(){
  this.router.navigateByUrl('/addMedicine'); 
 }
 onSearch(arg){
   const value = arg;
   this.viewModel.displayMedicineList = this.viewModel.medicineList.filter(e=>e.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())=== true);

 }
 

}
