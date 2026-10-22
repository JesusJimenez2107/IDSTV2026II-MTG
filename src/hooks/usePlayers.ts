import { useState } from "react";

export interface IPlayer {
    counter: number;
    id: string;
    name: string;
}

const DEFAULT_COUNTER = 20;

const DEFAULT_PLAYERS: IPlayer[] = [
    {
        id: crypto.randomUUID(),
        counter: DEFAULT_COUNTER,
        name: "Jugador 1"
    },
    {
        id: crypto.randomUUID(),
        counter: DEFAULT_COUNTER,
        name: "Jugador 2"
    }
];

const usePlayers = () => {
    const [players, setPlayers] = useState<IPlayer[]>(DEFAULT_PLAYERS);
    
    const addPlayer = () => {
        const newPlayer: IPlayer = {
            counter: DEFAULT_COUNTER,
            id: crypto.randomUUID(),
            name: `Jugador ${players.length + 1}`,
        };
        setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
    };

    const removePlayer = (id: string) => {
        setPlayers((prevPlayers) => prevPlayers.filter((player) => player.id !== id));
    };

    const updateCounter = (id: string, value: number) => {
        setPlayers((prevPlayers) => prevPlayers.map(p => {
            if (id === p.id) {
                return { ...p, counter: value };
            }
            return p;
        }));
    };

    const updateName = (id: string, newName: string) => {
        setPlayers((prevPlayers) => prevPlayers.map(p => {
            if (id === p.id) {
                return { ...p, name: newName };
            }
            return p;
        }));
    };

    const increaseCounter = (player: IPlayer) => {
        updateCounter(player.id, player.counter + 1);
    };

    const decreaseCounter = (player: IPlayer) => {
        if (player.counter === 0) return;
        updateCounter(player.id, player.counter - 1);
    };

    const resetPlayers = () => {
        setPlayers(DEFAULT_PLAYERS);
    };

    const resetPlayerCounter = () => {
        setPlayers((prevPlayers) => prevPlayers.map(p => ({
            ...p,
            counter: DEFAULT_COUNTER
        })));
    };

    const haveTwoOrMorePlayers = players.length > 2;

    return {
        players,
        addPlayer,
        removePlayer,
        updateCounter,
        updateName,
        increaseCounter,
        decreaseCounter,
        resetPlayers,
        resetPlayerCounter,
        haveTwoOrMorePlayers,
    };
};

export default usePlayers;