


function AppProduct({ products, hendleAdd, hendleRemuve }) {
    return (
        <>
            <div className="row row-cols-4">
                {
                    products.map((curElem, index) => {
                        return (
                            <div key={index} className="card text-center">
                                <p>{curElem.name}</p>
                                <p>{curElem.price} €</p>
                                <button className="btn btn-primary my-2" onClick={() => hendleAdd(curElem)}>Aggiungi alla lista</button>
                                <button className="btn btn-danger my-2" onClick={() => hendleRemuve(curElem)}>rimuovi</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )

}

export default AppProduct