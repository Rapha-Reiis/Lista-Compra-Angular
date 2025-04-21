import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { ItemLista } from './itemlista'

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {

    nomeItem: string = '';
    lista: ItemLista[] = [];

    adicionarItem(){
        if(this.nomeItem != ""){
          let item = new ItemLista;

          item.nome = this.nomeItem
          item.id = this.lista.length + 1;
    
          this.lista.push(item);
  
          this.nomeItem = "";
        }
    }

    riscarItem(obj: ItemLista){
        obj.comprado = !obj.comprado;
    }

    limparLista(){
        this.lista = []
    }

}
