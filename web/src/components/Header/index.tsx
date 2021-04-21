import React from 'react';
import format from 'date-fns/format';
import ptBr from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';

function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBr,
  })
  return (
    <header className={styles.container}>
      <img src="/logo.svg" alt="Podcastr"/>

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>
    </header>
  );
}

export default Header;