
import './App.css';
import React, { Component } from 'react'
import Form from './components/formulario/index'
import List from './components/products-list/index'
import SearchCat from './components/search-category/index'
import SearchPrice from './components/search-price/index'

class App extends Component {
  constructor( props ){
    super( props )
    this.state = {
      productsList: [
        {
          name: "Producto1",
          category: "Electronicos",
          price: 1000,
          picUrl: "https://picsum.photos/200/300"
        },
        {
          name: "Producto 2",
          category: "Electronicos",
          price: 50,
          picUrl: "https://picsum.photos/200/300"
        },
        {
          name: "Producto 4",
          category: "Electronicos",
          price: 10000,
          picUrl: "https://picsum.photos/200/300"
        },
      ],
      priceList: [],
      categoryList: [],
    }
    this.saveNewProductHandler = this.saveNewProductHandler.bind( this )
    this.filterByPriceHandler = this.filterByPriceHandler.bind (this)
  }

  saveNewProductHandler ( product ) {

    this.setState({ productsList: [...this.state.productsList, product]})
  }

  filterByPriceHandler ( event ) {
    let priceToFilter = event.target.value
    let filteredList = this.state.productsList.filter(item => {
      return priceToFilter >= item.price ? item : null
       
    })

    this.setState({ priceList: filteredList })

  }

  render(){
    return(
      <div className="container-fluid all">
        <div className="row">
          <div className="container wrapper rounded">
            <div className="row">
              <div className="col">
                <h1>Bienvenido al Carrito</h1>
                <Form 
                saveHandler={this.saveNewProductHandler}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <SearchCat />
                <SearchPrice listToFilterByPrice={this.filterByPriceHandler} />
              </div>
              <div className="col d-flex justify-content-around">
                <List 
                listHandler= { this.state.priceList ? this.state.priceList : this.state.productsList }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
