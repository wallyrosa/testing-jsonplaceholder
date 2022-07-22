export default function Form() {
    return (
        <>
        <form action="submit">
            <h3>Titulo</h3>
            <input type="text" />
            <h3>Descrição</h3>
            <textarea name="description" id="description" cols={30} rows={5}></textarea>
            <button>Postar</button>
        </form>
        </>
    );
}