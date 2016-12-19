/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

export default {

  path: '/',

  async action() {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{movies{title,alt,original_title,year,images{large},rating{average},directors{name,alt}}comingsoonmovies{title,alt,original_title,year,images{large},rating{average},directors{name,alt}}}',
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    if (!data || !data.movies || !data.comingsoonmovies) throw new Error('Failed to load the movies data.');

    return {
      title: '电影',
      component: <Layout><Home movies={data.movies} comingsoonmovies={data.comingsoonmovies} />
      </Layout>,
    };
  },

};
