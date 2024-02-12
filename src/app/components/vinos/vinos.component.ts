import { Component } from '@angular/core';
import { CarritoService } from '../../carrito.service';

interface MenuItem {
  name: string;
  imageUrl: string;
  ingredients: string[];
  showName: boolean;
}

@Component({
  selector: 'app-vinos',
  templateUrl: './vinos.component.html',
  styleUrl: './vinos.component.css'
})
export class VinosComponent {

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
      nombre: 'Torres Altos Ibericos Crianza', 
      precio: 20, 
      descripcion: 'Es un vino tinto español producido por Bodegas Torres, una reconocida bodega con sede en la región vinícola de Rioja. Este vino es una expresión del estilo clásico de Rioja, elaborado principalmente con la variedad de uva Tempranillo, que se complementa con otras variedades locales. ',
      fotos: [
        "./assets/dar_images/v1.jpg",
        "./assets/dar_images/v2.jpg"
      ]
    },
    { 
      nombre: 'Viña Pomal Rioja Reserva', 
      precio: 25, 
      descripcion: 'Es un vino tinto español de alta calidad elaborado por Bodegas Bilbaínas, una prestigiosa bodega con sede en la región vinícola de Rioja. Este vino es una representación fiel del estilo clásico de Rioja y ha sido elaborado con cuidado y atención al detalle, con sabor a ciruela y cereza.',
      fotos: [
        "./assets/dar_images/v3.jpg",
        "./assets/dar_images/v4.jpg"
      ]
    },
    { 
      nombre: 'Ramon Bilbao Rioja Reserva', 
      precio: 30, 
      descripcion: 'Es un vino tinto español de alta calidad elaborado por Bodegas Ramón Bilbao, una bodega emblemática ubicada en la región vinícola de Rioja. Este vino es un ejemplo notable del estilo tradicional de Rioja y ha ganado reconocimiento por su excelencia y consistencia a lo largo de los años.',
      fotos: [
        "./assets/dar_images/v5.jpg",
        "./assets/dar_images/v6.jpg"
      ]
    },
    { 
      nombre: 'Emilio Moro Finca Resalso Tempranillo', 
      precio: 40, 
      descripcion: 'Es un vino tinto español elaborado por Bodegas Emilio Moro, una bodega con una larga historia y prestigio en la región vinícola de Ribera del Duero. Este vino es una expresión joven y vibrante de la variedad de uva Tempranillo, también conocida como Tinto Fino en esta región, con esencia y el carácter de las uvas.',
      fotos: [
        "./assets/dar_images/v7.jpg",
        "./assets/dar_images/v8.jpg"
      ]
    }
  ];


  constructor(private carritoService: CarritoService) {}

  carrito: any[] = [];

  agregarAlCarrito(producto: any) {
    this.carrito.push(producto);
    console.log("Producto agregado al carrito:", producto);
  }

}
