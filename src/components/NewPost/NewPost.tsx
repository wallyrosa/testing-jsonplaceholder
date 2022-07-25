interface NewPostProps{
    title: string | undefined,
    description: string | undefined,
    key: number | undefined
}

export default function NewPost(props: NewPostProps) {
    console.log("NewPost: ",props)
    return(
        <ul>
            
            <li key={props.key}>
                <h3>Titulo:</h3>
                <span>{props.title}</span>    
                <h3>Post:</h3>
                <span>{props.description}</span>    
            </li>
        </ul>
    )
}