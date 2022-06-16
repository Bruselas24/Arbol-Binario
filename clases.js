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

    inOrden(nodo, cb) {
        if (nodo !== null) {
            this.inOrden(nodo.izquierda, cb)
            cb.call(null, nodo)
            this.inOrden(nodo.derecha, cb)
        }
    }

    buscarNodo(nodo, data) {

        if (nodo === null) return null
        else if (data < nodo.value) {
            return this.buscarNodo(nodo.izquierda, data)
        } else if (data > nodo.value) {
            return this.buscarNodo(nodo.derecha, data)
        } else {
            return nodo
        }

    }

}

module.exports = {
    ArbolBinario
}