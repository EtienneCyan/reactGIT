import Animal from "./components/Animal";
import Articulos from "./components/Articulos";
import Bienvenido from "./components/Bienvenido";





function App() {
  const art=[ 
    {"nombre":"Escritorio",
      "color":"Blanco",
      "marca":"Iceoff Dotep",
      "precio":"1100"
    }, 
    {
      "nombre":"Televisor",  
      "color":"Negro",
      "marca":"Samsung",
      "precio":25000
    },
    {
      "nombre":"Consola Videojuegos",  
      "color":"Negro",
      "marca":"Nintendo",
      "precio":7500
    }
  ]; 
  return (    
    <div>
      <Bienvenido nombre="Etienne" />
      <Animal animal="Gato"/>
      <Animal animal="Ballena"/>
      <Animal animal="Tiburón"/>
      {art.map((articulo)=>{
        return(
        <Articulos key={articulo.nombre} nombre={articulo.nombre} color={articulo.color} marca={articulo.marca}  precio={articulo.precio}/>
      );
      })}
    </div>
  );
}

export default App;
