import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Icon } from "../icon/Icon";

const socialIcons = [
    {
        icon: faFacebook,
        link: "https://www.facebook.com/"
    },
    {
        icon: faTwitter,
        link: "https://twitter.com/"
    },
    {
        icon: faInstagram,
        link: "https://www.instagram.com/"
    },
    {
        icon: faYoutube,
        link: "https://www.youtube.com/"
    }
]

export const IconRenderer = () => {
    return (
        <div className="flex items-center gap-2">
            {socialIcons.map((icon) => (
                <a href="#" className="text-gray-500 hover:text-gray-900"><Icon icon={icon.icon} /></a>
            ))}
        </div>
    )
}