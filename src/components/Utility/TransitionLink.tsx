import React, { useContext } from "react";
import { Link, LinkProps, useNavigate } from "react-router-dom";
import { RouteContext } from "../Utility/RouteProvider";

interface TransitionLinkProps extends LinkProps {
  to: string;
}

const TransitionLink: React.FC<TransitionLinkProps> = ({ to, ...props }) => {
  const { setCurrentRoute, setNextRoute, setRenderNextRoute } =
    useContext(RouteContext);
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setCurrentRoute(window.location.pathname);
    setNextRoute(to);
    setRenderNextRoute(false); // Add this line
    navigate(to);
  };

  return <Link to={to} onClick={handleClick} {...props} />;
};

export default TransitionLink;
