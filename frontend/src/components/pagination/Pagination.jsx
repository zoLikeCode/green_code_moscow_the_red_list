import React, { useState } from 'react';
import css from './Pagination.module.css';
import { PaginationBlock } from '../ui/paginationBlock/PaginationBlock';
import { LeftArrow } from '../../assets/LeftArrow';
import { getPagesArray } from '../../utils/pages';
import { RightArrow } from '../../assets/RightArrow';
import ReactPaginate from 'react-paginate';

export const Pagination = ({ totalCountPages, nowPage }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
    nowPage(selectedPage.selected);
  };

  return (
    <div className={css.mainContainer}>
      <ReactPaginate
        previousLabel={<LeftArrow />}
        nextLabel={<RightArrow />}
        breakLabel={'...'}
        breakClassName={css.noActivity}
        pageCount={totalCountPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={4}
        onPageChange={handlePageChange}
        containerClassName={css.pagination}
        pageClassName={css.noActivity}
        activeClassName={css.active}
        previousClassName={css.noActivity}
        nextClassName={css.noActivity}
      />
    </div>
  );
};
