import { Medicine } from '../medicine.class';

export class MedicineAddVM {
    medicine:Medicine;
    msg:string;
    validationMessage:string;
    nameValidation=false;
    priceValidation=false;
    quantityValidation=false;
    brandValidation=false;
    expiryValidation=false;
    notesValidation=false;

    constructor(){
        this.medicine = new Medicine();
    }
}