import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.css";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...other }) => {
      return <MenuItem key={id} {...other} />;
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
