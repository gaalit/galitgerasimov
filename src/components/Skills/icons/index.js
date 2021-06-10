import React from "react";
import classNames from "classnames";
import ReactIcon from "./svg/react.js";
import ReduxIcon from "./svg/redux.js";
import JavaScriptIcon from "./svg/javascript.js";
import TypeScriptIcon from "./svg/typescript.js";
import CSSIcon from "./svg/css.js";
import HTMLIcon from "./svg/html.js";
import RubyIcon from "./svg/ruby.js";
import SassIcon from "./svg/sass.js";
import PSQLIcon from "./svg/psql.js";
import NodeJsIcon from "./svg/nodejs.js";
import JQueryIcon from "./svg/jquery.js";
import RailsIcon from "./svg/rails.js";
import BootstrapIcon from "./svg/bootstrap.js";
import ExpressIcon from "./svg/express.js";

const tidy = (string) => string.toLowerCase().trim();

const getIcon = (name, color = "#f4a261") => {
  // const color = "#f4a261";
  switch (tidy(name)) {
    case "react":
      return <ReactIcon color={color} />;
    case "javascript":
      return <JavaScriptIcon color={color} />;
    case "typescipt":
      return <TypeScriptIcon color={color} />;
    case "css":
      return <CSSIcon color={color} />;
    case "html":
      return <HTMLIcon color={color} />;
    case "ruby":
      return <RubyIcon color={color} />;
    case "sass":
      return <SassIcon color={color} />;
    case "psql":
      return <PSQLIcon color={color} />;
    case "nodejs":
      return <NodeJsIcon color={color} />;
    case "jquery":
      return <JQueryIcon color={color} />;
    case "redux":
      return <ReduxIcon color={color} />;
    case "rails":
      return <RailsIcon color={color} />;
    case "bootstrap":
      return <BootstrapIcon color={color} />;

    case "express":
      return <ExpressIcon color={color} />;
    default:
      return "";
  }
};

const Icons = ({ name, classes, color }) => (
  <div id={`${tidy(name)}-logo-icon`} className={classNames("icon", classes)}>
    {getIcon(tidy(name), color)}
  </div>
);

export default Icons;
