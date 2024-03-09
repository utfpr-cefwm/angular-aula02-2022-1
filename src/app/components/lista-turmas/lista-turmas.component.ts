import {
  Component,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurmaService } from '../../services/turma.service';

@Component({
  selector: 'app-lista-turmas',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './lista-turmas.component.html',
  styleUrl: './lista-turmas.component.css',
})
export class ListaTurmasComponent {

  public turmaService = inject(TurmaService);

  public turmas = this.turmaService.getTurmas();

}
