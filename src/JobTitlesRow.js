import React from 'react';
import classNames from 'classnames';
const JobTitlesRow = ({ titles, activeTitle, onClick }) => {
  const handleClick = (title) => {
    const nextActiveTitle = title === activeTitle ? null : title;
    onClick(nextActiveTitle);
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
