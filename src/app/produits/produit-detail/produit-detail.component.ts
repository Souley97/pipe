import { Component, Input  } from '@angular/core';
import { Produit } from '../produit-list/produit-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit-detail',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './produit-detail.component.html',
  styleUrl: './produit-detail.component.css'
})
export class ProduitDetailComponent {
  @Input() produit?: Produit;

  
    // FERME MODAL
    closeModal(): void {
    this.produit = undefined;
  }

  //et fermer le modal
  
  

}
