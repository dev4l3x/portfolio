const Skill = ({ text, color }) => {
  return (
    <div
      className="text-xs w-max h-max py-1 px-4 rounded-full"
      style={{ backgroundColor: color }}
    >
      <span>{text}</span>
    </div>
  );
};

module.exports = Skill;
