import Tag from '../components/UI/Tag'
export default function PopularTags() {
    return (
        <div className='w-[800px] border-1 border-gray-200 rounded-md p-1 shadow-sm px-5 pb-[16px]'>
            <h1>Popular tags</h1>
            <div className='flex flex-wrap gap-2'>
                <Tag clickable>react</Tag>
                <Tag clickable={true}>Next.js</Tag>
            </div>

        </div>
    )
}