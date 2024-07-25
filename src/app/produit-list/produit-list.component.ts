import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitDetailComponent } from '../produits/produit-detail/produit-detail.component';

export interface Produit {
  id: number;
  nom: string;
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
    { id: 1, nom: 'Produit 1', description: 'Description 1', prix: 100, dateAjout: new Date() },
    { id: 2, nom: 'Produit 2', description: 'Description 2', prix: 200, dateAjout: new Date() },
    // Autres produits...
  ];

  @Output() produitSelectionne = new EventEmitter<Produit>();

  onSelect(produit: Produit): void {
    this.produitSelectionne.emit(produit);
  }
  

}
