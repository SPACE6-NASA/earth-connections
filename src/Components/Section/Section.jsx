function Section({ title, description, imageUrl }) {
    return (
      <section>
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={imageUrl} alt={title} />
      </section>
    );
  }
  
  export default Section;
  