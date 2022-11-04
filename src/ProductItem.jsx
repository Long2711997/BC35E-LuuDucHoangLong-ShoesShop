import React, { Component } from 'react'

export default class ProductItem extends Component {

  render() {
    const { shoes, viewDetail } = this.props;
    return (
      <div className="card">
        <img src={shoes.image} alt="..." />
        <div className="card-body bg-dark text-white">
          <h3>
            {shoes.name.length > 10
              ? shoes.name.substring(0, 10) + "..."
              : shoes.name}
          </h3>
          <p>{shoes.price} $</p>
          <p>
            {shoes.description.length > 50
              ? shoes.description.substring(0, 50) + "..."
              : shoes.description}
          </p>
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => {
              viewDetail(shoes);
            }}
          >
            Detail
          </button>
        </div>
      </div>
    );
  }
}
