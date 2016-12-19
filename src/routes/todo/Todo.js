/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { Table } from 'antd';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Todo.css';

const { Column } = Table;

class Todo extends React.Component {
  static propTypes = {
    todoss: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Table dataSource={this.props.todoss} bordered pagination={false}>
            <Column
              title="id"
              dataIndex="id"
              key="id"
            />
            <Column
              title="content"
              dataIndex="content"
              key="content"
            />
          </Table>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Todo);
