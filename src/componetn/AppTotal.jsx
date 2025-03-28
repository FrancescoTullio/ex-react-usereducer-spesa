function AppTotal ({ list }) {

    const totale = list.reduce((acc, curElem) => {
        acc += curElem.price * curElem.quantity;
        return acc
    }, 0)
return (
    <>
    {
        list.length > 0 && <h1>totale: {totale} €</h1>
    }
    
    </>
)
}

export default AppTotal