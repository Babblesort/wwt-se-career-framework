import React from 'react';
import classNames from 'classnames';
const JobTitlesRow = ({ titles, activeJobTitle, onClick }) => {
  const handleClick = (title) => {
    const nextActiveTitle = title === activeJobTitle ? null : title;
    onClick(nextActiveTitle);
  };

  return (
    <>
      <div />
      {titles.map((title) => {
        const titleClass = classNames('job-title', {
          inactive: activeJobTitle != null && title !== activeJobTitle,
        });

        return (
          <button
            type="button"
            className={titleClass}
            key={title}
            onClick={() => handleClick(title)}
          >
            {title}
          </button>
        );
      })}
    </>
  );
};

export default JobTitlesRow;
