
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

function productList (props) {
  return (

    props.listHandler.map(producto => {
        return(
            
            <Card className="my-card m-3 p-2">
              <CardImg top width="100px" height="200px" src={producto.picUrl} alt="Card image cap" />
              <CardBody className="my-card-body">
                <CardTitle tag="h5">{producto.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{producto.category}</CardSubtitle>
                <CardText>$ {producto.price} MXN</CardText>
                <Button type="button" >Agregar al carrito</Button>
              </CardBody>
            </Card>
        
        )
    })
  );
};

export default productList;

