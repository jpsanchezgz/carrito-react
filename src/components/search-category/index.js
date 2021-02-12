

function searchCategory ( props ) {
    return(
        <>
        <h2>Busca por categoría</h2>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Categorías</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01" onChange={ props.listToFilterByPrice}>
                <option selected>Choose...</option>
                <option value="electronicos">Electrónico</option>
                <option value="cocina">Cocina</option>
                <option value="casa">Casa</option>
            </select>
        </div>
        </>
    )
}

export default searchCategory