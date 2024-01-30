import { Component, OnInit } from '@angular/core';
import { ChildService } from 'src/app/service/enfant.service';

@Component({
  selector: 'app-enfants',
  templateUrl: './enfants.component.html',
  styleUrls: ['./enfants.component.css']
})

export class EnfantsComponent implements OnInit{
  childData: any;
  constructor(
    private childService:ChildService
    ){}
  ngOnInit(){
    this.getChildData();
      }

      getChildDataFromApi(): void {
        this.childService.getChild().subscribe(
          (data: any) => {
            this.childData = data; 
          }
        );
      }

      getChildData(): void {
        this.childData = [
          {
            imageUrl: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png',
            first_name: 'John',
            last_name: 'Doe',
            birthday: '2005-01-01',
            gender: 'M'
          },
          {
            imageUrl: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png',
            first_name: 'Jane',
            last_name: 'Doe',
            birthday: '2008-06-15',
            gender: 'F'
          },
        ];
      }

  reseauxSociaux: any[] = [
    {
      name: "Facebook",
      identifier: "facebook",
      icon: "https://img.freepik.com/vecteurs-premium/logo-medias-sociaux-bleu_197792-1759.jpg",
      iconn:"https://www.icone-png.com/png/22/21565.png",
      adr:"@jerrysmith20"

    },
    {
      name: "Twitter",
      identifier: "twitter",
      icon: "https://cdn-icons-png.flaticon.com/512/124/124021.png",
      iconn:"https://www.icone-png.com/png/22/21565.png",
      adr:"@jerrysmith20"

    },
    {
      name: "Instagram",
      identifier: "instagram",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
      iconn:"https://www.icone-png.com/png/22/21565.png",
      adr:"@jerrysmith20"
    }
  ];
  
}

