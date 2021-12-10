import { Link } from "react-router-dom";
import React from "react";
import { useDispatch } from 'react-redux';
import * as sourcesActions from './../redux/actions'

const Header = () => {
    const dispatch = useDispatch()

    const reset = () => {
      dispatch(sourcesActions.resetState())
    }

  return (
      <div class="links">
        <Link to="/">
          <button onClick={reset} className="header example_f myButton">Home</button>
        </Link>
      </div>
  );
};

export default Header;