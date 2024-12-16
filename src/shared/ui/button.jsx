export default function Button({ textButton, funcBatton, className }) {
  return <button onClick={funcBatton} className={className}>{textButton}</button>;
}
