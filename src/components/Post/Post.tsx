import { useState } from "react";
import API from "../../services/axios"

interface Posting{
    userId: number,
    id: number,
    title: string,
    body: string
}

export default function Post() {
const [posting, setPosting] = useState<Posting>()

    window.onload = async function postingFunc() {
        await API.get('/posts').then((res) => {
            let postingRes =  res.data;
            setPosting(postingRes)
        })
    }
    let postingRes = posting;

    return (
        <>
            {Object.values({postingRes}).map((posting) => (
                <>
                    <ul key={posting?.userId}>
                        <h3>Titulo:</h3>
                        <span>{posting?.title}</span>
                        <h3>Post:</h3>
                        <span>{posting?.body}</span>
                        <h3>Id:</h3>
                        <span>{posting?.userId}</span>
                    </ul>
                </>
                
            ))}
            
        </>
    )
}