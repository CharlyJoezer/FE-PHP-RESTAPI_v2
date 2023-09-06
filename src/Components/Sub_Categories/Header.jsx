import css from "./Header.module.css";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { useState } from "react";

const Header = (props) => {
  const { name_sub_category, category } = props;
  const [loading, setLoading] = useState(false);
  return <></>;
};

export default Header;
