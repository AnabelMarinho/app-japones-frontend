import { Component, ViewEncapsulation } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/shared-imports';
import { BarraProgresso } from '../../components/barra-progresso/barra-progresso.component';
import { FlashcardMiniComponent } from '../../components/flashcard-mini/flashcard-mini.component';
import { ContinueLessonCardComponent } from '../../components/continue-lesson-card/continue-lesson-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SHARED_IMPORTS, BarraProgresso, FlashcardMiniComponent, ContinueLessonCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {}
