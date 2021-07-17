const SkillArea = ({ area, children }) => {
  return (
    <div>
      <h2 className="mb-1 mt-10">{area}</h2>
      <div className="flex flex-wrap gap-4">{children}</div>
    </div>
  );
};

export default SkillArea;
