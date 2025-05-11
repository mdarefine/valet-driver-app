import React from "react";

type Props = {
  ifTrue: boolean;
  children: React.ReactNode;
};
const IF = ({ ifTrue, children }: Props) => {
  return <>{ifTrue && children}</>;
};

export default IF;
