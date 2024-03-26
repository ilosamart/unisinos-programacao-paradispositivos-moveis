import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private _nome;
  private _Email;

  constructor() { 
    this._nome = '';
    this._Email = '';
  }

  getnome(): string {
    return this._nome;
  }

  getemail(): string{
    return this._Email;
  }

  setnome(nome: string){
    this._nome = nome;
  }

  setemail(Email: string){
    this._Email = this._Email;
  }

  consultaNome(): string {
    return this._nome;
  }

  consultaEmail(): string{
    return this._Email;
  }

  exibeDados(): void{
   let Nome = this.nome;
   let Email = this.email;
  }

  
}

