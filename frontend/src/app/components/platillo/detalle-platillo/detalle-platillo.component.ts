import { Component, OnInit } from '@angular/core';
import { PlatilloService } from '../../../services/platillo.service';
import { Platillo } from 'src/app/models/platillo';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalle-platillo',
  templateUrl: './detalle-platillo.component.html',
  styleUrls: ['./detalle-platillo.component.css']
})
export class DetallePlatilloComponent implements OnInit {

  platillo: Platillo;
  idPlato: string;

  constructor(private platilloService: PlatilloService, private activatedRoute: ActivatedRoute) {
  }



  ngOnInit() {
    this.idPlato = this.activatedRoute.snapshot.paramMap.get('id');
    this.platilloService.getPlatillo('/' + this.idPlato).subscribe(res => {
      this.platilloService.platillo = res as Platillo;
    });
  }
}
