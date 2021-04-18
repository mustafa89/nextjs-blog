import Card from "../cards/cards";

const CardList = ({ articlesData }) => {
  return (
    <section className="section">
      <div className="container">
        {articlesData.map(({ title, date, description, slug }) => (
          <Card
            key={title}
            Title={title}
            Description={description}
            Date={date}
            File={slug}
          ></Card>
        ))}
      </div>
    </section>
  );
};
export default CardList;
