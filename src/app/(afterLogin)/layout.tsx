import React from "react";

const AfterLayout = ({ children }: React.ReactNode) => {
  return (
    <div>
      After Login Layout
      {children}
    </div>
  );
};

export default AfterLayout;
