import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
state ={
  showitem:false
}
  componentDidMount () {
    const script = document.createElement("script");

    //script.src = "https://apps.bazaarvoice.com/deployments/agileville/parthitest/staging/en_US/bv.js";
    script.src = "https://apps.bazaarvoice.com/deployments/agileville/prashantkt/staging/en_US/bv.js";
    script.async = true;

    document.body.appendChild(script);
    setTimeout(
      () => this.setState({ showitem: true }), 
      5000
    );
}

  render() {
    return (
      <div className="App">
        <div className="row">
          <div data-bv-product-id="product1" itemscope itemtype="http://schema.org/Product">
          <img src="https://placehold.it/150x200" alt="image for product1" />
          <div itemprop="name" className="product_name">Product 1</div>
          <div className="product_cost">$9000.01</div>
          <div data-bv-show="inline_rating"></div>
          </div>
          {this.state.showitem === true ? 
          <div>
          <div className="row">
              <div data-bv-product-id="product2" itemscope itemtype="http://schema.org/Product">
              <img src="https://placehold.it/150x200" alt="image for product2" />
              <div itemprop="name" className="product_name">Product 2</div>
              <div className="product_cost">$12.34</div>
              <div data-bv-show="inline_rating"></div>
              </div>
              </div>
              <div className="row">
              <div data-bv-product-id="product3" itemscope itemtype="http://schema.org/Product">
                <img src="https://placehold.it/150x200" alt="image for product3" />
                <div itemprop="name" className="product_name">Product 3</div>
                <div className="product_cost">$42.31</div>
                <div data-bv-show="inline_rating"></div>
              </div>
              </div>
              </div>
          : null}
          
        </div>
      </div>
    );
  }
}

export default App;
