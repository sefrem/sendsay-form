import React from "react";
import { connect } from "react-redux";
import { removeFile } from "../redux/files/files.actions";

const AttachedFiles = props => {
  const { files, removeFile } = props;
  return (
    <div>
      {files.map(file => (
        <div onClick={() =>removeFile(file.name)}>{file.name}
        Удалить</div>
      ))}
      
    </div>
  );
};

const mapDispatchToProps = {
  removeFile
};

const mapStateToProps = state => {
  return {
    files: state.files
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AttachedFiles);
