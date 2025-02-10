import ProfileImage from "./ProfileImage";
import ProfileIcons from "./ProfileIcons";
import ProfileDetails from "./ProfileDetails";
import AboutText from "../AboutText";

export default function AboutMe() {
  return (
    <div id="aboutme" className="section">
      <div className="aboutme-profile">
        <ProfileImage />
        <ProfileIcons />
        <ProfileDetails />
      </div>
      <AboutText />
    </div>
  );
}
