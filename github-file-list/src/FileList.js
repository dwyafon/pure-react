import React from 'react';
import PropTypes from 'prop-types';
import FileListItem from './FileListItem'

const FileList = ({ files }) => (
  <table className='file-list'>
    <tbody>
      {files.map((file) => (
        <FileListItem file={file} key={file.id} />
      ))}
    </tbody>
  </table>
);
FileList.propTypes = {
  files: PropTypes.array,
};

export default FileList;
