import React, { useEffect, useState } from 'react';
import useAuth from 'context/auth';
import styles from './home.module.scss';
import MemoryCard, { MemoryCardProps } from 'components/MemoryCard/memory-card';
import { getMemories } from 'services/memories';

const Home = () => {
  document.title = 'Home';

  const { user } = useAuth();
  let [cards, setCards] = useState<MemoryCardProps[]>([]);

  useEffect(() => {
    const loadMemories = () => {
      getMemories()
        .then(
          response => {
            if (response && response.length) {
              cards = response;
              setCards(cards)
            }
          }
        )
    }
    loadMemories();
  }, []);

  return (
    <>
      <div className={styles.welcome}>
        <h1>Hello {user?.username}!</h1>
      </div>

      <div className={styles.container_actions}>
        <div className={styles.add_btn}>
          <span>New Memory</span>
        </div>
      </div>

      <div className={styles.grid}>
        {cards.map((card, index) => (
          <MemoryCard {...card}/>
        ))}
      </div>

    </>
  );
};

export default Home;
