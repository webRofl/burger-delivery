import React from 'react';
import propTypes from 'prop-types';
import Shipment from './Shipment';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends React.Component {
  static propTypes = {
    burgers: propTypes.object,
    order: propTypes.object,
    deleteFromOrder: propTypes.func,
  };

  renderOrder = (key) => {
    const burger = this.props.burgers[key];
    const count = this.props.order[key];
    const isAvailable = burger && burger.status === 'available';

    const transitionOptions = {
      classNames: 'order',
      key,
      timeout: { enter: 500, exit: 500 },
    };

    if (!burger) return null;

    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li className="unavailable" key={key}>
            Sorry {burger.name ? burger.name : 'burger'} is not available
          </li>
        </CSSTransition>
      );
    }

    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition
                classNames="count"
                key={count}
                timeout={{ enter: 500, exit: 500 }}
              >
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            <span>&nbsp;{burger.name}</span>
            <span> {count * burger.price} ₽ </span>
            <button
              className="cansellItem"
              onClick={() => this.props.deleteFromOrder(key)}
            >
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((acc, key) => {
      const burger = this.props.burgers[key];
      const count = this.props.order[key];

      const isAvailable = burger && burger.status === 'available';

      if (isAvailable) acc += burger.price * count;

      return acc;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        {total > 0 ? (
          <Shipment total={total} />
        ) : (
          <div className="nothingSelected">
            Select burgers and add to the menu
          </div>
        )}
      </div>
    );
  }
}

export default Order;
