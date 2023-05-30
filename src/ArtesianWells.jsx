import Card from "./Cards";
import ModalWindow from "./Modal";
const sources = ["https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2494.563349960718!2d79.48553562067704!3d29.01847546195178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzA2LjYiTiA3OcKwMjknMTQuNiJF!5e1!3m2!1sen!2sin!4v1679546820917!5m2!1sen!2sin", 
     
"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d8347.851100255111!2d79.48008735098306!3d29.014455646618586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzUxLjUiTiA3OcKwMjknMDguOSJF!5e1!3m2!1sen!2sin!4v1681036518504!5m2!1sen!2sin", 


"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12793.63038016821!2d79.47824522849726!3d29.01189971631255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzQyLjgiTiA3OcKwMjknMTMuMiJF!5e1!3m2!1sen!2sin!4v1681036658010!5m2!1sen!2sin", 
   
"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12794.076153131722!2d79.4825452284958!3d29.0082997163348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzI5LjkiTiA3OcKwMjknMjguNyJF!5e1!3m2!1sen!2sin!4v1681036737796!5m2!1sen!2sin", 


       
"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12791.62377683086!2d79.48764522850374!3d29.02809971621243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzQxLjIiTiA3OcKwMjknNDcuMCJF!5e1!3m2!1sen!2sin!4v1681036866028!5m2!1sen!2sin", 

"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13663.634363153276!2d79.48734523128581!3d29.029199716205813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzQ1LjEiTiA3OcKwMjknNDYuMCJF!5e1!3m2!1sen!2sin!4v1681036956481!5m2!1sen!2sin", 
 

"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d13663.634365298085!2d79.4873452!3d29.0291997!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzMyLjIiTiA3OcKwMjknMjcuNiJF!5e1!3m2!1sen!2sin!4v1681037076867!5m2!1sen!2sin", 

"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13665.06347878475!2d79.49634523128181!3d29.018399716272523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzA2LjIiTiA3OcKwMzAnMTguNCJF!5e1!3m2!1sen!2sin!4v1681037141544!5m2!1sen!2sin", 
 

       
"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13663.965220141343!2d79.49804523128492!3d29.02669971622125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzM2LjEiTiA3OcKwMzAnMjQuNSJF!5e1!3m2!1sen!2sin!4v1681037208907!5m2!1sen!2sin", 

"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13663.462307238859!2d79.49464523128634!3d29.030499716197774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzQ5LjgiTiA3OcKwMzAnMTIuMiJF!5e1!3m2!1sen!2sin!4v1681037268244!5m2!1sen!2sin", 
 

       
"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13665.672028746414!2d79.50294523128008!3d29.013799716300973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzQ5LjciTiA3OcKwMzAnNDIuMSJF!5e1!3m2!1sen!2sin!4v1681037322112!5m2!1sen!2sin", 

   "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13664.335749083813!2d79.46364523128386!3d29.02389971623855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzI2LjAiTiA3OcKwMjgnMjAuNiJF!5e1!3m2!1sen!2sin!4v1681037370519!5m2!1sen!2sin" ,

"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13664.89148131004!2d79.45104523128234!3d29.019699716264487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzEwLjkiTiA3OcKwMjcnMzUuMyJF!5e1!3m2!1sen!2sin!4v1681037436498!5m2!1sen!2sin", 

"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13665.341305998703!2d79.44374523128104!3d29.01629971628549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzU4LjciTiA3OcKwMjcnMDkuMCJF!5e1!3m2!1sen!2sin!4v1681037486742!5m2!1sen!2sin", 


       
"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13667.788038210301!2d79.4943452312741!3d28.99779971639992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDU5JzUyLjEiTiA3OcKwMzAnMTEuMiJF!5e1!3m2!1sen!2sin!4v1681037563354!5m2!1sen!2sin", 


"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13668.343314087902!2d79.49424523127254!3d28.993599716425884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDU5JzM3LjAiTiA3OcKwMzAnMTAuOCJF!5e1!3m2!1sen!2sin!4v1681037602175!5m2!1sen!2sin", 


"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13666.875639830747!2d79.49264523127665!3d29.00469971635723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzE2LjkiTiA3OcKwMzAnMDUuMCJF!5e1!3m2!1sen!2sin!4v1681037685364!5m2!1sen!2sin", 



  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13667.259135760594!2d79.48794523127556!3d29.001799716375178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzA2LjUiTiA3OcKwMjknNDguMSJF!5e1!3m2!1sen!2sin!4v1681037742842!5m2!1sen!2sin", 
 

       
"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13667.325252209737!2d79.48874523127543!3d29.00129971637826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzA0LjciTiA3OcKwMjknNTEuMCJF!5e1!3m2!1sen!2sin!4v1681037798518!5m2!1sen!2sin", 


"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13662.906386212444!2d79.43504523128792!3d29.034699716171833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAyJzA0LjkiTiA3OcKwMjYnMzcuNyJF!5e1!3m2!1sen!2sin!4v1681037853899!5m2!1sen!2sin", 


       
"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d13662.906388353123!2d79.4350452!3d29.0346997!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzI2LjAiTiA3OcKwMjYnMjAuOCJF!5e1!3m2!1sen!2sin!4v1681037964998!5m2!1sen!2sin",

"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13664.143872098208!2d79.42884523128443!3d29.025349716229577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzMxLjMiTiA3OcKwMjYnMTUuNCJF!5e1!3m2!1sen!2sin!4v1681038019251!5m2!1sen!2sin" ,

"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13662.89314910269!2d79.43224523128795!3d29.034799716171243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAyJzA1LjMiTiA3OcKwMjYnMjcuNiJF!5e1!3m2!1sen!2sin!4v1681038084339!5m2!1sen!2sin", 

"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13667.483927441095!2d79.43604523127499!3d29.00009971638568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzAwLjQiTiA3OcKwMjYnNDEuMyJF!5e1!3m2!1sen!2sin!4v1681038134417!5m2!1sen!2sin" ,

"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2494.563349960718!2d79.48553562067704!3d29.01847546195178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzA2LjYiTiA3OcKwMjknMTQuNiJF!5e1!3m2!1sen!2sin!4v1679546820917!5m2!1sen!2sin", 

"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13663.674067365379!2d79.4058452312857!3d29.028899716207658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzQ0LjAiTiA3OcKwMjQnNTIuNiJF!5e1!3m2!1sen!2sin!4v1681038192956!5m2!1sen!2sin", 
      
"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13667.370210800635!2d79.46654523127528!3d29.000959716380354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzAzLjUiTiA3OcKwMjgnMzEuMSJF!5e1!3m2!1sen!2sin!4v1681039422390!5m2!1sen!2sin", 

"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13664.42837622053!2d79.44254523128363!3d29.023199716242882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzIzLjUiTiA3OcKwMjcnMDQuNyJF!5e1!3m2!1sen!2sin!4v1681039483561!5m2!1sen!2sin", 
 

"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13666.359848721646!2d79.48774523127814!3d29.008599716333137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzMxLjAiTiA3OcKwMjknNDcuNCJF!5e1!3m2!1sen!2sin!4v1681039538333!5m2!1sen!2sin", 

"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13666.888864411174!2d79.48254523127666!3d29.004599716357852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzE2LjYiTiA3OcKwMjknMjguNyJF!5e1!3m2!1sen!2sin!4v1681039579963!5m2!1sen!2sin"]


 
  


