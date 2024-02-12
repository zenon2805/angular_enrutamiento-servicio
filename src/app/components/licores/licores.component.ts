import { Component } from '@angular/core';
import { CarritoService } from '../../carrito.service';

interface MenuItem {
  name: string;
  imageUrl: string;
  ingredients: string[];
  showName: boolean;
}

@Component({
  selector: 'app-licores',
  templateUrl: './licores.component.html',
  styleUrl: './licores.component.css'
})
export class LicoresComponent {

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
      nombre: 'Johnnie Walker Blue Label', 
      precio: 20, 
      descripcion: 'Es una de las expresiones más prestigiosas y exclusivas de la reconocida marca de whisky escocés Johnnie Walker. Se encuentra en la cima de la línea de productos de la marca, ofreciendo una experiencia de whisky excepcionalmente refinada y elegante. ',
      fotos: [
        "./assets/dar_images/l1.jpg",
        "./assets/dar_images/l2.jpg"
      ]
    },
    { 
      nombre: 'Whisky Grant’s Family Reserve', 
      precio: 25, 
      descripcion: 'Es una expresión emblemática de la marca Grants, una de las más reconocidas y respetadas en el mundo del whisky escocés. Este whisky se destaca por su calidad consistente y suave sabor, que lo convierten en una opción popular tanto para disfrutar solo como en cócteles.',
      fotos: [
        "./assets/dar_images/l3.jpg",
        "./assets/dar_images/l4.jpg"
      ]
    },
    { 
      nombre: 'Macallan Whisky 18 años', 
      precio: 30, 
      descripcion: 'Es una expresión premium y altamente valorada de la famosa destilería escocesa The Macallan. Es parte de la gama de whiskies envejecidos de forma prolongada de la marca, lo que significa que ha pasado al menos 18 años madurando en barricas de roble seleccionadas.',
      fotos: [
        "./assets/dar_images/l5.jpg",
        "./assets/dar_images/l6.jpg"
      ]
    },
    { 
      nombre: 'Old Parr Whisky 12 años', 
      precio: 40, 
      descripcion: 'Es una expresión premium de la marca Old Parr, una reconocida destilería escocesa. Este whisky es conocido por su suavidad y carácter distintivo, resultado de su envejecimiento durante al menos 12 años en barricas de roble. En términos de sabor, ofrece una experiencia única. ',
      fotos: [
        "./assets/dar_images/l7.jpg",
        "./assets/dar_images/l8.jpg"
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

