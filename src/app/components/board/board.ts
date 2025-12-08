import { Component, input } from '@angular/core';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  templateUrl: './board.html',
  styleUrls: ['./board.css']
})
export class Board {
  sticksValue = input();
  whitePawns = input.required<number[]>();
  blackPawns = input.required<number[]>();
}
