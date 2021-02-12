
import './App.css';
import React, { Component } from 'react'
import Form from './components/formulario/index'
import List from './components/products-list/index'

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
          price: 1000,
          picUrl: "https://picsum.photos/200/300"
        },
        {
          name: "Producto 4",
          category: "Electronicos",
          price: 1000,
          picUrl: "https://picsum.photos/200/300"
        },
      ]
    }
    this.saveNewProductHandler = this.saveNewProductHandler.bind( this )
  }

  saveNewProductHandler ( product ) {

    this.setState({ productsList: [...this.state.productsList, product]})
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
              <div className="col d-flex justify-content-around">
                <List 
                listHandler= { this.state.productsList }
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
