import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitDetailComponent } from '../produit-detail/produit-detail.component';

export interface Produit {
  id: number;
  titre: string;
  description: string;
  prix: number;
  dateAjout: Date;
}

@Component({
  selector: 'app-produit-list',
  standalone: true,
  imports: [ ProduitDetailComponent, CommonModule],
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent   {
  produits: Produit[] = [
    { id: 1, titre: 'Baskets en cuir', description: 'Chaussures de skate | Baskets en cuir fabriquées à la main pour homme | Chaussures homme | Baskets en daim | Style urbain', prix: 100, dateAjout: new Date() },
    { id: 2, titre: 'Punk Grey ', description: "Punk Grey - Chaussures Homme Originales en Chanvre ", prix: 200, dateAjout: new Date() },
    // Autres produits...
  ];

selectedProduit?: Produit;

onSelect(produit: Produit): void {
  this.selectedProduit = produit;
}



}
