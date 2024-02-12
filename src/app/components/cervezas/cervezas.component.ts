import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  imageUrl: string;
  ingredients: string[];
  showName: boolean;
}


@Component({
  selector: 'app-cervezas',
  templateUrl: './cervezas.component.html',
  styleUrl: './cervezas.component.css'
})
export class CervezasComponent {

  propertyBinding = "blue";
  titulo5 = "Resumen de tu pedido";

  currentSlide = 0;
  
  showIngredients = false;
  showPromotions = false;


  menuItems: MenuItem[] = [
    
  ];

  toggleItemName(item: MenuItem) {
    item.showName = !item.showName;
  }

  selectedIngredients: string[] = [];
  onIngredientClick(item: MenuItem, ingredient: string) {
    if (this.selectedIngredients.includes(ingredient)) {
      this.selectedIngredients = 
        this.selectedIngredients.filter(i => i !== ingredient);
    } else {
      this.selectedIngredients.push(ingredient);
    }
  }

  productos: any[] = [
    { 
      nombre: 'Smirnoff Ice', 
      precio: 20, 
      descripcion: 'es una bebida alcohólica refrescante y de sabor suave, fabricada por la marca Smirnoff, conocida por sus vodkas. A diferencia de los vodkas tradicionales, Smirnoff Ice es una bebida lista para beber (RTD, por sus siglas en inglés). ',
      fotos: [
        "./assets/dar_images/c1.jpg",
        "./assets/dar_images/c2.jpg"
      ]
    },
    { 
      nombre: 'Cerveza Heineken', 
      precio: 25, 
      descripcion: 'Es una de las cervezas más reconocidas y populares a nivel mundial, elaborada por la empresa cervecera neerlandesa Heineken International. Es una cerveza tipo lager, caracterizada por su sabor refrescante, suave amargor y distintivo.',
      fotos: [
        "./assets/dar_images/c3.jpg",
        "./assets/dar_images/c4.jpg"
      ]
    },
    { 
      nombre: 'Cerveza Tecate', 
      precio: 30, 
      descripcion: 'Es una cerveza mexicana, originaria del estado de Baja California, producida por Cervecería Cuauhtémoc Moctezuma, una de las mayores cervecerías de México. Es una cerveza tipo lager, conocida por su sabor refrescante y ligero.',
      fotos: [
        "./assets/dar_images/c5.jpg",
        "./assets/dar_images/c5.jpg"
      ]
    },
    { 
      nombre: 'Cerveza Miller Genuine Draft', 
      precio: 40, 
      descripcion: 'Es una cerveza estadounidense producida por Miller Brewing Company, una subsidiaria de Molson Coors Beverage Company. Es una cerveza tipo lager, conocida por su sabor suave y refrescante. ',
      fotos: [
        "./assets/dar_images/c7.jpg",
        "./assets/dar_images/c7.jpg"
      ]
    }
  ];

  

  carrito: any[] = [];

  agregarAlCarrito(producto: any) {
    this.carrito.push(producto);
    console.log("Producto agregado al carrito:", producto);
  }  

}
