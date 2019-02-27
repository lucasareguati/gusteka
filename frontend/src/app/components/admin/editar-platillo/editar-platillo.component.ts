import { Component, OnInit } from '@angular/core';
import { PlatilloService } from '../../../services/platillo.service';
import { Platillo } from 'src/app/models/platillo';
import { NgForm } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { FormControl, Validators, ReactiveFormsModule} from '@angular/forms';


declare var M: any;


@Component({
  selector: 'app-editar-platillo',
  templateUrl: './editar-platillo.component.html',
  styleUrls: ['./editar-platillo.component.css']
})
export class EditarPlatilloComponent implements OnInit {

  constructor(private http: HttpClient, private platilloService: PlatilloService) { }

  ngOnInit() {
    this.getPlatillos();
  }


  getPlatillos() {
    this.platilloService.getPlatillos().subscribe(res => {
      this.platilloService.platillos = res as Platillo[];
    });

  }

  bajaOAltaPlatillo() {
    if (this.platilloService.selectedPlatillo.baja) {
      this.platilloService.selectedPlatillo.baja = false;
      this.platilloService.putPlatillo(this.platilloService.selectedPlatillo).subscribe(res => {
        this.getPlatillos();
        console.log('Alta exitosa');
    });
    } else {
      this.platilloService.selectedPlatillo.baja = true;
      this.platilloService.putPlatillo(this.platilloService.selectedPlatillo).subscribe(res => {
        this.getPlatillos();
        console.log('Baja Exitosa');
    });
  }

  }


  editarPlatillo(platillo: Platillo) { // selecciona el platillo en el ngfor
    this.platilloService.selectedPlatillo = platillo;
  }

  guardarEdicionPlatillo(editarForm?: NgForm) {
    this.platilloService.putPlatillo(editarForm.value).subscribe(res => {
      this.getPlatillos();
    });
  }

}
