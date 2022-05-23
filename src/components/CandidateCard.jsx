import styles from "./CandidateCard.module.css";

function CandidateCard({
   avatar,
   name,
   title,
   salary,
   company_name
}) {
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img alt="logo" width="100px" height="100px" src={avatar} />
      <div>
        <div>Name:{name}</div>
        <div>Title{title} & Company Name{company_name}</div>
      </div>
      <div>$ Salary{salary}</div>
    </div>
  );
}

export default CandidateCard;
