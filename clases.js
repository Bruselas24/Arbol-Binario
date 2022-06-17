class Nodo {
    constructor(valor) {
        this.value = valor,
            this.izquierda = null,
            this.derecha = null
    }
}

class ArbolBinario {
    constructor() {
        this.raiz = null,
            this.nodos = 0,
            this.hojas = 0
    }

    insertar(value) {

        let nuevoNodo = new Nodo(value)

        if (this.raiz == null) {
            this.raiz = nuevoNodo
            this.nodos++
                this.hojas++
        } else {
            this.insertarNodo(this.raiz, nuevoNodo)
        }

    }

    insertarNodo(nodo, nuevoNodo) {

        if (nuevoNodo.value < nodo.value) {

            if (!nodo.izquierda) {
                nodo.izquierda = nuevoNodo
                this.nodos++
            } else this.insertarNodo(nodo.izquierda, nuevoNodo)

        } else {

            if (!nodo.derecha) {
                nodo.derecha = nuevoNodo
                this.nodos++
            } else this.insertarNodo(nodo.derecha, nuevoNodo)

        }

    }

    inOrden(nodo, cb) {
        if (nodo !== null) {
            this.inOrden(nodo.izquierda, cb)
            cb.call(null, nodo)
            this.inOrden(nodo.derecha, cb)
        }
    }

    cantidadHojas() {

        let hojas = 0

        this.inOrden(this.raiz, (nodo) => {
            if (!nodo.izquierda && !nodo.derecha) {
                hojas++
            }
        })

        return hojas
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

// let a = new ArbolBinario()
// a.insertar(10)
// a.insertar(5)
// a.insertar(4)
// a.insertar(12)
// a.insertar(11)
// a.insertar(21)
// a.insertar(2)
// a.insertar(9)
// a.insertar(99)

// console.log(a.nodos)
// console.log(a.cantidadHojas())