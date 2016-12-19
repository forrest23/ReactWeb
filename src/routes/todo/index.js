/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Todo from './Todo';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';


export default {

  path: '/todo',

  async action() {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{todos{id,content}}',
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    if (!data || !data.todos) throw new Error('Failed to load the movies data.');

    return {
      title: '代办',
      component: <Layout><Todo todoss={data.todos} />
      </Layout>,
    };
  },

};
