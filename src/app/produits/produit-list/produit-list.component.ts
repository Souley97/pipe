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
    { id: 1, titre: 'Produit 1', description: 'Description 1', prix: 100, dateAjout: new Date() },
    { id: 2, titre: 'Produit 2', description: 'Description 2', prix: 200, dateAjout: new Date() },
    // Autres produits...
  ];

selectedProduit?: Produit;

onSelect(produit: Produit): void {
  this.selectedProduit = produit;
}



}
