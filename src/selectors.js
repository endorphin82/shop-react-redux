import * as R from "ramda";

export const getPhoneById = (state, id) => R.prop(id, state.phones);

export const getPhones = (state, ownProps) => {
  const activeCategoryId = getActiveCategoryId(ownProps);

  const applySearchCaseInsensitive = item => R.contains(
    R.toLower(state.phonesPage.search),
    R.toLower(R.prop("name", item))
  );

  const applyCategory = item => R.equals(
    activeCategoryId,
    R.prop("categoryId", item)
  );
// todo refactor to declarative
  if (activeCategoryId === "/") {
    return R.compose(
      R.filter(applySearchCaseInsensitive),
      R.map(id => getPhoneById(state, id))
    )
    (state.phonesPage.ids);
  }
  return R.compose(
    R.filter(applySearchCaseInsensitive),
    R.when(R.always(activeCategoryId), R.filter(applyCategory)),
    R.map(id => getPhoneById(state, id))
  )
  (state.phonesPage.ids);
};

export const getRenderedPhonesLength = state => R.length(state.phonesPage.ids);

export const getTotalBasketCount = state => R.length(state.basket);
export const getTotalBasketPrice = state => {
  const totalPrice = R.compose(
    R.sum,
    R.pluck("price"),
    R.map(id => getPhoneById(state, id))
  )(state.basket);
  return totalPrice;
};

export const getCategories = state => R.values(state.categories);

// export const getActiveCategoryId = ownProps => {
//   R.path(['params', 'id'], ownProps);
//   console.log(ownProps.match);
// }
export const getActiveCategoryId = ownProps => {
// return R.path(['params', 'id'], ownProps);
// console.log(ownProps.location.pathname.startsWith('/categories'));
  return ownProps.location.pathname.replace("/categories/", "");
};
// export const getActiveCategoryId = ownProps => ownProps.match.params.id;