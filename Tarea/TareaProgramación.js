class Nodo{
    constructor(informacion_ingresada, siguiente_ingresado){
      this.info = informacion_ingresada;
      this.siguiente = siguiente_ingresado;
    }
  }
  
 
  class ListEnlazada{
    constructor(){
      this.cabeza = null;
      this.tamano = 0;
    }
  
    agregar(informacion){
      const nuevo_nodo = new Nodo(informacion, null);
      if(this.cabeza === null){
        this.cabeza = nuevo_nodo;
      }else{
        
        let nodo_actual = this.cabeza;
        while(nodo_actual.siguiente){
          nodo_actual = nodo_actual.siguiente;
        }
        
        nodo_actual.siguiente = nuevo_nodo;
      }
      
      this.tamano++;
    }
  
   
    agregar_en(informacion, posicion){
      if(posicion < 0 || posicion > this.tamano){
        return null;
      }
  
     
      const nuevo_nodo = new Nodo(informacion, null);
      let nodo_actual = this.cabeza;
      let nodo_anterior;
  
      if(posicion === 0){ 
      nuevo_nodo.siguiente = nodo_actual;
        this.cabeza = nuevo_nodo;
      }else{
       
        for(let i = 0; i < posicion; i++){
             nodo_anterior = nodo_actual;
             nodo_actual = nodo_actual.siguiente;
        }
        
        nuevo_nodo.siguiente = nodo_actual;
        nodo_anterior.siguiente = nuevo_nodo;
      }
      this.tamano++;
    }
  
    mostrar(){
      if(this.cabeza === null){
        return "No existe la cabeza no hay mucho que mostrar X-X";
      }
      let nodo_actual = this.cabeza;
      let respuesta = "";
      while(nodo_actual.siguiente){
        if(typeof(nodo_actual.info)=="string"){
          respuesta += nodo_actual.info += ' -> ';
        }else{
          respuesta += `tipo: ${typeof(nodo_actual.info)} -> `;
        }
        
        nodo_actual = nodo_actual.siguiente;
      }
      respuesta += 'null o cola';
      return respuesta;
    }
  
    remover_por(posicion){
      if(posicion < 0 || posicion > this.tamano){
        return null;
      }
  
      let nodo_actual = this.cabeza;
      let nodo_anterior;
  
      if(posicion === 0){
        this.cabeza = nodo_actual.siguiente;
      }else{
        for(let i = 0; i < posicion; i++){
          nodo_anterior = nodo_actual;
          nodo_actual = nodo_actual.siguiente;
        };
        nodo_anterior.siguiente = nodo_actual.siguiente;
      };
      this.tamano--;
      return nodo_actual.info;
    }
  
    llenar(cantidad){
      for(let i=0;i<cantidad;i++){
        let aux = prompt("ingresa informacion: ");
         const nuevo_nodo = new Nodo(aux, null);
      if(this.cabeza === null){
           this.cabeza = nuevo_nodo;
      }else{
        let nodo_actual = this.cabeza;
        while(nodo_actual.siguiente){
        nodo_actual = nodo_actual.siguiente;
        }
        nodo_actual.siguiente = nuevo_nodo;
      }
       this.tamano++;
    }
    }
  
  compararListaEnlazada(){
     let nodo_actual = this.cabeza;
      let acomulador = 1;
      let respuesta = true;
      for(let i = 0; i < this.tamano; i++){
          if(acomulador%2 != 0){
            if((nodo_actual.info %2) != 0){
              respuesta = false;
            }
          }else{ 
            if(nodo_actual.info == 0){
              respuesta = false;
            }
          }
          acomulador++;
      }
      return respuesta;
    }
  
    sumarLista(){
      let nodo_actual = this.cabeza;
          let sumaTotal=0;
          for(let i = 0; i < this.tamano; i++){
            if(typeof (nodo_actual.info)== "number"){
            let acumulador=nodo_actual.info;
            sumaTotal=acumulador+sumaTotal;
           }
           nodo_actual=nodo_actual.siguiente;
           }
  
          return sumaTotal;
             }
  
      Pares(){
      let pares=[];
      let nodo_actual = this.cabeza;
      for(let i = 0; i < this.tamano; i++){
      if((nodo_actual.info%2)==0){
      pares.push(nodo_actual.info);
      }
      nodo_actual=nodo_actual.siguiente;
      }
      return pares;
  }
  
   impares(){
      let pares=[];
      let nodo_actual = this.cabeza;
      for(let i = 0; i < this.tamano; i++){
      if((nodo_actual.info%2)!=0){
      pares.push(nodo_actual.info);
      }
      nodo_actual=nodo_actual.siguiente;
      }
      return pares;
  }
  
      soloString(){
      let nodo_actual = this.cabeza;
      let stringsss=[];
      for(let i = 0; i < this.tamano; i++){
        if(typeof (nodo_actual.info)== "string"){
        stringsss.push(nodo_actual.info)
           }
           nodo_actual=nodo_actual.siguiente;
        }
          return stringsss;
  }
  
    cantidades(){
    let nodo_actual = this.cabeza;
    let cant_number=0;
    let cant_string=0;
    let cant_array=0;
  
      for(let i = 0; i < this.tamano; i++){
        if(typeof (nodo_actual.info)== "string"){
        cant_string++
      }
      if(typeof (nodo_actual.info)== "number"){
        cant_number++
      } 
      if(typeof (nodo_actual.info)== "object"){
        cant_array++
      }
      nodo_actual=nodo_actual.siguiente;
  }
  return `numeros: ${cant_number} - string: ${cant_string} - array: ${cant_array} `;
  }
  
    remover_elemento(elemento){
      let nodo_actual = this.cabeza;
      let nodo_anterior;
  
      if(elemento === nodo_actual.info){
        this.cabeza === nodo_actual.siguiente;
      }else{
        for(let i = 0; i < posicion; i++){
          nodo_anterior = nodo_actual;
          nodo_actual = nodo_actual.siguiente;
        };
        nodo_anterior.siguiente = nodo_actual.siguiente;
      };
      this.tamano--;
      return nodo_actual.info;
    }
    
  }
    const enlazada_1 = new ListEnlazada();
    enlazada_1.agregar(1);
    enlazada_1.agregar("Eilyn");
    enlazada_1.agregar(3);
    enlazada_1.agregar(4);
    enlazada_1.agregar("Buitrago");
    enlazada_1.agregar(6);
    enlazada_1.agregar(7);
    enlazada_1.agregar(["Eilyn",5,true,"Duque"]);   