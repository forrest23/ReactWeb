/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { Card, Col, Row, Button, Tabs, Icon } from 'antd';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

const TabPane = Tabs.TabPane;

class Home extends React.Component {
  static propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      original_title: PropTypes.string,
      year: PropTypes.string,
    })).isRequired,

    comingsoonmovies: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      original_title: PropTypes.string,
      year: PropTypes.string,
    })).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Tabs defaultActiveKey="1">
            <TabPane tab={<span><Icon type="apple" />正在热映</span>} key="1">
              <div>
                <Row className={s.row}>
                  {this.props.movies.map((item, index) => (
                    <Col span="6" key={index} className={s.col}>
                      <Card className={s.card} bodyStyle={{ padding: 0 }}>
                        <a href={item.alt}>
                          <img alt="" className={s.img} src={item.images.large} />
                        </a>
                        <div className={s.cardText}>
                          <a href={item.alt}><h2>{item.title}</h2></a>
                          <p>导演：<a href={item.directors[0].alt} className={s.rating}>
                            {item.directors[0].name}</a></p>
                          <p>豆瓣评分：<span className={s.rating}>{item.rating.average}</span></p>
                          <p className={s.button}><Button type="primary">选座购票</Button></p>
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </TabPane>
            <TabPane tab={<span className={s.spanText}><Icon type="android" />即将上映</span>} key="2">
              <div>
                <Row className={s.row}>
                  {this.props.comingsoonmovies.map((item, index) => (
                    <Col span="6" key={index} className={s.col}>
                      <Card className={s.card} bodyStyle={{ padding: 0 }}>
                        <a href={item.alt}>
                          <img alt="" className={s.img} src={item.images.large} />
                        </a>
                        <div className={s.cardText}>
                          <a href={item.alt}><h2>{item.title}</h2></a>
                          <p>导演：<a href={item.directors[0].alt} className={s.rating}>
                            {item.directors[0].name}</a></p>
                          <p>豆瓣评分：<span className={s.rating}>{item.rating.average}</span></p>
                          <p className={s.button}><Button type="primary">选座购票</Button></p>
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
