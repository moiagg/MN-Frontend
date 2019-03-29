import { connect } from "react-redux";
import PropTypes from "prop-types";
import Template from "../src/components/Template";
import Header from "../src/components/Header";
import Authentication from "../src/components/Authentication";

const displayHome = auth => {
  if (!auth) {
    return <Authentication />;
  } else {
    return <h4>Welcome User</h4>;
  }
};

const Index = props => (
  <Template id="home" className={"container pt-5"}>
    <Header className={"pt-5"}>
      <h1>Welcome to Moia Net</h1>
      <p>A Lite Social Network for Organizations and Teams</p>
    </Header>
    {displayHome(props.auth.isAuthenticated)}
    <style jsx>{`
      .template {
        background-color: #eee !important;
      }
    `}</style>
  </Template>
);
Index.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Index);
