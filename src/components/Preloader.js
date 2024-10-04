import "./Preloader.css";

export default function Preloader({ show = true }) {
  return (
    <>
      {show ? (
        <div className="preloader">
          <div className="preloader__overlay"></div>
          <div className="preloader__circle"></div>
        </div>
      ) : null}
    </>
  );
}