const Data = [
  "1	CRC-1st	6.5	425	220	212	76.4	136.1	21	4	12.5	125	305	15.6	0.4	0.9	12.4	40",
  "2	CRC-2nd	6.8	430	250	232	92.3	139.7	19	7	26.3	133	323	13.5	0.5	0.8	24.3	70",
"3	CRC-3rd	6.9	330	190	242	86.0	156.0	22	3	30.0	128	311	11.4	0.4	0.8	36.5	50",
"4	CRC-4th	6.7	350	200	236	105.5	130.5	18	6	42.3	125	305	14.9	0.5	0.9	30.4	60",
"5	Ta-Colony-1st	6.6	405	240	235	69.0	166.0	18	4	81.3	145	354	20.6	0.5	1.1	50.7	60",
"6	Ta-Colony	6.8	370	250	250	94.7	155.3	16	4	24.5	138	336	20.6	0.4	1.3	26.4	70",
"7	Golden	6.8	380	240	219	72.4	146.6	20	6	13.8	145	354	14.9	0.5	0.9	22.3	80",
"8	Beni-pump	6.7	310	220	228	92.8	135.2	19	5	51.3	115	281	14.2	0.6	0.9	40.5	60",
"9	Lichi-orchard	6.3	400	250	230	92.7	137.3	22	10	6.3	140	342	15.6	0.3	0.6	17.8	70",
"10	Field	6.5	325	200	244	92.3	152.2	19	8	30.0	115	281	9.9	0.3	1.5	32.4	80",
"11	Double	6.7	385	220	218	65	153	18	5	46.3	140	342	11.4	0.4	0.9	38.5	70",
"12	Lambert	6.8	310	210	217	55.0	162.0	23	6	52.5	120	293	10.7	0.6	0.5	22.3	60",
"13	Block-D-1	6.8	370	210	217		160.1	21	6	63.8	112	272	14.2	0.6	0.3	38.5	30",
"14	Block-D-2	6.8	320	220	209	22.6	186.5	17	10	62.5	128	311	14.9	0.5	0.5	32.4	50",
"15	S-Block-1	6,9	265	180	182	127.1	54.9	16	8	63.8	93	226	10.7	0.5	1.5	38.5	80",
"16	S-Block-2	6.7	335	220	209	96.1	112.9	18	9	62.5	133	323	13.5	0.4	0.3	38.1	80",
"17	S Block 3	6.6	340	230	198	109.1	88.9	15	4	76.3	130	317	17.0	0.6	0.4	41.7	90",
"18	I-Block-1	6.7	370	240	209	96.0	113.0	18	5	78.8	143	348	14.9	0.5	0.2	40.5	70",
"19	I-Block-2	6.8	360	240	238	72.8	165.2	19	5	75.0	113	276	14.9	0.5	0.9	44.2	40",
"20	Haldi-1st	6.7	330	210	264	127.1	136.9	16	6	78.8	118	287	12.1	0.6	0.7	44.7	75",
"21	Haldi-2nd	6.7	360	230	241	90.3	150.7	20	8	27.5	138	336	15.5	0.5	1.1	19.3	30",
"22	Haldi-3rd	6.7	330	220	225	64.8	160.7	19	7	81.3	140	342	13.5	0.6	1.2	45.7	70",
"23	Haldi-4th	6.8	320	230	235	88.6	146.4	15	6	76.3	130	317	14.2	0.5	0.4	40.3	90",
"24	Haldi-5th	6.6	350	220	257	79.2	177.8	25	5	72.5	133	323	13.5	0.6	0.2	44.9	70",
"25	Patharchatta	6.6	320	220	261	76.5	184.5	17	6	38.8	130	317	14.1	0.6	1.0	16.1	90",
"26	Kisak	6.4	360	250	252	63.7	188.8	16	6	81.3	143	348	16.3	0,5	0.3	45.9	40",
"27	P-Block	6.4	330	230	240	72.2	167.8	18	8	37.5	95	232	14	0.6	10.7	18.8	80",
"28	H-Block	6.5	380	230	370	186.1	183.9	19	9	56.3	130	317	16.3	0.6	1.5	54.7	60",
"29	T-Block	6.6	360	240	222	120.1	101.9	20	5	61.3	105	256	13.5	0.4	0.4	56.8	80",
"30	Q-Block	6.8	450	240	206	40	166	18	6	32.5	130	317	17	0.5	0.7	15.2	75"
]


