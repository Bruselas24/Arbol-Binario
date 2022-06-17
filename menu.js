const inquirer = require('inquirer')

const menu = async() => {
    const output = [{
        type: 'list',
        name: 'opt',
        message: `Seleccione una opcion`,
        choices: [{
                value: '1',
                name: '1.Ingresar elemento'
            },
            {
                value: '2',
                name: '2.Buscar Elemento'
            },
            {
                value: '3',
                name: '3.Cantidad de Hojas'
            },
            {
                value: '4',
                name: '4.Salir'
            }
        ]

    }]

    let { opt } = await inquirer.prompt(output)
    return opt
}

const ingresaElemento = async() => {

    const output = [{
        type: 'input',
        name: 'elemento',
        message: 'Ingrese el elemento',
        validate: function(input) {

            var done = this.async();

            if (input == '') {
                done('No puede ingresar nada...');
                return;
            }

            done(null, true);
        }
    }]

    const { elemento } = await inquirer.prompt(output)
    return elemento;

}

const añadirOtroElemento = async() => {

    const output = [{
        type: 'list',
        name: 'value',
        message: '¿Quiere ingresar otra elemento?',
        choices: [{
                key: 'S',
                name: 'Si'
            },
            {
                key: 'N',
                name: 'No'
            }
        ]
    }]

    const { value } = await inquirer.prompt(output)
    return value

}

const mostrarHojasYNodos = async(arbol) => {

    const output = [{
        type: 'input',
        name: 'value',
        message: `El arbol tiene ${arbol.nodos} nodos y ${arbol.cantidadHojas()} hojas`
    }]

    await inquirer.prompt(output)
    return

}

const buscarValor = async(nodo) => {

    let output


    if (nodo == null) {
        output = [{
            type: 'confirm',
            name: 'value',
            message: `No se encontro el nodo`,
            suffix: '',
            choices: []
        }]
    } else {
        output = [{
            type: 'confirm',
            name: 'value',
            message: `Informacion del nodo \n Valor: ${nodo.value}
 Izquierda: ${nodo.izquierda ? nodo.constructor.name : 'Nada'}
 Derecha: ${nodo.derecha ? nodo.constructor.name : 'Nada'} \n`,
            choices: []
        }]
    }


    await inquirer.prompt(output)
    return

}


module.exports = {
    menu,
    ingresaElemento,
    añadirOtroElemento,
    mostrarHojasYNodos,
    buscarValor
}