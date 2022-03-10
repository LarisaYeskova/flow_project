import styles from "../styles/Home.module.css";

export default function Clients() {
  return (
    <div>
      <div className={styles.clients_wrap}>
        <div className={styles.clients_container}>
          <img src="/client1.png" />
          <div className={styles.clients_item}>
            <h2 className={styles.clients_name}>
              Melissa
              <br />
              Track
            </h2>
            <img className={styles.clients_logo} src="/VectorGroup.png" />
            <h3 className={styles.clients_title}>Key Stats:</h3>
            <p className={styles.clients_paragraph}>
              100m - 10.75 100 Hurdles - 12.39 Mile Run - 4.29.04 Paid for my
              semester meal plan
            </p>
          </div>
        </div>

        <div className={styles.clients_container}>
          <img src="/client2.png" />
          <div className={styles.clients_item}>
            <h2 className={styles.clients_name}>
              Melissa
              <br />
              Track
            </h2>
            <img className={styles.clients_logo} src="/VectorGroup.png" />
            <h3 className={styles.clients_title}>Key Stats:</h3>
            <p className={styles.clients_paragraph}>
              100m - 10.75 100 Hurdles - 12.39 Mile Run - 4.29.04 Paid for my
              semester meal plan
            </p>
          </div>
        </div>

        <div className={styles.clients_container}>
          <img src="/client3.png" />
          <div className={styles.clients_item}>
            <h2 className={styles.clients_name}>
              Melissa
              <br />
              Track
            </h2>
            <img className={styles.clients_logo} src="/VectorGroup.png" />
            <h3 className={styles.clients_title}>Key Stats:</h3>
            <p className={styles.clients_paragraph}>
              100m - 10.75 100 Hurdles - 12.39 Mile Run - 4.29.04 Paid for my
              semester meal plan
            </p>
          </div>
        </div>

        <div className={styles.clients_container}>
          <img src="/client4.png" />
          <div className={styles.clients_item}>
            <h2 className={styles.clients_name}>
              Melissa
              <br />
              Track
            </h2>
            <img className={styles.clients_logo} src="/VectorGroup.png" />
            <h3 className={styles.clients_title}>Key Stats:</h3>
            <p className={styles.clients_paragraph}>
              100m - 10.75 100 Hurdles - 12.39 Mile Run - 4.29.04 Paid for my
              semester meal plan
            </p>
          </div>
        </div>
      </div>

      <div className={styles.text_block}>
        <p>GAME GAME GAME GAME</p>
        <p>CASH CASH CASH CASH</p>
        <p>DEAL DEAL DEAL DEAL</p>
        <p>FLOW FLOW FLOW FLOW </p>
      </div>
    </div>
  );
}
