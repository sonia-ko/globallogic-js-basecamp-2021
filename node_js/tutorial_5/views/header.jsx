import "./index.css";

export default function Header({ contentPages }) {
  return (
    <div className="header">
      {contentPages.map((page) => (
        <button key={page}>
          <a href={`/${page}`}>{page}</a>
        </button>
      ))}
    </div>
  );
}
