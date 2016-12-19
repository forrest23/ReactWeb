/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import Model from '../sequelize';

const Todo = Model.define('Todo', {

  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  content: {
    type: DataType.STRING(1000),
  },

  updated_at: {
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  },

  status: {
    type: DataType.BOOLEAN,
    defaultValue: false,
  },

}, {
  tableName: 'todo',
  timestamps: false,
});

export default Todo;
