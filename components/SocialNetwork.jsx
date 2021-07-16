import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as brand_icons from "@fortawesome/free-brands-svg-icons";
import * as solid_icons from "@fortawesome/free-solid-svg-icons";

const SocialNetwork = ({ icon, link, className }) => {
  return (
    <a href={link} target="_blank" className={className}>
      <FontAwesomeIcon
        icon={brand_icons[icon] || solid_icons[icon]}
        className="text-4xl"
      />
    </a>
  );
};

export default SocialNetwork;
