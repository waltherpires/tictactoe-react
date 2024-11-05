const initialLog = "";

export default function Log({ turns }){
  let turnsLog = initialLog;

  for(const turn of turns){
    const { square, player } = turn;
    const { row, col } = square;

    const actualPlayer = player === 'X' ? "1" : "2"; 
    turnsLog += `\n Player ${actualPlayer} placed an ${player} on [${row}][${col}]`
  }

  return <ol id="log">
    {turnsLog} 
  </ol>
}