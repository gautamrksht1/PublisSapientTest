import { Medicine } from '../medicine.class';

export class MedicineDetailVM {
   medicine:Medicine;
   msg:string;
   constructor(){
       this.medicine = new Medicine();
   }     

}