import { Component, Input } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/shared-imports';

@Component({
  selector: 'app-palavra-dia-card',
  standalone: true,
  imports: [SHARED_IMPORTS],
  templateUrl: './palavra-dia-card.component.html',
  styleUrls: ['./palavra-dia-card.component.css']
})
export class PalavraDiaCardComponent {

  @Input() palavraJp: string = '';      // 山
  @Input() significado: string = '';   // Montanha

  @Input() leituraJp: string = '';     // やま
  @Input() romaji: string = '';        // Yama

  @Input() fraseJp: string = '';       // やま は たかい です。
  @Input() fraseRomaji: string = '';   // Yama wa takai desu.
  @Input() frasePt: string = '';       // A montanha é alta.

  @Input() tipo: 'default' | 'primary' = 'default';
}
