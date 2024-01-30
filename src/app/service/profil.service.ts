import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  profilurl:string="https://webserver.staging.4indata.fr/api/users/testwalidparent/"
  constructor(private httpClient:HttpClient) { }
  getProfil(){
    return this.httpClient.get(this.profilurl);
  }
  updateProfil(newProfil:any){
    return this.httpClient.put(`${this.profilurl}`,newProfil)
  }
}
