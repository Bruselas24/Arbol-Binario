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
                name: '2.Buscar Elemento (proximamente xd)'
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

const mostrarHojasYNodos = async(hojas, nodos) => {

    const output = [{
        type: 'confirm',
        name: 'value',
        message: `el arbol tiene ${nodos} nodos y ${hojas} hojas \n Presione enter para continuar`,
        choices: []
    }]

    await inquirer.prompt(output)
    return

}


module.exports = {
    menu,
    ingresaElemento,
    añadirOtroElemento,
    mostrarHojasYNodos
}