import { isString } from "lodash";
import React from "react";
import styles from "./ArticleImage.module.css";
import PropTypes from "prop-types";

const ArticleImage = ({url, title}) =>{
    return (
        <div>
            <img src={url} ></img>
           <h2>{title}</h2>
        </div>

    )
}

ArticleImage.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

export default ArticleImage