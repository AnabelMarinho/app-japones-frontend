import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flashcard-mini',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flashcard-mini.component.html',
  styleUrls: ['./flashcard-mini.component.css']
})
export class FlashcardMiniComponent {
  @Input() texto: string = '';
  @Input() tipo: 'default' | 'primary' = 'default';
}