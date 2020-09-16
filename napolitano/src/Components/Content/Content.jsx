import React from "react";
import ContentHeader from "./ContentHeader";
import Card from "./Card";

// Styles
import "../Main.sass";
import "./Content.sass";

function Content({ type, title }) {
  return (
    <section className="content">
      <div className="container">
        <ContentHeader title={title} />
        <div className="content__list">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}

export default Content;
