import React from 'react';
import { Button } from 'primereact/button';
import styles from './Button.module.scss';

function ButtonSystem() {
  return (
    <div className={styles.block_btn_system}>
      <Button className={styles.btn_back} type="back" value="Back">
        Back
      </Button>
      <Button
        className={styles.btn_save}
        severity="success"
        type="save"
        value="Save"
      >
        Save
      </Button>
    </div>
  );
}

export default ButtonSystem;
