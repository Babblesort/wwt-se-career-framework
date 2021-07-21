import React from 'react';

const JobTitlesRow = ({ titles }) => {
  return (
    <>
      <div />
      {titles.map((title) => (
        <div className="job-title" key={title}>
          {title}
        </div>
      ))}
    </>
  );
};

export default JobTitlesRow;
