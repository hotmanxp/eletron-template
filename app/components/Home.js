// @flow
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './home.less';

export default function Home() {
  const [name, setName] = useState('Ethan');
  return (
    <div className={styles.container} data-tid="container">
      <h2>Home2222333</h2>
      <Link to={routes.COUNTER}>to Counter</Link>
      <input value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}
