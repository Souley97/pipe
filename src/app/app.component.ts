import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduitDetailComponent } from "./produits/produit-detail/produit-detail.component";
import { Produit , ProduitListComponent } from './produits/produit-list/produit-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,CommonModule , ProduitListComponent, ProduitDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipe';
  
  selectedProduit?: Produit;

  onProduitSelectionne(produit: Produit): void {
    this.selectedProduit = produit;
  }

}


