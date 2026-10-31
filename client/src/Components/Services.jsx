import Card from "./Card";

export default function Services({ items }) {
  return (
    <section className="wrap alt">
      <h2>IT services</h2>
      <div className="grid three">
        {items
          .filter((item) => item.category === "service")
          .map((item) => (
            <Card key={item.id} item={item} />
          ))}
      </div>
    </section>
  );
}
