const ToolTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="flex items-center px-3 py-px text-[0.75rem] font-normal border rounded-lg cursor-default bg-background text-secondary border-secondary hover:shadow-border hover:text-primary"
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default ToolTags;
