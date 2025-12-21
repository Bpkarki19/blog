import Button from "./UI/Button";
export default function Pagination() {
    const pages = [1, 2, 3, 4, 5];
    const currentPage = 1;

    return (
        <div className="flex justify-center my-10">
            <div className="flex border border-gray-300 rounded-md overflow-hidden shadow-sm">
                {pages.map((page) => (
                    <Button
                        key={page}
                        variant={page === currentPage ? 'primary' : 'secondary'}
                        className="rounded-none border-y-0 border-r border-gray-300 last:border-r-0 px-4 py-2">
                        {page}
                    </Button>
                ))}
            </div>
        </div>
    );
}