import Section from '../../Components/Section/Section';
import Simulator from '../../Components/Simulator/Simulator';

function PolarIce() {
  const polarIceInfo = {
    title: 'Polar Ice Melting',
    description: 'See how melting polar ice impacts sea levels and global climate patterns.',
  };

  return (
    <div>
      <Section
        title={polarIceInfo.title}
        description={polarIceInfo.description}
      />
      <div style={{ width: '100%', height: '600px' }}>
        <iframe
          width="80%"
          height="400"
          src="https://earthengine.google.com/iframes/timelapse_player_embed.html#v=-75.69097,83.16553,1.914,latLng&t=1.78&ps=50&bt=19840101&et=20221231"
          allowFullScreen
        ></iframe>
      </div>
      <Simulator />
    </div>
  );
}

export default PolarIce;
