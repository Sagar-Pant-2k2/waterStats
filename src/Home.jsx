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
<Card3 title={"Dr. Jyothi Prasad"} src={"../images/Proff.jpeg"} desig={"designation"}/>
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, dicta numquam officiis ea iste corporis, alias atque dolorem ipsum praesentium, ex quo neque debitis vero autem. Voluptas at rem sed magnam, hic ipsam explicabo saepe provident quia soluta, vitae ratione nemo est expedita tempora doloribus ipsa eos debitis ex excepturi. Atque veritatis fuga perspiciatis autem? Alias aut sapiente blanditiis quisquam autem, eaque architecto itaque sequi at, quae quo? Quibusdam magni unde minima facere ea minus non corrupti dicta commodi officia debitis dolor pariatur quos totam laborum officiis odio impedit suscipit maxime delectus, ad tempore deleniti nostrum iste? Quos, praesentium facilis?
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