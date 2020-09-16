import React from "react";

// Styles
import "./ContentHeader.sass";

function ContentHeader({ title }) {
  return (
    <div className="content-header">
      <h2 className="content-header__title">Піца</h2>
      <div className="content-header__hr"></div>
    </div>
  );
}

export default ContentHeader;
