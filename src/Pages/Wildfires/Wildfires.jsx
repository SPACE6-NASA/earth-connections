import Section from "../../Components/Section/Section";

function Wildfires() {
  const wildfireInfo = {
    title: 'Wildfires & Air Quality',
    description: 'Explore how wildfires impact air quality and contribute to climate change.',
    imageUrl: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/153000/153300/linefirezm_oli_20240909.jpg'
  };

  return (
    <div>
      <Section title={wildfireInfo.title} description={wildfireInfo.description} imageUrl={wildfireInfo.imageUrl} />
    </div>
  );
}

export default Wildfires;
