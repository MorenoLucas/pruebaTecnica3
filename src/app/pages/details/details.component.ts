import { Component, OnInit } from '@angular/core';
import { Players } from 'src/app/interfaces/players';
import { ApiServService } from 'src/app/services/api-serv.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  details: Players;
  constructor(private apiServ: ApiServService) {
    this.apiServ.getPlayerDetails().subscribe((data: any) => {
      this.details = data;
    });
  }

  ngOnInit(): void {}
}
