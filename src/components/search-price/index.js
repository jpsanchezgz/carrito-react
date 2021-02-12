

function searchPrice ( props ) {
    return( 
       <>
        <h2>Busca por precio</h2>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">$</span>
                <span className="input-group-text">0.00</span>
            </div>
            <input type="text" className="form-control" onChange={props.listToFilterByPrice} />
        </div>
       </>
        
    )
}

export default searchPrice