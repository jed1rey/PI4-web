import React from "react";
import styles from "./dashboardEstatistica.module.css";

const DashboardEstatistica = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>
        <h1>Análise Estatística</h1>
        <iframe
          title="PI_Estatistica_SUNGUARD"
          src="https://app.powerbi.com/view?r=eyJrIjoiOTZlN2IyYzAtNjE2ZS00ZDdmLTkwZjAtZjgxMWEzODcyY2Q4IiwidCI6ImNmNzJlMmJkLTdhMmItNDc4My1iZGViLTM5ZDU3YjA3Zjc2ZiIsImMiOjR9"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default DashboardEstatistica;
