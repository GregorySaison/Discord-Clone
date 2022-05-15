import React from "react";
import "./groups.css";

function Groups() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/groups")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    data && (
      <section className="groups">
        {data.map((item) => (
          <article
            key={item.id}
            className={`group__icon group__icon--${item.name}`}
          >
            <i className={item.illustration}></i>
          </article>
        ))}
      </section>
    )
  );
}

export default Groups;
