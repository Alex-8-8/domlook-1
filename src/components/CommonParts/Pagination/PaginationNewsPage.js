import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import clsx from "clsx";
import "./Pagination.scss";
import { paginateNewsCreator } from "../../../redux/actionCreators";

const PaginationNews = ({ totalItems, itemsPerPage, paginateNews, currentPageNews }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  // console.log(currentPageNews)

  return (

    <div className="common-pagination">
      <div className="common-pagination__wrapper">
        <button
          type="button"
          onClick={() => {
            window.scrollTo(0, 0);
            paginateNews(currentPageNews - 1);
          }}
          className={clsx(
            "common-pagination__button",
            currentPageNews === 1 && "common-pagination__button--hidden"
          )}
        >
          ‹
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => {
              window.scrollTo(0, 0);
              paginateNews(number);
            }}
            type="button"
            className={clsx(
              "common-pagination__button",
              currentPageNews === number && "common-pagination__button--active"
            )}
          >
            {number}
          </button>
        ))}
        <button
          type="button"
          onClick={() => {
            window.scrollTo(0, 0);
            paginateNews(currentPageNews + 1);
          }}
          className={clsx(
            "common-pagination__button",
            currentPageNews === Math.ceil(totalItems / itemsPerPage) && "common-pagination__button--hidden"
          )}
        >
          ›
        </button>
      </div>
    </div>
  );


};

const mapStateToProps = (state) => ({
  itemsPerPage: state.paginationReducer.itemsPerPage,
  // totalItemsCount: state.mainReducer.totalItemsCount,
  currentPageNews: state.paginationReducer.currentPageNews,
  // currentPageNews: state.filterCategoryReducer.currentPageNews,
  // state: state.filterCategoryReducer,
});

const mapDispatchToProps = (dispatch) => ({
  paginateNews: (number) => dispatch(paginateNewsCreator(number)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(PaginationNews);

export { Enhanced as PaginationNews };

PaginationNews.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPageNews: PropTypes.number.isRequired,
  paginateNews: PropTypes.func.isRequired,
};
