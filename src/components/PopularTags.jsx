import Tag from '../components/UI/Tag'
export default function PopularTags() {
    return (
        <div className='max-w-7xl mx-auto border border-[#AAAAAA] rounded-md p-1 px-5 pb-[16px]'>
            <h1 className='pb-2'>Popular tags</h1>
            <div className='flex flex-wrap gap-2'>
                <Tag clickable>react</Tag>
                <Tag clickable={true}>Next.js</Tag>
            </div>

        </div>
    )
}