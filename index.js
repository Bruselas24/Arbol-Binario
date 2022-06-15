const { ArbolBinario } = require('./clases')
const { menu, ingresaElemento, añadirOtroElemento, mostrarHojasYNodos } = require('./menu')

const main = async() => {

    let arbol = new ArbolBinario()

    while (true) {

        let opcion = await menu()

        if (opcion == 1) {

            do {

                let resp = await ingresaElemento()
                arbol.insertar(resp)
                console.log(arbol);

            } while (await añadirOtroElemento() == 'Si')

        } else if (opcion == 2) {

            console.log('Todavia no anda capo')

        } else if (opcion == 3) {

            await mostrarHojasYNodos(arbol.hojas, arbol.nodos)

        } else {
            break
        }

        console.clear()
    }

}

main()