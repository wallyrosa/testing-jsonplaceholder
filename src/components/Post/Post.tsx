import { useState, useEffect } from "react";
import API from "../../services/axios"

interface Posting {
    userId: number,
    id: number,
    title: string,
    body: string
}

export default function Post() {
const [posting, setPosting] = useState<Posting>()

    window.onload = async function postingFunc() {
        await API.get(`/posts?userId=1`).then((res) => {
            let postingRes = res.data;
            setPosting(postingRes)
            console.log(postingRes)
        })
    }

    return (
        <ul>
            {posting && Object.values(posting).map((posting) => (
                    <li key={posting.id}>
                        <h3>Titulo:</h3>
                        <span>{posting?.title}</span>
                        <h3>Post:</h3>
                        <span>{posting?.body}</span>
                    </li>
                
            ))}
            
        </ul>
    )
}