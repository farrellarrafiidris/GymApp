export default function Button(props) {
    const {text} = props;
  return (
    <button className="py-4 px-8 rounded-md border-2 bg-slate-950 blueShadow border-blue-400 border-solid mx-auto">
        <p>{text}</p>
      </button>
  )
}
