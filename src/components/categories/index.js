import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import classnames from "classnames";
import { getCategories, getActiveCategoryId } from "../../selectors";
import { Link, withRouter } from "react-router-dom";
import * as R from "ramda";

const Categories = ({ categories, activeCategoryId }) => {
  console.log("activeCategoryId", activeCategoryId);
  const renderCategory = (category, index) => {
    const getActiveState = R.propEq("id", activeCategoryId);
    const linkClass = classnames({
      "list-group-item": true,
      "active": getActiveState(category) || activeCategoryId === "/"
    });
    return (
      <Link
        to={`/categories/${category.id}`}
        className={linkClass}
        key={index}
      >
        {category.name}
      </Link>
    );
  };

  const renderAllCategories = () => {
    const linkClass = classnames({
      "list-group-item": true,
      "active": R.isNil(activeCategoryId) || activeCategoryId === "/"
    });
    return (
      <Link
        to='/'
        className={linkClass}
      >
        All
      </Link>
    );
  };
  return (
    <div className="well">
      <h4>Brand</h4>
      <div className="list-group">
        {renderAllCategories()}
        {categories.map((category, index) => renderCategory(category, index))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return  ({
    categories: getCategories(state),
    activeCategoryId: getActiveCategoryId(ownProps)
    // activeCategoryId: ownProps.match.params.id
  });
};

export default compose(
  withRouter,
  connect(mapStateToProps, null)
)(Categories);

// export default connect(mapStateToProps, null)(Categories);