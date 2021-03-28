import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicine } from '../Models/medicine.class';
import { Result } from '../Models/response.class';

@Injectable()
export class MedicineService {
  private baseUrl='http://localhost:49395/';
  constructor(private http:HttpClient) { }

  getAllMedicines(){
    return this.http.get<Array<Medicine>>(this.baseUrl + 'api/Medicine');
  }
  
  updateMedicine(id:number,medicine:Medicine){
    return this.http.put<Result>(this.baseUrl + 'api/Medicine?id='+id,medicine);
  }
  addMedicine(medicine:Medicine){
    return this.http.post<Result>(this.baseUrl + 'api/Medicine',medicine);
  }
}
