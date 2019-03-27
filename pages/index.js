import { connect } from "react-redux";
import Template from "../src/components/Template";

const Index = () => (
  <Template id="home" className={"container mx-auto"}>
    <div className="d-block">
      <h1 className="text-center">Welcome to Moia Net</h1>
    </div>

    <style jsx>{`
      #home {
        background-image: url("./static/mn-bg.jpeg");
      }
    `}</style>
  </Template>
);

export default connect(null)(Index);
