import { FaGithub, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';

const SocialMedia: any = () => {
  return (
    <div className="flex items-center gap-4 ml-1 blur-animation">
      {/* <SocialMediaLink
        icon={FaInstagram}
        href="https://www.instagram.com/leogytis"
      /> */}
      {/* <SocialMediaLink
        icon={FaFacebookF}
        href="https://www.facebook.com/leogytis"
      /> */}
      <SocialMediaLink
        icon={FaLinkedinIn}
        href="https://www.linkedin.com/in/leogytis"
      />
      <SocialMediaLink icon={FaGithub} href="https://github.com/LeoGytis" />
      <SocialMediaLink icon={FaPaperPlane} href="mailto:leogytis@gmail.com" />
    </div>
  );
};

export default SocialMedia;

interface SocialMediaLinkProps {
  icon: React.ElementType;
  href: string;
}

const SocialMediaLink = ({ icon: Icon, href }: SocialMediaLinkProps) => {
  return (
    <a
      href={href}
      className="p-2 border rounded-full cursor-pointer group border-secondary hover:shadow-border hover:bg-background"
    >
      <Icon className="text-lg text-secondary group-hover:text-primary" />
    </a>
  );
};
