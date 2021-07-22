import React from 'react';
import classNames from 'classnames';
const JobTitlesRow = ({ titles, activeTitle, onTitleChange }) => {
  const handleClick = (title) => {
    const nextActiveTitle = title === activeTitle ? null : title;
    onTitleChange(nextActiveTitle);
  };

  return (
    <>
      <div />
      {titles.map((title) => {
        const titleClass = classNames('job-title', {
          inactive: activeTitle != null && title !== activeTitle,
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
