import Section from "../../Components/Section/Section";

function Deforestation() {
  const deforestationInfo = {
    title: 'Deforestation & Its Impact',
    description: 'Learn how deforestation affects ecosystems and contributes to global warming.',
    imageUrl: '/path/to/deforestation-image.jpg'
  };

  return (
    <div>
      <Section title={deforestationInfo.title} description={deforestationInfo.description} imageUrl={deforestationInfo.imageUrl} />
    </div>
  );
}

export default Deforestation;
