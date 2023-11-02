import ChartBar from "../../Chart/ChartBar";
import ChartLine from "../../Chart/ChartLine";
import styles from "./ChartContent.module.css";
import ChartPie from "../../Chart/ChartPie";

function ChartContent() {
  return (
    <>
      <div
        className={`grid grid-cols-12 place-items-center ${styles.charts} gap-3`}
      >
        <div className="col-span-6">
          <ChartBar />
        </div>
        <div className="col-span-6">
          <ChartLine />
        </div>
        <div className="col-span-6">
          <ChartPie />
        </div>
        <div className="col-span-6">chart4</div>
        <div className="col-span-12">chart5</div>
        <div className="col-span-12">chart6</div>
        <div className="col-span-7">chart7</div>
      </div>
    </>
  );
}

export default ChartContent;
