import { Component, OnInit } from '@angular/core';
import { Players } from 'src/app/interfaces/players';
import { ApiServService } from 'src/app/services/api-serv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  listPlayers;
  play;
  constructor(private apiServ: ApiServService) {}

  ngOnInit(): void {
    this.apiServ.getPlayer().subscribe((player) => {
      this.listPlayers = player;
      this.play = this.listPlayers.data;
    });
  }
}
