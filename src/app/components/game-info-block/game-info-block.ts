import { Component, input } from '@angular/core';

@Component({
  selector: 'app-game-info-block',
  imports: [],
  templateUrl: './game-info-block.html',
  styleUrl: './game-info-block.css'
})
export class GameInfoBlock {
  username = input('');
  opponentUsername = input('');
}
