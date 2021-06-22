import { Component, OnInit } from '@angular/core';
import { Players } from 'src/app/interfaces/players';
import { ApiServService } from 'src/app/services/api-serv.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  details;
  constructor(private apiServ: ApiServService) {
    this.details = {
      id: 0,
      first_name: '',
      last_name: '',
      position: '',
      height_feet: 0,
      height_inches: 0,
      weight_pounds: 0,
      team: {
        id: 0,
        abbreviation: '',
        city: '',
        conference: '',
        division: '',
        full_name: '',
        name: '',
      },
    };
    this.apiServ.getPlayerDetails().subscribe((data: any) => {
      this.details = data;
      console.log(this.details);
    });
  }

  ngOnInit(): void {}
}
