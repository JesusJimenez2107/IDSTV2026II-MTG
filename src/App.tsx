import { useState } from "react";

function App() {
  // Vida de ambos jugadores en 20
  const [vidaJugador1, setVidaJugador1] = useState(20);
  const [vidaJugador2, setVidaJugador2] = useState(20);

  // Funciones para el Jugador 1
  const incrementarJ1 = () => {
    setVidaJugador1(vidaJugador1 + 1);
  };
  
  const decrementarJ1 = () => {
    // Validación para que los puntos no sean menores a 0
    if (vidaJugador1 > 0) {
      setVidaJugador1(vidaJugador1 - 1);
    }
  };

  // Funciones para el Jugador 2
  const incrementarJ2 = () => {
    setVidaJugador2(vidaJugador2 + 1);
  };
  
  const decrementarJ2 = () => {
    // Validación para que los puntos no sean menores a 0
    if (vidaJugador2 > 0) {
      setVidaJugador2(vidaJugador2 - 1);
    }
  };

  // Función para reiniciar con validación
  const reiniciar = () => {
    // Confirm antes de ejecutar el reinicio
    const confirmar = window.confirm("¿Estás seguro de que deseas reiniciar la partida?");
    if (confirmar) {
      setVidaJugador1(20);
      setVidaJugador2(20);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Contador de Vida MTG</h1>

      <div style={{ display: "flex", justifyContent: "space-around", margin: "40px 0" }}>
        
        {/* Interfaz Jugador 1 */}
        <div>
          <h2>Jugador 1</h2>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>Puntos: {vidaJugador1}</p>
          <button onClick={decrementarJ1} style={{ marginRight: "10px" }}>-</button>
          <button onClick={incrementarJ1}>+</button>
        </div>

        {/* Interfaz Jugador 2 */}
        <div>
          <h2>Jugador 2</h2>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>Puntos: {vidaJugador2}</p>
          <button onClick={decrementarJ2} style={{ marginRight: "10px" }}>-</button>
          <button onClick={incrementarJ2}>+</button>
        </div>

      </div>

      {/* Botón de reinicio */}
      <div style={{ marginTop: "40px" }}>
        <button onClick={reiniciar}>Reiniciar Partida</button>
      </div>
      
    </div>
  );
}

export default App;