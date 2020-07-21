import React, {Component} from "react";
import DanhSachSanPham from './danh-sach-san-pham';
import Modal from './modal';
import data from './data.json';
export default class ShoppingCart extends Component{
    constructor(props){
        super(props);
        this.state = {
            listProduct: data,
            detailProduct: data[0],
            listCart: []
          };
    }
    handleDetailProduct = product => {
        this.setState({
            detailProduct: product
        })
    }
    handleAddCart = product => {
        let listCart = [...this.state.listCart, product];
        this.setState({
            listCart
        })
    }
    render(){
        const {listProduct, detailProduct, listCart} = this.props;
        return(
            <div>
                <h3 className="text-left text-primary">
                        Shopping Cart
                </h3>
                <div className="container">
                    <button className="btn btn-danger"
                            data-toggle = "modal"   
                            data-target = "#modelId"
                    >
                        Giỏ hàng (0)
                    </button>
                </div>
                <DanhSachSanPham 
                    listProduct = {listProduct}
                    detailProduct = {this.handleDetailProduct}
                    addCart = {this.handleAddCart}    
                />
            </div>
        )
    }
}