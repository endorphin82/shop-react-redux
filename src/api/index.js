/*
* use http://www.mocky.io
* application/json UTF-8
* Custom headers Access-Control-Allow-Origin : *
* */
import * as R from "ramda";
// import request from "superagent";
import axios from "axios";

import phones from "./mockPhones";
import categories from "./mockCategories";

export const fetchPhones = async () => {
  return await axios
    .get("http://www.mocky.io/v2/5c7cd031100000d415760c07" )
    .then(res => res.data.phones);

  // const { body } = await request
  //   .get("http://www.mocky.io/v2/5c7cd031100000d415760c07");
  //   return body.phones;

  // return new Promise(resolve => {
  //   resolve(phones);
  // });
};

export const loadMorePhones = async ({ offset }) => {
  return new Promise(resolve => {
    resolve(phones);
  });
};

export const fetchPhoneById = async (id) => {
  return new Promise((resolve, reject) => {
    const phone = R.find(R.propEq("id", id), phones);
    resolve(phone);
  });
};

export const fetchCategories = async () => {
  return new Promise(resolve => {
    resolve(categories);
  });
};