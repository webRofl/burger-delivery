import React from 'react';
import propTypes from 'prop-types';

class AddBurgerForm extends React.Component {
  static propTypes = {
    addBurger: propTypes.func,
  };

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createBurger = (event) => {
    event.preventDefault();

    const burger = {
      name: this.nameRef.current.value,
      price: Number(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };

    this.props.addBurger(burger);

    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="burger-edit" onSubmit={this.createBurger}>
        <input
          name="name"
          ref={this.nameRef}
          type="text"
          placeholder="Name"
          autoComplete="off"
        />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Price"
          autoComplete="off"
        />
        <select name="status" ref={this.statusRef} className="status">
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Image"
          autoComplete="off"
        />
        <button type="submit">+Add in menu</button>
      </form>
    );
  }
}

export default AddBurgerForm;
