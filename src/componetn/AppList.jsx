function AppList({ list }) {
    

    return (
        <>
            <h1>lista della spesa...</h1>
            {
                list.length === 0 ? <p>nessun articolo aggiunto</p> :
                    <div className="row row-cols-4">
                        {
                            list.map((curElem, index)=> {
                                return (
                                    <div key={index} className="card text-center">
                                        <p>{curElem.name}</p>
                                        <p>{curElem.price} €</p>
                                        <p>{curElem.quantity} quantità</p>
                                    </div>
                                )
                            })
                        }
                    </div>
            }
        </>
    )
}

export default AppList