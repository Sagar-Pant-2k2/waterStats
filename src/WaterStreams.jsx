import Card3 from './Card3'
import chakferiRiverImage from './images/ChakferiRiver.jpeg'
const WaterStreams = ()=>{
    console.log(chakferiRiverImage);
    return (<>
    
    
    <h1>Water Streams</h1>
    
    
    <p>

    A water stream refers to a flowing or moving body of water, such as a river, creek, or stream. It is a natural occurrence where water flows in a continuous or semi-continuous manner along a particular path or channel.
        <br></br>
        <br></br>
    Water streams are typically found in various natural settings, including mountains, forests, valleys, and plains. They are formed through the accumulation of rainfall, melting snow, or underground springs, which gradually gather and flow downhill, guided by the terrain's contours.<br></br>
        <br></br>
    
    Water streams play a vital role in ecosystems as they provide habitats for diverse flora and fauna. They also contribute to the water cycle, supporting plant growth, wildlife survival, and human activities like irrigation, drinking water supply, and recreation.
    
    </p>
    
    <div className="Container">

    <Card3 title={"Chakferi River"} src={chakferiRiverImage} />

    <Card3 title={"Beni River"} src={"/src/images/BeniRiver.jpeg"}/>
    <Card3 title={"Perairu River"} src={"/src/images/PerairuRiver.jpeg"}/>
    </div>
    </>)
}

export default WaterStreams