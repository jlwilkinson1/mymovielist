import React from 'react'; //functional component
import l from 'lodash';

const Pagination = (props)=> {

    const {numberOfMovies, moviesOnPage} = props;
    const pageCount = Math.ceil(numberOfMovies/moviesOnPage);
    if(pageCount===1) return null;
    const numberOfPages = l.range(1,pageCount+1)

    return (
        <nav aria-label="...">
        <ul class="pagination">
        {numberOfPages.map((pages)=>(    
          <li class={props.currentPage === pages ? "page-item active" : "page-item"}
           key={pages}>
            <a class="page-link" onClick={()=>props.pageChange(pages)}>{pages}</a>
          </li> 
          ))} 
        </ul>
      </nav>

    )
}

    export default Pagination;