const ToolTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <div key={index} className="tool_tag">
          {tag}
        </div>
      ))}
    </div>
  );
};

export default ToolTags;
