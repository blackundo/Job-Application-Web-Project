import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <>
      <div className="col-span-2 bg-sky-200 h-full ">
        <div className="h-40 ">
          <img src="#" alt="Logo" />
          JobHunter
        </div>
        <div className="text-center">
          <h1 className="text-3xl uppercase font-bold">dashboard</h1>
        </div>
        <div
          className={`text-center border p-3 border-t-2 border-t-black bg-slate-500/30 ${styles.dashboard}`}
        >
          <ul className={`${styles.menu}`}>
            <li>
              <input type="radio" name="accordion" id="first" />
              <label htmlFor="first">Menu1</label>
              <div className={`${styles.content}`}>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
              </div>
            </li>
            <li>
              <input type="radio" name="accordion" id="second" />
              <label htmlFor="second">Menu2</label>
              <div className={`${styles.content}`}>
                <div>item</div>
                <div>item</div>
                <div>item</div>
              </div>
            </li>
            <li>
              <input type="radio" name="accordion" id="third" />
              <label htmlFor="third">Menu2</label>
              <div className={`${styles.content}`}>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
              </div>
            </li>
            <li>
              <input type="radio" name="accordion" id="fourth" />
              <label htmlFor="fourth">Menu2</label>
              <div className={`${styles.content}`}>
                <div>item</div>
                <div>item</div>
                <div>item</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
