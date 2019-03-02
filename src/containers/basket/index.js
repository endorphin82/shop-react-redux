import React from "react";
import { connect } from "react-redux";
import { getTotalBasketPrice, getBasketWithCount } from "../../selectors";
import * as R from "ramda";

const Basket = ({ phones, totalPrice }) => {
  const isBasketEmpty = R.isEmpty(phones);
  const renderContent = () => (
    <div>
      {isBasketEmpty && <div> Your shopping cart is empty</div>}

      <div className="table-responsive">
        <table className="table-bordered table-striped table-condensed cf">
          <tbody>
          {phones.map((phone, indx) => (
            <tr
              key={indx}
              className="item-checkout"
            >
              <td className="first-column-checkout">
                <img
                  className="img-thumbnail"
                  src={phone.image}
                  alt={phone.name}
                />
              </td>
              <td>{phone.name}</td>
              <td>{phone.price}</td>
              <td>{phone.count}</td>
              <td>
                <span className="delete-cart"/>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      {
        R.not(isBasketEmpty) &&
          <div className="row">
            <div className="pull-right total-user-checkout">
              <b>Total</b>
              ${totalPrice}
            </div>
          </div>
      }
    </div>
  );
  const renderSidebar = () => (
    <div>
      Sidebar
    </div>
  );
  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            {renderContent()}
          </div>
          <div className="com-md-3 btn-user-checkout">
            {renderSidebar()}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  phones: getBasketWithCount(state),
  totalPrice: getTotalBasketPrice(state)
});

export default connect(mapStateToProps, null)(Basket);