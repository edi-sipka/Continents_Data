/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../Redux/reducers';

function showCountries() {
  const dispatch = useDispatch;
  const country = useSelector((state) => state.country);
  useEffect(() => {
    dispatch(getList(country));
  }, []);
  return <div className="countries">Show Countries</div>;
}

export default showCountries;
