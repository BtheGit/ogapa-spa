import React from 'react';
import PropTypes from 'prop-types';
import { keyHandler } from '../../utilities';
import './Pager.css';

const formatPagerArray = (total, current) => {
    const pagesFromStart = current;
    const pagesFromEnd = total - current;
    let pages;
    if(pagesFromStart > 5){
        pages = [1, 0, current - 2, current - 1, current];
    }
    else {
        pages = Array(current).fill().map((el, idx) => idx + 1); 
    }
    if(pagesFromEnd > 5) {
        pages = [...pages, current + 1, current + 2, 0, total];
    }
    else {
        const remainingPages = Array(pagesFromEnd).fill().map((el, idx) => current + idx + 1);
        pages = [ ...pages, ...remainingPages ]; 
    }
    return pages;
}

const Pager = ({
    total = 0,
    pageSize = 20,
    startFrom = 1,
    resultsSize = 0,
    onClick = () => {},
}) => {
    const isSinglePageOnly = total <= pageSize;
    if(isSinglePageOnly) {
        return null;
    }

    const isFirstPage = (startFrom + resultsSize) - 1 <= pageSize;
    const isLastPage = startFrom >= total - pageSize;
    const totalPages = Math.ceil(total / pageSize);
    const currentPage = Math.ceil((startFrom + 1) / pageSize);
    const pages = formatPagerArray(totalPages, currentPage);

    return (
        <div className="results__pager-container">
            <div className="results__counter" aria-label="Results count">
                <p>{`${ startFrom } - ${ startFrom + resultsSize } of ${ total }`} results</p>
            </div>
            <div className="results__pager">
                { 
                    !isFirstPage && 
                        <div
                            className='pager__arrow' 
                            tabIndex="0"
                            onClick={ onClick((startFrom - pageSize), false) }
                            onKeyPress={ keyHandler({
                                fn: onClick((startFrom - pageSize), false),
                            })}
                            aria-label="previous results page"
                            role="link"
                        >
                        { '<' }
                        </div> 
                }
                {
                    pages.map((el, idx) => {
                        const isCurrent = currentPage === el;
                        return el
                            ?
                                <div
                                    key={ idx } 
                                    className={ `pager__num ${ isCurrent ? 'pager__num--active' : ''}`}
                                    onClick={ onClick(((el - 1) * pageSize), isCurrent) }
                                    onKeyPress={ keyHandler({
                                        fn: onClick(((el - 1) * pageSize), isCurrent),
                                    })}
                                    tabIndex="0"
                                    role="link"
                                    aria-label={`Results Page ${ el }`}
                                >
                                { el }
                                </div>
                            :
                                <div
                                    element="div"
                                    key={ idx }
                                    className={ `pager__num pager__ellipses`}
                                >
                                ...
                                </div>
                    })
                }
                { 
                    !isLastPage && 
                        <div
                            className='pager__arrow' 
                            tabIndex="0"
                            onClick={ onClick((startFrom + pageSize), false) }
                            onKeyPress={ keyHandler({
                                fn: onClick((startFrom + pageSize), false),
                            })}
                            aria-label="next results page"
                            role="link"
                        >
                        { '>' }
                        </div> 
                }
            </div>
        </div>
    )
}

Pager.propTypes = {
    total: PropTypes.number.isRequired,
    startFrom: PropTypes.number,
    pageSize: PropTypes.number.isRequired,
    resultsSize: PropTypes.number.isRequired,
    onClick: PropTypes.func,
}

export default Pager;