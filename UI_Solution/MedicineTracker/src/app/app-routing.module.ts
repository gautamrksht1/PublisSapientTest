import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicineListComponent } from './medicine-list/medicine-list/medicine-list.component';
import { MedicineDetailComponent } from './medicine-detail/medicine-detail.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';


const routes: Routes = [ { path: 'medicineList', component: MedicineListComponent },
{ path: 'medicineDetail', component: MedicineDetailComponent},
{path: 'addMedicine', component:AddMedicineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
