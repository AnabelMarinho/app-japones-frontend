import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barra-progresso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './barra-progresso.component.html',
  styleUrls: ['./barra-progresso.component.css']
})

export class BarraProgresso {
  @Input() progresso = 0;
  @Input() tipo: 'default' | 'primary' = 'default';
}
