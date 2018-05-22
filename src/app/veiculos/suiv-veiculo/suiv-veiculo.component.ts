import { Complemento } from './../model';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { VeiculoService } from './../veiculo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suiv-veiculo',
  templateUrl: './suiv-veiculo.component.html',
  styleUrls: ['./suiv-veiculo.component.css']
})
export class SuivVeiculoComponent implements OnInit {

  formulario: FormGroup;
  pesquisandoPlaca = false;
  complementos: Complemento[];

  constructor(private veiculoService: VeiculoService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.configuraFormulario();
  }


  configuraFormulario() {
    this.formulario = this.fb.group({
      'placa': new FormControl('', Validators.compose([Validators.required, Validators.minLength(7)])),
      'modelo': [],
      'versao': [],
      'anoFab': [],
      'anoMod': [],
      'combustivel': [],
      'segmento': [],
      'subsegmento': [],
      'carroceria': [],
      'potencia': [],
      'procedencia': [],
      'eixosQtd': [],
      'pBT': [],
      'cMT': [],
      'motorizacao': [],
      'numLugares': [],
      'capacCarga': [],
      'numCaixaCambio': [],
      'numEixoTras': [],
      'numEixoAux': [],
      'numMotor': [],
    });
  }


  consultaPlaca() {
    if (this.formulario.get('placa').value && this.formulario.get('placa').value.length === 7) {
      console.log(this.formulario.get('placa').value);
      this.formulario.disable();
      this.pesquisandoPlaca = true;
      return this.veiculoService.suivConsultaVeiculo(this.formulario.get('placa').value).
        then(res => {
          this.pesquisandoPlaca = false;
          this.formulario.enable();
          this.formulario.patchValue(res);
          this.complementos = res.complemento;
          console.log(this.complementos);
        });
    }
  }
}
