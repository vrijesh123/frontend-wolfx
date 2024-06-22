import ProductTable from "@/components/pages_components/ProductTable";
import "../globalStyles/global.css";

export default function Home() {

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <ProductTable/>
    </div>
  );
}
