import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }


  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  onSubmit() {

    if (this.formulario.valid) {
      console.log(this.formulario.value);
      this.http.post('http://teste.com/contatc-us', JSON.stringify(this.formulario.value))
        .map(res => res)
        .subscribe(dados => console.log(dados));
      this.formulario.reset();
    } else {
      console.log('formulario invalido');
      Object.keys(this.formulario.controls).forEach(campo => {
        console.log(campo);
        const controle = this.formulario.get(campo);
        controle?.markAsDirty();
      });
    }
  }

  VerificaValidTouched(campo: any) {
    return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched;
  }

  AplicaCssErro(campo: any) {
    return {
      'has-error': this.VerificaValidTouched(campo),
      'has-feedback': this.VerificaValidTouched(campo)
    }
  }



}

