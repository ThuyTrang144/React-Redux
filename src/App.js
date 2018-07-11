import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js'
import Intro from './Components/Intro.js'
import Button from './Components/Button.js'
import Product from './Components/Product.js'
import products from './Data/product.js'
import Form from './Components/Form.js'
import SearchBox from './Components/SearchBox.js'
import Rating from './Components/Rating.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: products,
      isForm: false,
      search: ''
    }
  }

  filterProduct = (name) => {
    const number = parseInt(name.split(' ')[1])
    let resultFilter = []
    const preProducts = products
    if(!number) {
      resultFilter = preProducts
    } else {
      if(name.includes('=')) {
        resultFilter = products.filter(p => p.price <= number)
      } else {
        resultFilter = products.filter(p => p.price > number)
      }
    }
    this.setState({
      products: resultFilter
    })
  }

  updateSearch = (search) => {
    this.setState({
      search: search
    })
  }

  gotoForm = () => {
    this.setState({
      isForm: true
    })
  }

  goBack = () => {
    this.setState({
      isForm: false
    })
  }

  renderButton = () => {
    const buttons = [{
      name: 'all',
      onClick: (name) => this.filterProduct(name)
    }, {
      name: '<= 100000',
      onClick: (name) => this.filterProduct(name)
    }, {
      name: '> 100000',
      onClick: (name) => this.filterProduct(name)
    }, {
      name: '+',
      onClick: () => this.gotoForm()
    }]
    return (
      buttons.map((btn, index) => (
        <Button
          key={index}
          nameBtn={btn.name}
          onClick={btn.onClick}
        />
      ))
    )
  }

  render() {
    let {products, search} = this.state
    if(search !== '') {
      products = products.filter(p => p.name.indexOf(search) !== -1)
    }
    console.log(products)
    return (
      <div className="App">
        <Header />
        <Intro />
        {
          this.state.isForm ?
          <Form goBack={this.goBack} /> :
          <div>
            {this.renderButton()}
            <Product products={products} />
          </div>
        }
        <SearchBox updateSearch = {this.updateSearch} />
      </div>
    );
  }
}

export default App;
