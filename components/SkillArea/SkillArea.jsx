const SkillArea = (props) => {
  return (
    <div>
      <h2 className="mb-1">FRONTEND</h2>
      <div className="flex gap-4">{props.children}</div>
    </div>
  );
};

export default SkillArea;
