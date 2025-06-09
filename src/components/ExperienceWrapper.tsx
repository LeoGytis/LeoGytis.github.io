import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { BsLink45Deg } from 'react-icons/bs';

interface ExperienceProps {
  imageSrc: StaticImageData;
  title: string;
  link: string;
  role: string;
  date: string;
  description: string;
}

const ExperienceWrapper = ({
  imageSrc,
  title,
  link,
  role,
  date,
  description,
}: ExperienceProps) => {
  return (
    <div className="p-4 mb-12 shadow-border group hover:bg-background">
      <div className="flex gap-4 mb-4">
        <Image src={imageSrc} alt={title} className="w-16 h-16 rounded" />
        <div>
          <Link
            href={link}
            className="w-5/6 text-xl font-semibold md:whitespace-nowrap_ group-hover:text-secondary underline-animation text-wrap"
          >
            {title}
            <BsLink45Deg className="absolute top-[6px] right-[-20px] text-secondary link-icon" />
          </Link>
          <h2>{role}</h2>
          <h5 className="text-xs">{date}</h5>
        </div>
      </div>
      <p className="mb-4 text-lg font-light">{description}</p>
    </div>
  );
};

export default ExperienceWrapper;
