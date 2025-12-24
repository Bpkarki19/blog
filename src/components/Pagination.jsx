import Button from "./UI/Button";
export default function Pagination({
    totalCount,
    pageSize,//5 number of blog in a page
    currentPage,
    onPageChange
}) {

    //logic for displaying pagination btn 
    const totalpage = Math.ceil(totalCount / pageSize);
    if (totalpage <= 1) return null;

    let startingPage;
    let endingPage;

    if (currentPage <= 4) {
        startingPage = 1;
        endingPage = 7;
    } else if (currentPage + 3 >= totalpage) {
        startingPage = currentPage - 3;
        endingPage = totalpage;

    } else {
        startingPage = currentPage - 3;
        endingPage = currentPage + 3;
    }



    const pages = [];
    for (let i = startingPage; i <= endingPage; i++) {
        pages.push(i);
    }


    return (
        <div className="flex justify-center my-10">
            <div className="flex border border-gray-300 rounded-md overflow-hidden shadow-sm">
                {pages.map((page) => (
                    <Button
                        key={page}
                        variant={page === currentPage ? 'primary' : 'secondary'}
                        className="rounded-none border-y-0 border-r border-gray-300 last:border-r-0 px-4 py-2"
                        onClick={() => onPageChange(page)}>

                        {page}
                    </Button>
                ))}
            </div>
        </div>
    );
}