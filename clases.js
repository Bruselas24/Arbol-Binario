class Nodo {
    constructor(valor) {
        this.value = valor,
            this.izquierda = null,
            this.derecha = null
    }
}

class ArbolBinario {
    constructor() {
        this.raiz = null
    }

    insertar(value) {

        let nuevoNodo = new Nodo(value)

        if (this.raiz == null) {
            this.raiz = nuevoNodo
        } else {
            this.insertarNodo(this.raiz, nuevoNodo)
        }

    }

    insertarNodo(nodo, nuevoNodo) {

        if (nuevoNodo.value < nodo.value) {

            if (!nodo.izquierda) nodo.izquierda = nuevoNodo
            else this.insertarNodo(nodo.izquierda, nuevoNodo)

        } else {

            if (!nodo.derecha) nodo.derecha = nuevoNodo
            else this.insertarNodo(nodo.derecha, nuevoNodo)

        }
    }

    inOrden(nodo) {
        if (nodo !== null) {
            this.inOrden(nodo.izquierda)
            console.log(nodo.value)
            this.inOrden(nodo.derecha)
        }
    }

}

module.exports = {
    ArbolBinario
}

let arbol = new ArbolBinario()

arbol.insertar(7)
arbol.insertar(5)
arbol.insertar(11)
arbol.insertar(6)
arbol.insertar(1)
arbol.insertar(13)
arbol.insertar(3)
console.log(arbol.inOrden(arbol.raiz));