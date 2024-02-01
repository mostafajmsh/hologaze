export default function MenuTemplate({ wrapperStyles, listStyles, children }) {
  return (
    <div className={wrapperStyles}>
      <ul className={listStyles}>{children}</ul>
    </div>
  );
}
