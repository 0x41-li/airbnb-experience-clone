import airbnbLogo from "../assets/logos/airbnb-logo.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <img className="header__logo" src={airbnbLogo} alt="" />
      </div>
    </div>
  );
}
