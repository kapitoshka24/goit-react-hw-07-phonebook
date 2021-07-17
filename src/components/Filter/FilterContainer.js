import { connect } from "react-redux";
import { selectors, actions } from "../../redux/contacts/";
import Filter from "./Filter";

const mapStateToProps = (state) => ({
  value: selectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (evt) => dispatch(actions.changeFilter(evt.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
