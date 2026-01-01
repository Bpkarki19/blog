import { useEffect, useState } from 'react';
import Tag from '../components/UI/Tag'
import api from '../services/api';
export default function PopularTags() {
    const [tags, setTags] = useState([]);
    
    useEffect(()=>{
        const getData = async ()=>{
            try{
            const response = await api.get('/tags');
            console.log(response.data.tags);
            setTags(response.data.tags);
        }catch(errors){
            console.error(errors);
        }

        };
        getData();

        
    },[]);//run once
    
    return (
        <div className='max-w-7xl mx-auto border border-[#AAAAAA] rounded-md p-1 px-5 pb-[16px]'>
            <h1 className='pb-2'>Popular tags</h1>
            <div className='flex flex-wrap gap-2'>
                {tags.slice(0,10).map(tag=>
                    <Tag key={tag} clickable>{tag}</Tag>
                )}
            </div>

        </div>
    )
}