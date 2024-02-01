export default function Logo(props) {
  return (
    <div className="w-full z-50">
      <p className={props.styles}>
        <span className="text-primaryColor">Holo</span>
        <span className="text-white">Gaze</span>
        <span className="text-primaryColor">.</span>
      </p>
    </div>
  );
}
