import Slider from "./Slider";
import Card2 from "./Card2";
import Card3 from "./Card3";
const Home = ()=>{
    return (<>
        <Slider />
        <div className="Container home-container">

        <p>
            <p>
                
We would like to express our sincere gratitude to our esteemed project advisor, Dr. Jyothi Prasad, for their invaluable guidance and support throughout the duration of this project.
            </p>
<p>
    <div className="Container">
<Card3 title={"Dr. Jyothi Prasad"} src={"../images/Professor.jpeg"} desig={"Professor"}/>
    </div>
    
Dr. Jyothi Prasad is a distinguished expert in the field of Hydrology-Watershed Management, Irrigation Management and has played a pivotal role in shaping the direction and success of our research. Their extensive knowledge, experience, and passion for the subject matter have been instrumental in enriching our understanding of artesian wells.
</p>
<p>

Throughout the project, Dr. Jyothi Prasad provided us with valuable insights, scholarly advice, and constructive feedback. Their dedication and mentorship have been invaluable in refining our research methodology and ensuring the quality and integrity of our findings.
</p>
<p>

We are deeply grateful for the time and effort that Dr. Jyothi Prasad has invested in our project. Their unwavering support, availability, and willingness to address our queries and concerns have been truly commendable.
</p>
<p>

We would like to express our utmost appreciation for Dr. Jyothi Prasad's contribution to our project's success. Their guidance has not only enhanced our academic experience but has also inspired us to strive for excellence.
</p>
<p>

Once again, we extend our heartfelt thanks to Dr. Jyothi Prasad for their invaluable support and mentorship. Without their expertise and commitment, this project would not have been possible.
</p>

</p>
        <div className="Container">

        <h1>About Project</h1>
        <p> 
            <p>
                
        The project focused on a detailed investigation of the water resources in Pantnagar, specifically 30 artesian wells and three streams. The main objectives were to conduct field visits to these sites, utilize <b>QGIS</b> software to map their locations, and analyze the rainfall pattern in Pantnagar from 1990 to 2020.
            </p>
<p>

During the project, the team conducted visits to the 30 artesian wells and three streams in Pantnagar to gather first-hand information about their conditions, characteristics, and surroundings. These field visits provided valuable insights into the local hydrological features and the availability of water resources in the area.
</p>
<p>

Using <b>QGIS</b> software, the project team created a comprehensive map that displayed the precise locations of the artesian wells and streams. Each water source was accurately marked with distinct symbols or colors on the map, allowing for easy visualization and analysis of their distribution across Pantnagar.
</p>
<p>
    
To study the rainfall pattern, historical rainfall data from 1990 to 2020 was collected from reliable sources such as meteorological departments or research institutions. The data was processed and analyzed using statistical methods to identify trends, seasonal variations, and any significant patterns that emerged over the 30-year period.
</p>
<p>

By examining the rainfall data, the project team gained insights into the long-term precipitation patterns in Pantnagar. The analysis helped determine average annual rainfall, seasonal distribution, and any notable changes or trends in rainfall over the study period. This information is crucial for effective water resource management, planning, and decision-making in the region.
</p>
<p>

The project's findings, including the detailed map created with <b>QGIS</b> software and the analysis of rainfall patterns, served as valuable resources for further research and development. The data and insights obtained from the project can be used by local authorities, hydrologists, and environmental scientists to assess the availability and sustainability of water resources, implement appropriate water management strategies, and plan for future water demands based on the observed rainfall patterns.
</p>
<p>

Overall, the project contributed to a comprehensive understanding of Pantnagar's water resources by combining field visits, geospatial analysis, and rainfall pattern studies. The information generated will assist in making informed decisions and developing sustainable water management practices in the region.The project focused on a detailed investigation of the water resources in Pantnagar, specifically 30 artesian wells and three streams. The main objectives were to conduct field visits to these sites, utilize <b><b>QGIS</b></b> software to map their locations, and analyze the rainfall pattern in Pantnagar from 1990 to 2020.
</p>
<p>

During the project, the team conducted visits to the 30 artesian wells and three streams in Pantnagar to gather first-hand information about their conditions, characteristics, and surroundings. These field visits provided valuable insights into the local hydrological features and the availability of water resources in the area.
</p>
<p>

Using <b>QGIS</b> software, the project team created a comprehensive map that displayed the precise locations of the artesian wells and streams. Each water source was accurately marked with distinct symbols or colors on the map, allowing for easy visualization and analysis of their distribution across Pantnagar.
</p>
<p>

To study the rainfall pattern, historical rainfall data from 1990 to 2020 was collected from reliable sources such as meteorological departments or research institutions. The data was processed and analyzed using statistical methods to identify trends, seasonal variations, and any significant patterns that emerged over the 30-year period.
</p>

<p>

By examining the rainfall data, the project team gained insights into the long-term precipitation patterns in Pantnagar. The analysis helped determine average annual rainfall, seasonal distribution, and any notable changes or trends in rainfall over the study period. This information is crucial for effective water resource management, planning, and decision-making in the region.
</p>

<p>

The project's findings, including the detailed map created with <b>QGIS</b> software and the analysis of rainfall patterns, served as valuable resources for further research and development. The data and insights obtained from the project can be used by local authorities, hydrologists, and environmental scientists to assess the availability and sustainability of water resources, implement appropriate water management strategies, and plan for future water demands based on the observed rainfall patterns.
</p>
<p>

Overall, the project contributed to a comprehensive understanding of Pantnagar's water resources by combining field visits, geospatial analysis, and rainfall pattern studies. The information generated will assist in making informed decisions and developing sustainable water management practices in the region.
</p>
        </p>
        {/* <hr widt></hr> */}
        <Card2 title={"Artesian Wells"} data={1}/>
        <Card2 title={"Water Streams"} id={2}/>
        <Card2 title={"Rainfall"}  id={3}/>
        </div>
        </div>
        
    </>)
}
export default Home;