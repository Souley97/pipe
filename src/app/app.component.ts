import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduitListComponent } from "./produit-list/produit-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProduitListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipe';
}