const ArtesianWells = ({openModal,closeModal})=>{
  let i=0;
    return (
    <div className="ArtesianWells">
      
        <div className="Container">

        <h1>Artesian Wells</h1>
        <p>
        Artesian wells have captivated human curiosity for centuries, providing a reliable and natural source of fresh groundwater. These remarkable geological formations have played a crucial role in sustaining communities and supporting various industries. In this article, we will delve into the fascinating world of artesian wells, uncovering their origins, unique characteristics, and the benefits they offer.
<h2>

Understanding Artesian Wells:
</h2>
Artesian wells are deep underground water reservoirs that hold water under pressure. Unlike typical wells, which rely on pumps to bring water to the surface, artesian wells naturally release water due to the pressure exerted by confined aquifers. This unique geological configuration occurs when impermeable layers sandwich a porous water-bearing formation, creating a self-contained system.
<h2>

Formation and Geographical Distribution:
</h2>
The formation of artesian wells begins with the accumulation of rainwater or melted snow in porous rock layers known as aquifers. Over time, these layers become trapped between impermeable strata, such as clay or rock. The confinement of water within the aquifer builds up pressure, eventually leading to the creation of artesian wells. These wells can be found in diverse locations worldwide, including regions with sedimentary rock formations.
<h2>

The Mechanics of Artesian Wells:
</h2>
When a well is drilled into an artesian aquifer, water forcefully rises to the surface due to the pressure difference between the confined aquifer and the atmosphere. The natural artesian flow eliminates the need for pumping equipment, making artesian wells a sustainable and cost-effective water source. The water level in artesian wells typically remains constant, as the aquifer continually replenishes itself through natural recharge processes.

<h2>

Benefits and Utilization:
</h2>
Artesian wells provide numerous benefits to both human and natural systems. Their reliable water supply is often of superior quality, free from contaminants found in surface water sources. Communities and industries rely on artesian wells for drinking water, irrigation, industrial processes, and maintaining ecological habitats. Artesian wells also contribute to sustainable water management, reducing energy consumption associated with pumping.

<h2>

Challenges:
</h2>
<p>
Undertaking a project to visit 30 artesian wells and 3 streams in Pantnagar, and representing their locations on a website while studying the rainfall pattern can present several challenges and considerations. Here are some key points to consider:
<h4>
  Lack of knowledge:
</h4>
 As some of the artesian wells and streams may be located in remote areas, there might be limited information available about their precise locations and characteristics. It is important to acknowledge this knowledge gap and plan accordingly to gather the necessary information during the project.
 <h4>
  Identification of artesian wells:
 </h4>
  Artesian wells are characterized by water that naturally rises to the surface under pressure. Identifying these wells requires expertise and understanding of geological and hydrological factors. It may be necessary to collaborate with local experts, geologists, or hydrologists who can assist in identifying and confirming the presence of artesian wells in the study area.
  <h4>
    Locating the wells and streams:
  </h4>
   Once the artesian wells and streams have been identified, accurately pinpointing their locations becomes essential for representing them on a website. Utilizing GPS technology or geospatial mapping tools can aid in accurately mapping their coordinates. Field visits and on-site investigations may be necessary to ensure the accuracy of the information gathered
   <h4>
    Technical expertise and equipment:
   </h4>
    Assessing the portability of artesian wells may require specialized knowledge and equipment. It may be necessary to collaborate with hydrologists, geologists, or engineers who possess expertise in groundwater systems and well design. They can provide guidance and assist in evaluating the technical aspects associated with the portability of the wells.
    <h4>
      Time and resource constraints:
    </h4>
     Visiting and assessing 30 artesian wells can be a time-consuming and resource-intensive task. Proper planning and allocation of sufficient time and resources are crucial to complete the project successfully. Adequate manpower, equipment, and funding should be available to carry out the field visits, assessments, and data collection required.
     <br>
     </br>
     Addressing these challenges will require careful planning, collaboration with experts, and thorough data collection. By considering these factors, your project can provide valuable insights into the portability of artesian wells, contributing to a better understanding of their potential uses and limitations.
</p>
        </p>
        <div className="artesianImg">

        <img src="../images/artesianWell.jpg" alt="can't load" style={{maxWidth:"100vw"}}/>
        </div>
        </div>

        <h1>Artesian Wells in Pantnagar</h1>
        
<div className="tableContainer">

        <table className="rainfall-table">
          <thead>
            <tr>
              <th>Sample No.</th>
              <th>Flowing Artesian</th>
              <th>pH</th>
              <th>EC</th>
              <th>TDS</th>
              <th>TH</th>
              <th>Ca++</th>
              <th>Mg</th>
              <th>Na</th>
              <th>K'</th>
              <th>Acidity</th>
              <th>Alkalinity</th>
              <th>HCO3</th>
              <th>cr</th>
              <th>F</th>
              <th>NO3-</th>
              <th>CO2</th>
              <th>SO4-</th>
            </tr>
            

          </thead>
          <tbody>
            
            <tr>
              <td>1</td>
              <td>CRC 1st</td>
              <td>6.5</td>
              <td>425</td>
              <td>220</td>
              <td>212</td>
              <td>76.4</td>
              <td>136.1</td>
              <td>21</td>
              <td>4</td>
              <td>12.5</td>
              <td>125</td>
              <td>305</td>
              <td>15.6</td>
              <td>0.4</td>
              <td>0.9</td>
              <td>12.4</td>
              <td>40</td>
            </tr>
            <tr>
              <td>2</td>
              <td>CRC 2nd</td>
              <td>6.8</td>
              <td>430</td>
              <td>250</td>
              <td>232</td>
              <td>92.3</td>
              <td>139.7</td>
              <td>19</td>
              <td>7</td>
              <td>26.3</td>
              <td>133</td>
              <td>323</td>
              <td>13.5</td>
              <td>0.5</td>
              <td>0.8</td>
              <td>24.3</td>
              <td>70</td>
            </tr>
            <tr>
              <td>3</td>
              <td>CRC 3rd</td>
              <td>6.9</td>
              <td>330</td>
              <td>190</td>
              <td>242</td>
              <td>86.0</td>
              <td>156.0</td>
              <td>22</td>
              <td>3</td>
              <td>30.0</td>
              <td>128</td>
              <td>311</td>
              <td>11.4</td>
              <td>0.4</td>
              <td>0.8</td>
              <td>36.5</td>
              <td>50</td>
            </tr>
            <tr>
              <td>4</td>
              <td>CRC 4th</td>
              <td>6.7</td>
              <td>350</td>
              <td>200</td>
              <td>236</td>
              <td>105.5</td>
              <td>130.5</td>
              <td>18</td>
              <td>6</td>
              <td>42.3</td>
              <td>125</td>
              <td>305</td>
              <td>14.9</td>
              <td>0.5</td>
              <td>0.9</td>
              <td>30.4</td>
              <td>60</td>
            </tr>
            
            <tr>
              <td>5</td>
              <td>Ta Colony 1st</td>
              <td>6.6</td>
              <td>405</td>
              <td>240</td>
              <td>235</td>
              <td>69.0</td>
              <td>166.0</td>
              <td>18</td>
              <td>4</td>
              <td>81.3</td>
              <td>145</td>
              <td>354</td>
              <td>20.6</td>
              <td>0.5</td>
              <td>1.1</td>
              <td>50.7</td>
              <td>60</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Ta Colony</td>
              <td>6.8</td>
              <td>370</td>
              <td>250</td>
              <td>250</td>
              <td>94.7</td>
              <td>155.3</td>
              <td>16</td>
              <td>4</td>
              <td>24.5</td>
              <td>138</td>
              <td>336</td>
              <td>20.6</td>
              <td>0.4</td>
              <td>1.3</td>
              <td>26.4</td>
              <td>70</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Golden</td>
              <td>6.8</td>
              <td>380</td>
              <td>240</td>
              <td>219</td>
              <td>72.4</td>
              <td>146.6</td>
              <td>20</td>
              <td>6</td>
              <td>13.8</td>
              <td>145</td>
              <td>354</td>
              <td>14.9</td>
              <td>0.5</td>
              <td>0.9</td>
              <td>22.3</td>
              <td>80</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Beni pump</td>
              <td>6.7</td>
              <td>310</td>
              <td>220</td>
              <td>228</td>
              <td>92.8</td>
              <td>135.2</td>
              <td>19</td>
              <td>5</td>
              <td>51.3</td>
              <td>115</td>
              <td>281</td>
              <td>14.2</td>
              <td>0.6</td>
              <td>0.9</td>
              <td>40.5</td>
              <td>60</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Lichi orchard</td>
              <td>6.3</td>
              <td>400</td>
              <td>250</td>
              <td>230</td>
              <td>92.7</td>
              <td>137.3</td>
              <td>22</td>
              <td>10</td>
              <td>6.3</td>
              <td>140</td>
              <td>342</td>
              <td>15.6</td>
              <td>0.3</td>
              <td>0.6</td>
              <td>17.8</td>
              <td>70</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Field</td>
              <td>6.5</td>
              <td>325</td>
              <td>200</td>
              <td>244</td>
              <td>92.3</td>
              <td>152.2</td>
              <td>19</td>
              <td>8</td>
              <td>30.0</td>
              <td>115</td>
              <td>281</td>
              <td>9.9</td>
              <td>0.3</td>
              <td>1.5</td>
              <td>32.4</td>
              <td>80</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Double</td>
              <td>6.7</td>
              <td>385</td>
              <td>220</td>
              <td>218</td>
              <td>65</td>
              <td>153</td>
              <td>18</td>
              <td>5</td>
              <td>46.3</td>
              <td>140</td>
              <td>342</td>
              <td>11.4</td>
              <td>0.4</td>
              <td>0.9</td>
              <td>38.5</td>
              <td>70</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Lambert</td>
              <td>6.8</td>
              <td>310</td>
              <td>210</td>
              <td>217</td>
              <td>55.0</td>
              <td>162.0</td>
              <td>23</td>
              <td>6</td>
              <td>52.5</td>
              <td>120</td>
              <td>293</td>
              <td>10.7</td>
              <td>0.6</td>
              <td>0.5</td>
              <td>22.3</td>
              <td>60</td>
            
            </tr>
            <tr>
          <td>13</td>
          <td>Block D 1</td>
          <td>6.8</td>
          <td>370</td>
          <td>210</td>
          <td>217</td>
          <td></td>
          <td>160.1</td>
          <td>21</td>
          <td>6</td>
          <td>63.8</td>
          <td>112</td>
          <td>272</td>
          <td>14.2</td>
          <td>0.6</td>
          <td>0.3</td>
          <td>38.5</td>
          <td>30</td>
        </tr>
        <tr>
          <td>14</td>
          <td>Block D 2</td>
          <td>6.8</td>
          <td>320</td>
          <td>220</td>
          <td>209</td>
          <td>22.6</td>
          <td>186.5</td>
          <td>17</td>
          <td>10</td>
          <td>62.5</td>
          <td>128</td>
          <td>311</td>
          <td>14.9</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>32.4</td>
          <td>50</td>
        </tr>
        <tr>
          <td>15</td>
          <td>S Block 1</td>
          <td>6.9</td>
          <td>265</td>
          <td>180</td>
          <td>182</td>
          <td>127.1</td>
          <td>54.9</td>
          <td>16</td>
          <td>8</td>
          <td>63.8</td>
          <td>93</td>
          <td>226</td>
          <td>10.7</td>
          <td>0.5</td>
          <td>1.5</td>
          <td>38.5</td>
          <td>80</td>
          </tr>
          <tr>
          <td>16</td>
          <td>S Block 2</td>
          <td>6.7</td>
          <td>335</td>
          <td>220</td>
          <td>209</td>
          <td>96.1</td>
          <td>112.9</td>
          <td>18</td>
          <td>9</td>
          <td>62.5</td>
          <td>133</td>
          <td>323</td>
          <td>13.5</td>
          <td>0.4</td>
          <td>0.3</td>
          <td>38.1</td>
          <td>80</td>
        </tr>
        <tr>
          <td>17</td>
          <td>S Block 3</td>
          <td>6.6</td>
          <td>340</td>
          <td>230</td>
          <td>198</td>
          <td>109.1</td>
          <td>88.9</td>
          <td>15</td>
          <td>4</td>
          <td>76.3</td>
          <td>130</td>
          <td>317</td>
          <td>17.0</td>
          <td>0.6</td>
          <td>0.4</td>
          <td>41.7</td>
          <td>90</td>
        </tr>
        <tr>
          <td>18</td>
          <td>I Block 1</td>
          <td>6.7</td>
          <td>370</td>
          <td>240</td>
          <td>209</td>
          <td>96.0</td>
          <td>113.0</td>
          <td>18</td>
          <td>5</td>
          <td>78.8</td>
          <td>143</td>
          <td>348</td>
          <td>14.9</td>
          <td>0.5</td>
          <td>0.2</td>
          <td>40.5</td>
          <td>70</td>
        </tr>
        <tr>
          <td>19</td>
          <td>I Block 2</td>
          <td>6.8</td>
          <td>360</td>
          <td>240</td>
          <td>238</td>
          <td>72.8</td>
          <td>165.2</td>
          <td>19</td>
          <td>5</td>
          <td>75.0</td>
          <td>113</td>
          <td>276</td>
          <td>14.9</td>
          <td>0.5</td>
          <td>0.9</td>
          <td>44.2</td>
          <td>40</td>
        </tr>
        <tr>
          <td>20</td>
          <td>Haldi 1st</td>
          <td>6.7</td>
          <td>330</td>
          <td>210</td>
          <td>264</td>
          <td>127.1</td>
          <td>136.9</td>
          <td>16</td>
          <td>6</td>
          <td>78.8</td>
          <td>118</td>
          <td>287</td>
          <td>12.1</td>
          <td>0.6</td>
          <td>0.7</td>
          <td>44.7</td>
          <td>75</td>
        </tr>
        <tr>
          <td>21</td>
          <td>Haldi 2nd</td>
          <td>6.7</td>
          <td>360</td>
          <td>230</td>
          <td>241</td>
          <td>90.3</td>
          <td>150.7</td>
          <td>20</td>
          <td>8</td>
          <td>27.5</td>
          <td>138</td>
          <td>336</td>
          <td>15.5</td>
          <td>0.5</td>
          <td>1.1</td>
          <td>19.3</td>
          <td>30</td>
        </tr>
        <tr>
          <td>22</td>
          <td>Haldi 3rd</td>
          <td>6.7</td>
          <td>330</td>
          <td>220</td>
          <td>225</td>
          <td>64.8</td>
          <td>160.7</td>
          <td>19</td>
          <td>7</td>
          <td>81.3</td>
          <td>140</td>
          <td>342</td>
          <td>13.5</td>
          <td>0.6</td>
          <td>1.2</td>
          <td>45.7</td>
          <td>70</td>
        </tr>
        <tr>
          <td>23</td>
          <td>Haldi 4th</td>
          <td>6.8</td>
          <td>320</td>
          <td>230</td>
          <td>235</td>
          <td>88.6</td>
          <td>146.4</td>
          <td>15</td>
          <td>6</td>
          <td>76.3</td>
          <td>130</td>
          <td>317</td>
          <td>14.2</td>
          <td>0.5</td>
          <td>0.4</td>
          <td>40.3</td>
          <td>90</td>
        </tr>
        <tr>
          <td>24</td>
          <td>Haldi 5th</td>
          <td>6.6</td>
          <td>350</td>
          <td>220</td>
          <td>257</td>
          <td>79.2</td>
          <td>177.8</td>
          <td>25</td>
          <td>5</td>
          <td>72.5</td>
          <td>133</td>
          <td>323</td>
          <td>13.5</td>
          <td>0.6</td>
          <td>0.2</td>
          <td>44.9</td>
          <td>70</td>
        </tr>

        <tr>
          <td>25</td>
          <td>Patharchatta</td>
          <td>6.6</td>
          <td>320</td>
          <td>220</td>
          <td>261</td>
          <td>76.5</td>
          <td>184.5</td>
          <td>17</td>
          <td>6</td>
          <td>38.8</td>
          <td>130</td>
          <td>317</td>
          <td>14.1</td>
          <td>0.6</td>
          <td>1.0</td>
          <td>16.1</td>
          <td>90</td>
        </tr>
        <tr>
          <td>26</td>
          <td>Kisak</td>
          <td>6.4</td>
          <td>360</td>
          <td>250</td>
          <td>252</td>
          <td>63.7</td>
          <td>188.8</td>
          <td>16</td>
          <td>6</td>
          <td>81.3</td>
          <td>143</td>
          <td>348</td>
          <td>16.3</td>
          <td>0.5</td>
          <td>0.3</td>
          <td>45.9</td>
          <td>40</td>
        </tr>
        <tr>
          <td>27</td>
          <td>P Block</td>
          <td>6.4</td>
          <td>330</td>
          <td>230</td>
          <td>240</td>
          <td>72.2</td>
          <td>167.8</td>
          <td>18</td>
          <td>8</td>
          <td>37.5</td>
          <td>95</td>
          <td>232</td>
          <td>14</td>
          <td>0.6</td>
          <td>10.7</td>
          <td>18.8</td>
          <td>80</td>
        </tr>
        <tr>
          <td>28</td>
          <td>H Block</td>
          <td>6.5</td>
          <td>380</td>
          <td>230</td>
          <td>370</td>
          <td>186.1</td>
          <td>183.9</td>
          <td>19</td>
          <td>9</td>
          <td>56.3</td>
          <td>130</td>
          <td>317</td>
          <td>16.3</td>
          <td>0.6</td>
          <td>1.5</td>
          <td>54.7</td>
          <td>60</td>
        </tr>
        <tr>
          <td>29</td>
          <td>T Block</td>
          <td>6.6</td>
          <td>360</td>
          <td>240</td>
          <td>222</td>
          <td>120.1</td>
          <td>101.9</td>
          <td>20</td>
          <td>5</td>
          <td>61.3</td>
          <td>105</td>
          <td>256</td>
          <td>13.5</td>
          <td>0.4</td>
          <td>0.4</td>
          <td>56.8</td>
          <td>80</td>
        </tr>
        <tr>
          <td>30</td>
          <td>Q Block</td>
          <td>6.8</td>
          <td>450</td>
          <td>240</td>
          <td>206</td>
          <td>40</td>
          <td>166</td>
          <td>18</td>
          <td>6</td>
          <td>32.5</td>
          <td>130</td>
          <td>317</td>
          <td>17</td>
          <td>0.5</td>
          <td>0.7</td>
          <td>15.2</td>
          <td>75</td>
        </tr>

          </tbody>
        </table>
</div>
      

<h1 style={{margin:"20px"}}>Locations of All Artesian Wells in Pantnagar</h1>
<div className="Container">



{
sources.map(item=>{
  return <Card src={item} info={Data[i++]} openModal={openModal} closeModal={closeModal}></Card>
})}




    
</div>

    </div>
    )
}

export default ArtesianWells;