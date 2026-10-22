import type { IPlayer } from "../hooks/usePlayers";

interface PlayerProps {
    player: IPlayer;
    onIncreaseCounter: () => void;
    onDecreaseCounter: () => void;
    onDeletePlayer: () => void;
    onNameChange: (newName: string) => void;
    showDeleteButton?: boolean;
}

function Player({
    player,
    onIncreaseCounter,
    onDecreaseCounter,
    onDeletePlayer,
    onNameChange,
    showDeleteButton = true,
}: PlayerProps) {
    return (
        <div style={{ border: "2px solid #ccc", padding: "20px", borderRadius: "10px", margin: "10px", minWidth: "220px", textAlign: "center", backgroundColor: "#f9f9f9" }}>
            <input
                type="text"
                value={player.name}
                onChange={(e) => onNameChange(e.target.value)}
                style={{ fontSize: "1.2rem", fontWeight: "bold", textAlign: "center", marginBottom: "15px", width: "90%", padding: "5px" }}
            />
            
            <h3 style={{ fontSize: "2.5rem", margin: "10px 0", color: "#d32f2f" }}>{player.counter}</h3>
            
            <div style={{ marginBottom: "15px" }}>
                <button onClick={onDecreaseCounter} style={{ marginRight: "10px", padding: "8px 15px", fontSize: "18px" }}>-</button>
                <button onClick={onIncreaseCounter} style={{ padding: "8px 15px", fontSize: "18px" }}>+</button>
            </div>
            
            {showDeleteButton && (
                <button onClick={onDeletePlayer} style={{ backgroundColor: "#ff4d4d", color: "white", border: "none", padding: "8px 12px", borderRadius: "5px", cursor: "pointer", marginTop: "10px" }}>
                    Delete
                </button>
            )}
        </div>
    );
}

export default Player;