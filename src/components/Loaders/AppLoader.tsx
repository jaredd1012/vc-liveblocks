import { Loader } from '@mantine/core';
import styles from "../../index.module.css";
export function AppLoader() {
    return (
        <div className={styles.container}>
          <div className={styles.loading}>
            <img src="https://liveblocks.io/loading.svg" alt="Loading" />
          </div>
        </div>
      );
    }