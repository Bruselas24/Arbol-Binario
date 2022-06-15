class Nodo {
    constructor(valor, padre = null) {
        this.value = valor,
            this.padre = padre
        this.izquierda = null,
            this.derecha = null
    }
}

class ArbolBinario {
    constructor() {
        this.raiz = null,
            this.hojas = 0,
            this.nodos = 0,
            this.arbolAux,
            this.nivel
    }

    insertar(value, nodo = this.raiz) {

        let nodoActual = nodo
        let nuevoNodo = new Nodo(value)

        if (!nodoActual) {

            this.raiz = nuevoNodo
            this.hojas++
                this.nodos++

        } else {


            if (!nodoActual.izquierda) {

                nuevoNodo.padre = nodoActual
                nodoActual.izquierda = nuevoNodo
                this.nodos++

            } else if (!nodoActual.derecha) {

                nuevoNodo.padre = nodoActual
                nodoActual.derecha = nuevoNodo
                this.hojas++
                    this.nodos++

            } else {

                if ((nodoActual.izquierda.value.length > value.length) || (nodoActual.izquierda.value > value)) {
                    nodoActual = nodoActual.izquierda
                } else {
                    nodoActual = nodoActual.derecha
                }

                this.insertar(value, nodoActual)

            }

        }

    }

    buscar(elemento, nodo = null) {

        if (!this.arbolAux) {
            this.arbolAux = this.raiz
            this.nivel = 0
            nodo = this.arbolAux
        }

        if (!nodo) return -1

        if (elemento == nodo.value) {

            this.arbolAux = null
            return this.nivel

        } else if (nodo.izquierda) {

            nodo = nodo.izquierda
            return this.buscar(elemento, nodo)

        } else if (nodo.derecha) {

            nodo = nodo.derecha
            return this.buscar(elemento, nodo)

        } else {

            nodo = nodo.padre
            console.log(nodo.padre)
            nodo.izquierda = null
            nodo.derecha = null
            this.nivel -= 1
            return this.buscar(elemento, nodo)

        }

    }

}

module.exports = {
    ArbolBinario
}

// let arbol = new arbolBinario()

// arbol.insertar(2)
// arbol.insertar(4)
// arbol.insertar(3)
// arbol.insertar(5)
// arbol.insertar(14)
// arbol.insertar(22)
// arbol.insertar(71)
// arbol.insertar(52)

// console.log(arbol.buscar(4));