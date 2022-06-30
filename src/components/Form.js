// create style here
const styles = {
  form: {
    margin: "16px"
  },
  formGroup: {
    marginBottom: "16px"
  },
  formLabel: {
    marginBottom: "8px",
    display: "inline-block"
  },
  formInput: {
    width: "100%",
    padding: "12px",
    fontSize: "15px",
    color: "grey",
    backgroundColor: "white",
    borderRadius: "5px",
    border: "1px solid grey"
  }
}

// create Form component
function Form() {
  return (
    // code inside div
    <div style={styles.form}>
      <div style={styles.formGroup}>
        <label htmlFor="inputUsername" style={styles.formLabel}>Username</label>
        <input type="text" id="inputUsername" style={styles.formInput} placeholder="Isikan username" />
      </div>
    </div>
  )
}

export default Form
