import React, { Component } from 'react';
import item_img from "../../../public/images/item_img.jpg";
import "../../../public/stylesheets/style.css";


class ItemDetails extends Component {
    render() {
        const {item}=this.props;
        return (
            <div className="col-sm-4">
              <div className="row custom-card">
                  <div className="col-sm-6">
                      <img src={item_img} width="100%" height="90%"/>
                  </div>
                  <div className="col-sm-6">
                          <div>{item.name}</div>
                          <h5>{item.description}</h5>
                          <p>Price: Rs {item.price}</p>
                          <a href="#" class="btn btn-primary">Add to cart</a>
                      
                    </div>
                </div>             
            </div>
        );
    }
}

export default ItemDetails;