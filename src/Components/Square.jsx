import "../App.css";

export default function Square({val, chooseSquare, isWinningSquare}){
    return(
        <div className={`square ${isWinningSquare ? 'winningSquare': '' }`}onClick={chooseSquare}>
            {val}
        </div>
    )
}