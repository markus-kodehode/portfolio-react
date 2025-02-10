import Button from "./Button";

export default function Header() {
  return (
    <header id="header">
      <div className="overlay"></div>
      <div className="overlay-content">
        <h1>
          Hi, I'm <span class="highlight">Markus Krey</span>
        </h1>
        <p>Welcome to my site</p>
        <p>I develop front-end solutions for your needs</p>
        <div className="flex-row">
          <Button href="#contact" buttonText="Contact me" />
          <Button
            href="https://github.com/markus-kodehode"
            buttonText="GitHub"
            icon="fa fa-github margin-right"
          />
        </div>
      </div>
    </header>
  );
}
