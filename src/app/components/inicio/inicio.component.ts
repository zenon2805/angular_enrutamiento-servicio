import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  imageUrl: string;
  ingredients: string[];
  showName: boolean;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  muestraTitulo = true
  titulo = "Nuestras Cervezas Nacionales"
  titulo5 = "Resumen de tu pedido"
  propertyBinding = "blue";

  titulo1  = "Pilsener";
  titulo2 = "Suprema";
  titulo3 = "Golden";
  titulo4 = "Regia";

  Parrafo1 = true;
  Parrafo2 = true;
  Parrafo3 = true;
  Parrafo4 = true;


  sendValue1 (info:any){
    console.log(info);


  }
  ocultaParrafo1(){
    this.Parrafo1 = !this.Parrafo1;
  }
  ocultaParrafo2(){
    this.Parrafo2 = !this.Parrafo2;
  }
  ocultaParrafo3(){
    this.Parrafo3 = !this.Parrafo3;
  }
  ocultaParrafo4(){
    this.Parrafo4 = !this.Parrafo4;
  }
 

  userExperience: string = '';

  submitExperience() {
    // You can perform any logic here with the user's experience
    console.log('User Experience Submitted:', this.userExperience);
  }
  
  sendValue (info:any){
    console.log(info);
  }

  images: any[] = [
    {
      url: "./assets/img/img1.png",
      title: "Vinos",
      description: 'es rico en color y aroma, ofreciendo una paleta de frutas rojas y negras, especias y notas terrosas. En boca, se caracteriza por su cuerpo y estructura, con taninos que brindan una sensación astringente y una acidez equilibrada que realza los sabores.',
    }, 
    {
      url: "./assets/img/img2.png",
      title: "Licores",
      description: 'han sido aromatizadas y/o endulzadas con una variedad de ingredientes como frutas, hierbas, especias, flores, semillas, raíces, y más. Estos ingredientes pueden ser macerados, infusionados o destilados junto con una base alcohólica, como el alcohol de grano, el ron, el brandy, el aguardiente o el whisky. ',
    },
      {
      url: "./assets/img/img3.png",
      title: "Cervezas",
      description: 'elaborada principalmente a partir de granos de cereal malteados y fermentados con levadura. Hay una amplia variedad de estilos de cerveza, que varían en sabor, color y cuerpo. Algunos estilos comunes incluyen Lager, Ale, Wheat Beer, Sour Beer y Strong Ale. ',
    },
  ];

  current = 0;

  onPrevClick() {
    const prev = this.current - 1;
    this.current = prev < 0 ? this.images.length - 1 : prev;
  }

  onNextClick() {        
    const next = this.current + 1;
    this.current = next === this.images.length ? 0 : next;
  } 


  slides = [
    {
      image: "./assets/img/img1.png",
      ingredients: ['Uvas', 'Levaduras', 'Azúcares (opcional)', 'Levaduras seleccionadas (opcional)', 'Sulfitos (como dióxido de azufre)'],
      promotions: ['2x1 Martes', 'Envío gratis en compras mayores a $100','10% de descuento en tu cumpleaños' ]  
    },
    {
      image: "./assets/img/img2.png",
      ingredients: ['Base alcohólica (como alcohol de grano, alcohol de caña de azúcar, etc.)', 'Saborizantes naturales (frutas, hierbas, especias, etc.)',
      'Edulcorantes (azúcar, jarabe de azúcar, etc.)', 'Agua', 'Colorantes (en algunos casos)', 'Aromatizantes y extractos (naturales o artificiales)'],
      promotions: ['2x1 martes y jueves', 'Envío Gratis los días lunes y  martes', 'Descuento con Check-in en Redes Sociales', ]
    },
    {
      image: "./assets/img/img3.png",
      ingredients: ['Agua', 'Malta de cebada','Lúpulo','Levadura'],
      promotions: ['2x1 martes y jueves', 'Envío Gratis los días lunes y  martes', 'Descuentos para Grupos' ]
    }
  ];

 
  currentSlide = 0;
  
  showIngredients = false;
  showPromotions = false;

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


}
