import Section from '../../Components/Section/Section';
import Simulator from '../../Components/Simulator/Simulator';

function PolarIce() {
  const polarIceInfo = {
    title: 'Polar Ice Melting',
    description: 'See how melting polar ice impacts sea levels and global climate patterns.',
    imageUrl: '/path/to/polar-ice-image.jpg'
  };

  return (
    <div>
      <Section title={polarIceInfo.title} description={polarIceInfo.description} imageUrl={polarIceInfo.imageUrl} />
      <Simulator />
    </div>
  );
}

export default PolarIce;
