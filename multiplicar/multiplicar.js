const fs= require('fs');



let listar = (base,limite)=>{
    let cont=0;
    fs.readFile(`./tablas/tabla-${base}.txt`, (err, data) => {
        if (err) throw err;
        if(cont === limite) return;
        cont++;
        console.log(data);
      });

}

let crearArchivo=(base,limite)=>{
     return new Promise((resolve,reject)=>{

        if(!Number(base)){
            reject('No es un numero');
            return;
        }
        let data='';
        
        for(let i=1; i <=limite; i++)
        data+=`${base}*${i}= ${base * i}\n`;
        fs.writeFile(`./tablas/tabla-${base}-alt-${limite}.txt`,data,(err)=>{
              if(err) resolve(err);
            else   
              resolve(`tabla-${base}-alt-${limite}.txt`);
        });
    
     });

}

module.exports={
    crearArchivo,
    listar
}

