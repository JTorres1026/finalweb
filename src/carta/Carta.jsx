
import './Carta.css'

function Carta({datos}){
    return(

        <div className="carta">
            <h3>Datos ingresados</h3>
            <p>Nombre: {datos.Nombre}</p>
            <p>Correo Electronico: {datos.correo}</p>
            <p>Direccion: {datos.direccion}</p>
            <p>Contraseña: {datos.password}</p>
            <p>Fecha de nacimiento: {datos.fecha}</p>
            

        
        </div>
    );
}

export default Carta;