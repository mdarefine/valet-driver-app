import React from "react";

type IfElseProps = {
  condition: boolean;
  ifCondition: React.ReactNode;
  elseCondition: React.ReactNode;
};
const IfElse = ({ condition, ifCondition, elseCondition }: IfElseProps) => {
  return <>{condition ? ifCondition : elseCondition}</>;
};

export default IfElse;
