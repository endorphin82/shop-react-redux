import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPhoneById } from "../../actions";
import { getPhoneById } from "../../selectors";
import * as R from "ramda";

class Phone extends Component {

  componentDidMount() {
    this.props.fetchPhoneById(this.props.match.params.id);
  }

  renderFields() {
    const { phone } = this.props;
    const columnFields = R.compose(
      R.toPairs,
      R.pick([
        "cpu",
        "camera",
        "size",
        "weight",
        "display",
        "battery",
        "memory"
      ])
    )(phone);
    // console.log("columnFields", columnFields);
    return (
      columnFields.map(([key, value]) => (
        <div className="column" key={key}>
          <div className="ab-details-title">
            <p>{key}</p>
          </div>
          <div className="ab-details-info">
            {value}
          </div>
        </div>
      ))
    );
  }

  renderContent() {
    const { phone } = this.props;

    return (
      <div className="thumbnail">
        <div className="row">
          <div className="col-md-6">
            <img
              src={phone.image}
              alt={phone.name}
              className="img-thumbnail"
            />
          </div>
          <div className="col-md-6">
            {this.renderFields()}
          </div>
          <div className='caption-full'>
            <h4 style={{ margin: "10px" }} className='pull-right'>${phone.price}</h4>
            <h4>{phone.name}</h4>
            <p>{phone.description}</p>
          </div>
        </div>
      </div>
    );
  }

  renderSidebar() {
    return (
      <div>Sidebar</div>
    );
  }

  render() {
    const { phone } = this.props;
    console.log("phone!", this.props.phone);
    return (
      <div className="view-container">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {phone && this.renderContent()}
            </div>
            <div className="col-md-3">
              {phone && this.renderSidebar()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  phone: getPhoneById(state, state.phonePage.id)
});

const mapDispatchToProps = {
  fetchPhoneById
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);
