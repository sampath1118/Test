import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar_cls">
        <div className="sidenav">
          <ul className="ulcls">
            <li>
              <Link to="/" activeClassName="active">
                Create Lottery
              </Link>
            </li>
            <li>
              <Link to="/DrawWinner" activeClassName="active">
                Draw Winner
              </Link>
            </li>
            <li>
              <Link to="/CreatedPool" activeClassName="active">
                Created Pools
              </Link>
            </li>
            <li>
              <Link to="/LottaryPools" activeClassName="active">
                Lottery Pools
              </Link>
            </li>
            <li>
              <Link to="/GetLottaryById" activeClassName="active">
                Get Lottery Pool by ID
              </Link>
            </li>
            <li>
              <Link to="/GetMemberByID" activeClassName="active">
                Get Lottery Pool Member by ID
              </Link>
            </li>
            <li>
              <Link to="/Owner" activeClassName="active">
                Owner
              </Link>
            </li>
            <li>
              <Link to="/History" activeClassName="actie">
                History
              </Link>
            </li>
            <li>
              <Link to="/Frontend" activeClassName="active">
                Frontend
              </Link>
            </li>

            <li>
              <Link to="/Videos" activeClassName="active">
                Videos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
