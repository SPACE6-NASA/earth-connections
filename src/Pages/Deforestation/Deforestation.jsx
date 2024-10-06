import Section from "../../Components/Section/Section";

function Deforestation() {
  const deforestationInfo = {
    title: 'Deforestation & Its Impact',
    description: 'Learn how deforestation affects ecosystems and contributes to global warming.',
    imageUrl: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/152000/152607/venezuelafires_tmo_20240326_th.jpg'
  };

  return (
    <div>
      <Section title={deforestationInfo.title} description={deforestationInfo.description} imageUrl={deforestationInfo.imageUrl} />
    </div>
  );
}

export default Deforestation;
