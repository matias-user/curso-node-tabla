const colors = require('colors');
const fileSystem = require('fs');

const crearArchivo = async (base = 5, boolean = false, hasta ) => {

    
        try {
            console.log('-----------------'.green);
            console.log(`Tabla del ${base}`.rainbow);
            console.log('-----------------'.blue);
            let salida = '';
        
            for(let i= 1; i <= hasta; i++){
                salida += `${ base * i }\n`;
                if( boolean ){
                
                console.log(`${base} ${ 'x'.blue } ${i} = ${ base * i}` );
            };
            };
        
            fileSystem.writeFileSync( `./salida/tabla-${base}.txt`, salida)
        
            return `tabla de ${base} creada`.rainbow;
        } catch (error) {
            throw (error);
        }
    
};
    

module.exports = {
    crearArchivo
};