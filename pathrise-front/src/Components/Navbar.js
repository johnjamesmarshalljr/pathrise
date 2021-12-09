import { Link } from "react-router-dom";
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import * as sourcesActions from './../redux/actions'

const Header = () => {
    const dispatch = useDispatch()
const reset = () => {
    dispatch(sourcesActions.resetState())

}

  return (
    <div id="Thx">
      {/* <div class="one"> */}
        {/* <h1 class="one">CODE WANDERER</h1> */}
      {/* </div> */}
      {/* <p>FOR CODE NEWBIES</p> */}
      <div class="links">
        <Link class="header" to="/">
          <button onClick={reset} class="glow-on-hover">Home</button>
        </Link>
        {/* <Link class="header" to="/categories/:id/resources/new">
          <button class="glow-on-hover">Create</button>
        </Link>
        <Link class="header" to="/categories">
          <button class="glow-on-hover">View</button>
        </Link> */}
      </div>
    </div>
  );
};

export default Header;