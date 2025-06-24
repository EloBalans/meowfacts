import {Component, input} from '@angular/core';
import {
  MatCard, MatCardContent,
  MatCardSubtitle,
} from "@angular/material/card";

@Component({
  selector: 'app-cat-infos',
  standalone: true,
  imports: [
    MatCard,
    MatCardSubtitle,
    MatCardContent,
  ],
  templateUrl: './cat-infos.component.html',
  styleUrl: './cat-infos.component.scss'
})
export class CatInfosComponent {
    infos = input<string[]>([]);
}
