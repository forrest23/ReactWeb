/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import TodoType from '../types/TodoType';
import { Todo } from '../models';


const todos = {
  type: new List(TodoType),
  resolve: () => {
    const todo = Todo.findAll();
    return todo;
  },
};

export default todos;
