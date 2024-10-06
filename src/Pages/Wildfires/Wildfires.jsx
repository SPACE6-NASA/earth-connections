import Section from "../../Components/Section/Section";

function Wildfires() {
  const wildfireInfo = {
    title: 'Wildfires & Air Quality',
    description: 'Explore how wildfires impact air quality and contribute to climate change.',
    imageUrl: '/path/to/wildfire-image.jpg'
  };

  return (
    <div>
      <Section title={wildfireInfo.title} description={wildfireInfo.description} imageUrl={wildfireInfo.imageUrl} />
    </div>
  );
}

export default Wildfires;
