import React from 'react';
import propTypes from 'prop-types';

class EditBurgerForm extends React.Component {
  static propTypes = {
    burger: propTypes.shape({
      image: propTypes.string,
      name: propTypes.string,
      price: propTypes.number,
      desc: propTypes.string,
      status: propTypes.string,
    }),
    index: propTypes.string,
    updateBurger: propTypes.func,
    deleteBurger: propTypes.func,
  };

  handleCharge = (event) => {
    const updatedBurger = {
      ...this.props.burger,
      [event.currentTarget.name]:
        event.currentTarget.name === 'price'
          ? Number(event.currentTarget.value) || 0
          : event.currentTarget.value,
    };
    this.props.updateBurger(this.props.index, updatedBurger);
  };

  render() {
    return (
      <div className="burger-edit">
        <input
          name="name"
          type="text"
          value={this.props.burger.name}
          onChange={this.handleCharge}
        />
        <input
          name="price"
          type="text"
          value={this.props.burger.price}
          onChange={this.handleCharge}
        />
        <select
          name="status"
          className="status"
          onChange={this.handleCharge}
          value={this.props.burger.status}
        >
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
        <textarea
          name="desc"
          value={this.props.burger.desc}
          onChange={this.handleCharge}
        />
        <input
          name="image"
          type="text"
          value={this.props.burger.image}
          onChange={this.handleCharge}
        />
        <button onClick={() => this.props.deleteBurger(this.props.index)}>
          Delete Burger
        </button>
      </div>
    );
  }
}

export default EditBurgerForm;
