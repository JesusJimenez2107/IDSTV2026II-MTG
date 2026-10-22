import Player from "./components/Player";
import usePlayers from "./hooks/usePlayers";

function App() {
    const {
        players,
        decreaseCounter,
        increaseCounter,
        resetPlayerCounter,
        removePlayer,
        addPlayer,
        resetPlayers,
        updateName,
        haveTwoOrMorePlayers,
    } = usePlayers();

    const handleOnResetClick = () => {
        resetPlayerCounter();
    };
    
    const handleOnAddPlayerClick = () => {
        addPlayer();
    };
    
    const handleOnResetPlayersClick = () => {
        resetPlayers();
    };

    return (
        <div style={{ textAlign: "center", padding: "20px", fontFamily: "sans-serif" }}>
            <h1>MTG Lifecounter</h1>
            
            <div style={{ marginBottom: "30px", display: "flex", justifyContent: "center", gap: "10px" }}>
                <button onClick={handleOnResetClick} style={{ padding: "10px 15px", cursor: "pointer" }}>Reset Vidas</button>
                <button onClick={handleOnAddPlayerClick} style={{ padding: "10px 15px", cursor: "pointer" }}>Add player</button>
                {haveTwoOrMorePlayers && (
                    <button onClick={handleOnResetPlayersClick} style={{ padding: "10px 15px", cursor: "pointer" }}>Reset Players</button>
                )}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {players.map((player) => {
                    return (
                        <Player
                            key={player.id}
                            player={player}
                            onIncreaseCounter={() => increaseCounter(player)}
                            onDecreaseCounter={() => decreaseCounter(player)}
                            onDeletePlayer={() => removePlayer(player.id)}
                            onNameChange={(newName) => updateName(player.id, newName)}
                            showDeleteButton={haveTwoOrMorePlayers}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;