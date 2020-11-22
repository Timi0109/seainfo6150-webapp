import React, { useState } from "react";
import ArticleImage from "../ArticleImage/ArticleImage";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import styles from "./ArticleListItem.module.css";

const ArticleListItem = ({ articles }) => {
  const [btnState, SetBtnState] = useState({});

  let keys = [];
  for (const property in articles) {
    keys.push(property);
  }
  let displayContent;

  const handleClick = (id) => {
    SetBtnState({ ...btnState, [id]: !btnState[id] });
  };

  if (articles != null) {
    displayContent = (
      <div className={styles.container}>
        {keys.map((item, id) => {
           return <div key={id} className={styles.content}>
              <ArticleImage url={articles[item].image._url} title={articles[item].title}></ArticleImage>
              <div className={styles.info}>
                  <p>{btnState[id] ? articles[item].shortText : null}</p>
                  <p className={styles.date}>
                    {btnState[id] ? articles[item].displayDate : null}
                  </p>
                </div>
                <div className={styles.btn}>
                  <ArticleTextToggleButton
                    onClick={() => handleClick(id)}
                    buttonText={btnState[id] ? "Show Less" : "Show More"}
                  ></ArticleTextToggleButton>
                </div>
          </div>

        })}
      </div>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return (
    <section>
      {displayContent}
     
    </section>
  );
  //   return <div>h</div>;
};

export default ArticleListItem;
