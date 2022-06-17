const { ArbolBinario } = require('./clases')
const { menu, ingresaElemento, añadirOtroElemento, mostrarHojasYNodos, buscarValor } = require('./menu')

const main = async() => {

    let arbol = new ArbolBinario()

    while (true) {

        let opcion = await menu()

        if (opcion == 1) {

            do {

                let resp = await ingresaElemento()
                arbol.insertar(resp)

            } while (await añadirOtroElemento() == 'Si')

        } else if (opcion == 2) {

            let resp = await ingresaElemento()
            await buscarValor(arbol.buscarNodo(arbol.raiz, resp))

        } else if (opcion == 3) {

            await mostrarHojasYNodos(arbol)

        } else {
            break
        }

        console.clear()
    }

}

main()