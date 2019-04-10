import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getItems } from "../../actions/itemActions";
import Carousel from "./carousel";
import ItemDetails from "./itemDetails";


class ItemList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    const listOfItems = this.props.items.map((item,index) => {
      return (
        <ItemDetails key={index} item={item}/>
      );
    });
    return (
      <div>
        <Carousel/>
        <div className="row" style={{marginTop:'15px'}}>
        {listOfItems}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    items: state.itemReducer.items
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getItems }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
