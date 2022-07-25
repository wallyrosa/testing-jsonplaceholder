import { useEffect, useState } from "react";
import NewPost from "../NewPost/NewPost";

interface Post{
    title: string | undefined,
    description: string | undefined,
    id: number | undefined
}

export default function Form() {
    const [description, setDescription] = useState<string>()
    const [title, setTitle] = useState("")
    const [post, setPost] = useState<Post>()
    const [postList, setPostList] = useState<Post[]>([])

    function handlePostForm(e: { preventDefault: () => void; }){
        e.preventDefault()
        setPost({
            title: title,
            description: description,
            id: Math.random()
        })
        
        setTitle("")
        setDescription("")
    }

    useEffect(() => {
        if(post){
            let aux = postList
            aux.push(post)
            setPostList(aux)

        }
    }, [post])

    return (
        <>
            <form action="submit">
                <h3>Titulo</h3>
                <input value={title} onChange={((event) => setTitle(event.target.value))} type="text" />
                <h3>Descrição</h3>
                <textarea value={description} onChange={(event) => setDescription(event.target.value)} name="description" id="description" cols={30} rows={5}></textarea>
                <button type="submit" onClick={(e) => handlePostForm(e)}>Postar</button>
            </form>
            
            {postList && postList.map(item => (
                <NewPost key={item?.id} title={item?.title} description={item?.description} />
            ))}{console.log(postList)}
            
        </>
    );
}