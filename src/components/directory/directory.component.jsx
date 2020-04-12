import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { DirectoryContainer } from './directory.styles';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => (

  <DirectoryContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryContainer>
);
const stateMapsTpProps = createStructuredSelector({
    sections: selectDirectorySection
})

export default connect(stateMapsTpProps)(Directory);
