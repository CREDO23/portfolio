export default function SocialMediaItem({
  icon,
  label,
  link,
}: IsocialmediaProps): JSX.Element {
  return (
    <a href={link} className="flex items-center justify-center gap-1">
      <span className="text-yellow-500 h-6 w-6 flex items-center justify-center">
        {icon}
      </span>
      <p className=" hidden md:block font-light text-sm">{label}</p>
    </a>
  );
}
