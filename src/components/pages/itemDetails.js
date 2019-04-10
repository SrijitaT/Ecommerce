import React, { Component } from 'react';
import item_img from "../../../public/images/item_img.jpg";
class ItemDetails extends Component {
    render() {
        const {item}=this.props;
        return (
            <div className="col-sm-4">
            <div className="card border-default mb-3" style={{maxWidth: '18rem'}}>
  <div className="card-header bg-transparent border-default">{item.name}</div>
  <div className="card-body text-primary">
    <h5 className="card-title">{item.description}</h5>
    <p className="card-text">Price: Rs {item.price}</p>
  </div>
  <div className="card-footer bg-transparent border-default">
  <a href="#" class="btn btn-warning">Add to cart</a>
  </div>
</div>
            </div>
        );
    }
}

export default ItemDetails;