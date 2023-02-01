export default function Painel({ result, restart }) {
  return (
    <div className="Painel">
        <div>
            <p>{result}</p>
            <button onClick={restart}>restart</button>
        </div>
    </div>
  )
}
