import Tag from '../components/UI/Tag'
export default function PopularTags(){
    return(
        <div className='w-[800px] border-1 border-gray-200 rounded-md p-1 shadow-sm'>
            <h1>Popular tags</h1>
            <div>
                <Tag>react</Tag>
            </div>

        </div>
    )
}