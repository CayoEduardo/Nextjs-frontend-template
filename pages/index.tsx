import type { NextPage } from "next";
import data from "../utils/data.json";
import Transactions from "@/components/Transactions";

const Home: NextPage = () => {
  return (
    <div className="wrapper">
      <div className="operation-container">
        <Transactions attributes={{ operations: data }} />
      </div>
    </div>
  );
};

export default Home;
