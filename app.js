
let pokemons=[];

var tiposPokeValue="";

fetch("https://pokeapi.co/api/v2/pokemon/?limit=151").then((res) => res.json())
.then((myRes) => {

    pokemons=myRes.results;

    const btnOrdenar = document.querySelector('.buttonBuscar2');

    const buttonBuscar=document.querySelector('.buttonBuscar');

    const imgTitle=document.querySelector('.title2');

        btnOrdenar.addEventListener('click', () => {

        var tiposPoke= document.querySelector('.busqueda2b');

        tiposPokeValue=tiposPoke.value;

        pintarXtipo(pokemons);

        });
    
        buttonBuscar.addEventListener('click', () => {

        var namePoke= document.querySelector('.imputBuscar');
    
        namePokeValue=namePoke.value;
    
        pintarXname(pokemons);
    
            });


        imgTitle.addEventListener('click', () => {

          document.querySelector('.imputBuscar').value = "";
          document.querySelector('.busqueda2b').value = "0";  

        pintar(pokemons);
            
        });



pintar(pokemons);

});


const pintar= (pokemoms) => {

    for (const pokemon of pokemons) {
    
        var lista = "";
        fetch (pokemon.url).then((res)  => res.json()).then ((myRes) =>{

                lista += ` 
                <div class="pokemons">
                <img class="pokeImg" src="${myRes.sprites.front_default}">
                <h3>${myRes.name}</h3>
                <h5>ID: ${myRes.id}</h5>
                <h5>Heigh: ${myRes.height}</h5>
                <h5>Weigh: ${myRes.weight}</h5>
                </div>
                `;
             document.querySelector(".contenedor").innerHTML = lista;
            });
  
    }   
   
    
}

    const pintarXtipo= (pokemoms) => {

        for (const pokemon of pokemons) {
        
            var lista = "";
            var tipo = "";
            fetch (pokemon.url).then((res)  => res.json()).then ((myRes) =>{

                    for (var type of myRes.types) {

                        tipo=type.type.name;
                    
                        break
                    }

                     if (tipo === tiposPokeValue){

                    lista += ` 
                    <div class="pokemons">
                    <img class="pokeImg" src="${myRes.sprites.front_default}">
                    <h3>${myRes.name}</h3>
                    <h5>ID: ${myRes.id}</h5>
                    <h5>Heigh: ${myRes.height}</h5>
                    <h5>Weigh: ${myRes.weight}</h5>
                    <h5>${type.type.name}</h5>
                    </div>`;

                    document.querySelector(".contenedor").innerHTML=lista;
                    document.querySelector('.busqueda2b').value = "0";  
                    }
                 
            });
      


                
        }   
        
    }  
        const pintarXname= (pokemoms) => {

            for (const pokemon of pokemons) {
            
                var lista = "";
                
                fetch (pokemon.url).then((res)  => res.json()).then ((myRes) =>{

                         if (myRes.name == namePokeValue){
    
                        lista += ` 
                        <div class="pokemons">
                        <img class="pokeImg" src="${myRes.sprites.front_default}">
                        <h3>${myRes.name}</h3>
                        <h5>ID: ${myRes.id}</h5>
                        <h5>Heigh: ${myRes.height}</h5>
                        <h5>Weigh: ${myRes.weight}</h5>
                        </div>`;
    
                        document.querySelector(".contenedor").innerHTML=lista;
                        document.querySelector('.imputBuscar').value = "";
                        }
                     
                });
          
    
    
                    
            }   






        }


    
