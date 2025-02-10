export default function Button({ buttonText, href, icon }) {
  const isInternalLink = href.startsWith("#");

  return (
    <a
      href={href}
      className="contact-button"
      {...(isInternalLink
        ? {}
        : { target: "_blank", rel: "noopener noreferrer" })}
    >
      {icon && <i className={icon}></i>}
      {buttonText}
    </a>
  );
}
