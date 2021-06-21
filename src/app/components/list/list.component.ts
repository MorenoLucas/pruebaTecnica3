import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Players } from 'src/app/interfaces/players';
import { ApiServService } from 'src/app/services/api-serv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  listPlayers;

  constructor(private apiServ: ApiServService, private router: Router) {}

  ngOnInit(): void {
    this.apiServ.getPlayer().subscribe((player: any) => {
      this.listPlayers = player.data;
    });
  }

  goPlayer(id) {
    this.apiServ.setPlayerDetails(id);
    this.router.navigate(['details', id]);
  }
}
