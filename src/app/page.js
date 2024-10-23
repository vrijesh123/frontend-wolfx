import ProductTable from "@/components/pages_components/ProductTable";
import "../globalStyles/global.css";
import DoughnutChart from "@/components/common_components/DoughnutChart";
import LineChart from "@/components/common_components/LineChart";

export default function Home() {

  return (
    <div className="container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <DoughnutChart />
      </div>
      <LineChart />
      <ProductTable />
    </div>
  );
}
