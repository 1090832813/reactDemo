'use client'

import { redirect } from 'react-router-dom';
import { getAllUser } from '../../api/api'
import MyRouter from "./myRouter";
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

export default function Home() {

  return (
    <Provider store={store}>
      <MyRouter></MyRouter>
      {/* <Link to={'/info'}></Link> */}
    </Provider>
  );
}
