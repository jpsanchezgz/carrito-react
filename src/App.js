
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
          category: "electronicos",
          price: 1000,
          picUrl: "https://picsum.photos/200/300"
        },
        {
          name: "Producto 2",
          category: "cocina",
          price: 50,
          picUrl: "https://picsum.photos/200/300"
        },
        {
          name: "Producto 4",
          category: "casa",
          price: 10000,
          picUrl: "https://picsum.photos/200/300"
        },
      ],
      priceList: [],
      categoryList: [],
    }
    this.saveNewProductHandler = this.saveNewProductHandler.bind( this )
    this.filterByPriceHandler = this.filterByPriceHandler.bind (this)
    this.filterByCategoryHandler = this.filterByCategoryHandler.bind (this)
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

  filterByCategoryHandler ( event ) {
    let categoryToFilter = event.target.value
    let filteredListB = this.state.productsList.filter(item => {
      return categoryToFilter === item.category ? item : null
       
    })

    this.setState({ categoryList: filteredListB })

  }

  render(){
    // let listToPrint = switch (key) {
    //   case value:
        
    //     break;

    //   case value:
        
    //     break;
    
    //   default:
    //     break;
    // }
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
                <SearchCat listToFilterByPrice={this.filterByCategoryHandler}/>
                <SearchPrice listToFilterByPrice={this.filterByPriceHandler} />
              </div>
              <div className="col d-flex justify-content-around">
                <List 
                listHandler= { this.state.categoryList.length ? this.state.categoryList : this.state.productsList }
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
