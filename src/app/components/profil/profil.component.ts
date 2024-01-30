import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfilService } from 'src/app/service/profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})

export class ProfilComponent {
  prof: any = {};
  adForm!:FormGroup;

  constructor(private profilService:ProfilService) { 
}
ngOnInit(){
  this.profilService.getProfil().subscribe((data)=>{this.prof= data;});

}

  

onSubmit() {
  this.profilService.updateProfil(this.prof).subscribe((data) => { console.log('Here profil : ',data); },
      (err) => { console.log('edit profil error : ',err); });
}

}
