const Skill = ({ text, color }) => {
  return (
    <div
      className="text-xs w-auto h-6 py-1 px-4 rounded-full"
      style={{ backgroundColor: color, color: "var(--bluedark)" }}
    >
      <span>{text}</span>
    </div>
  );
};

module.exports = Skill;
