interface TagProps {
  label: string;
}

export const Tag: React.FC<TagProps> = ({ label }) => (
  <span className="text-secondary-text flex items-center justify-center rounded-full bg-[#18181b] px-4 py-2 text-xs">
    {label}
  </span>
);
