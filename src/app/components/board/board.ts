import { Component, inject, input } from '@angular/core';
import { ApiService } from '../../services/api-service';


@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  templateUrl: './board.html',
  styleUrls: ['./board.css']
})
export class Board {
  userid = input.required<string>();
  isPlayerTurn = input();
  sticksValue = input();
  whitePawns = input.required<number[]>();
  blackPawns = input.required<number[]>();
  movablePawns = input.required<number[]>();

  apiService = inject(ApiService);

  movePawn(indexToMove:number) {
    if (!this.isPlayerTurn() || !this.movablePawns().includes(indexToMove)) {
      console.log(`can't move pawn at index ${indexToMove}.`);
      return;
    }
    console.log(`ready to move pawn at index ${indexToMove} by ${this.sticksValue()} spaces.`);
    this.apiService.apiMovePawn(this.userid(), indexToMove)
      .subscribe((result) => {
        
      })
  }
}
