import { Component, OnInit  } from '@angular/core';
import { CarritoService } from '../../carrito.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  muestraTitulo = true;
  titulo = "Subcribete aquí";
  propertyBinding = "blue";

  cantidadEnCarrito: number=0;
  nuevoUsuario = { nombre: '', email: '', password: '' };
  mostrarFormularioInscripcion = false; 

  constructor(private carritoService: CarritoService, private authService: AuthService) {
    this.cantidadEnCarrito = this.carritoService.obtenerCantidadEnCarrito();
  }

  ngOnInit(): void {
  }

  inscribirUsuario() {
    this.authService.inscribirUsuario(this.nuevoUsuario);
    this.nuevoUsuario = { nombre: '', email: '', password: '' }; 
    this.mostrarFormularioInscripcion = false; // Ocultar formulario después de la inscripción
  }

  navbarOpen=false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

    // Método para ocultar la barra de navegación
    ocultarBarra1() {
      this.navbarOpen = false;
    }


  ocultar: boolean = true;
  
  ocultarBarra() {
  this.ocultar = !this.ocultar;
}

items = [
  {
    "dia":"Lunes",
    "hora":"10:00 AM - 05:00 PM"
  },
  {
    "dia":"Martes",
    "hora":"10:00 AM - 06:00 PM"
  },
  {
    "dia":"Miércoles",
    "hora":"10:00 AM - 06:00 PM"
  },
  {
    "dia":"Jueves",
    "hora":"10:00 AM - 06:00 PM"
  },
  {
    "dia":"Sábado",
    "hora":"11:00 AM - 08:00 PM"
  },
  {
    "dia":"Domingo",
    "hora":"10:00 AM - 09:00 PM"
  }
  ]
  
}