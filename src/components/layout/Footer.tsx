import { FaXTwitter, FaReddit, FaDiscord } from "react-icons/fa6";

const footerNavs = [
  {
    label: "Resources",
    items: ["Contact", "Support", "Documentation", "Pricing"],
  },
  {
    label: "About",
    items: ["Terms", "License", "Privacy", "About Us"],
  },
  {
    label: "Explore",
    items: ["Showcase", "Roadmap", "Languages", "Blog"],
  },
  {
    label: "Company",
    items: ["Partners", "Team", "Careers"],
  },
];

const Footer = () => {
  return (
    <footer className="pt-6 bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="flex flex-1 space-y-0 mt-6 justify-between">
          {footerNavs.map((item, i) => (
            <ul className="space-y-4 text-gray-300" key={i}>
              <h4 className="text-gray-200 font-semibold">{item.label}</h4>
              {item.items.map((item, i) => (
                <li key={i}>
                  <a className="duration-150 hover:text-gray-400 hover:cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="flex mt-10 py-10 border-t border-gray-700 items-center justify-between">
          <p className="text-gray-300 text-2xl">Mintable</p>
          <div className="flex items-center gap-x-6 text-gray-400">
            <FaXTwitter size={24} />
            <FaReddit size={24} />
            <FaDiscord size={24} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
