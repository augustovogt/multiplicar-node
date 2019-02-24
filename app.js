
const argv= require('./config/yargs').argv //Esto extrae todo el archivo config/yargs.js, pero si lo hace con .argv solo el objeto argv
                
const {crearArchivo,listar} = require('./multiplicar/multiplicar');

console.log(argv);
let comando=argv._[0]; // _ indica arrglo de comandos


switch(comando){
    case 'listar':
        listar(argv.base,argv.limite);
        break;
    case 'crear':
    crearArchivo(argv.base,argv.limite)
    .then(archivo =>console.log(`Archivo creado ${archivo}`))
    .catch(e=>console.log(e));
       break;
    default:
        console.log('comando no reconicido');
}



