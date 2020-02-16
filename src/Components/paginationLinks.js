import React from 'react'

export default function PaginationLinks({posts, postsPerPage, changePage}) {
    let i = 1;
    const pageNumbers = [];

    for (i; i <= Math.floor(posts.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            <ul>
                {pageNumbers.map(index => {
                    return (
                        <li>
                            {/* href="!#" */}
                            <a onClick={() => changePage(index)}>{index}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
