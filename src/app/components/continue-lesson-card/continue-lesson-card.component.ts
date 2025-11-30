import { Component, Input } from '@angular/core';
import { BarraProgresso } from '../barra-progresso/barra-progresso.component';

@Component({
  selector: 'app-continue-lesson-card',
  standalone: true,
  imports: [BarraProgresso],
  templateUrl: './continue-lesson-card.component.html',
  styleUrls: ['./continue-lesson-card.component.css']
})
export class ContinueLessonCardComponent {
  @Input() simbolo: string = 'あ';
  @Input() titulo: string = 'Hiragana -- Lição 3';
  @Input() subtitulo: string = 'Próxima etapa: Vogais あ い う え お';
  @Input() progresso: number = 0;
}
