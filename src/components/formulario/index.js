import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ProductForm extends Component {
    constructor(props){
        super( props )
        this.state = {
            newProduct: {}
        }
        this.createProductHandler = this.createProductHandler.bind(this)
    }

    createProductHandler( event ){
        let property = event.target.name
        let value = event.target.value
        let productObject = this.state.newProduct
        productObject[property] = value
        console.log(productObject)
        this.setState({ newProduct: productObject})
    }

    render(){
        return(
            <>
            <h2>Ingresa un producto nuevo</h2>
             <Form className='my-form p-3'>
                <FormGroup>
                    <Label>Nombre del producto</Label>
                    <Input type="text" name="name" placeholder="Refrigerador" onChange={this.createProductHandler} />
                </FormGroup>
                <FormGroup>
                        <Label className="mr-3">Selecciona una categoría</Label>
                        <select name="category" id="" onChange={this.createProductHandler}>
                            <option value="electronicos">Electrónico</option>
                            <option value="cocina">Cocina</option>
                            <option value="casa">Casa</option>
                        </select>
                </FormGroup>
                <FormGroup>
                    <Label>Precio</Label>
                    <Input type="text" name="price" placeholder="0" onChange={this.createProductHandler}/>
                </FormGroup>
                <FormGroup>
                    <Label>URL de la imagen</Label>
                    <Input type="text" name="picUrl" placeholder="http//:www.imagen.com" onChange={this.createProductHandler}/>
                </FormGroup>
                <Button type="button" className="success rounded" onClick={
                    () => {
                        this.props.saveHandler(this.state.newProduct)
                    }
                    }>Agregar Prodcuto</Button>
            </Form>
            </>
        )
    }
}


export default ProductForm