// const wellImage = document.querySelector('.card-image');

// const openModal=>()

const WellsArray = [
   { 
    "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2494.563349960718!2d79.48553562067704!3d29.01847546195178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzA2LjYiTiA3OcKwMjknMTQuNiJF!5e1!3m2!1sen!2sin!4v1679546820917!5m2!1sen!2sin",
    "dataWell":"1	CRC1st	6.5	425	220	212	76.4	136.1	21	4	12.5	125	305	15.6	0.4	0.9	12.4	40"
  },

   {
      
   "nameWell":"card2",
    "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d8347.851100255111!2d79.48008735098306!3d29.014455646618586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzUxLjUiTiA3OcKwMjknMDguOSJF!5e1!3m2!1sen!2sin!4v1681036518504!5m2!1sen!2sin",
    "dataWell":"2	CRC 2nd	6.8	430	250	232	92.3	139.7	19	7	26.3	133	323	13.5	0.5	0.8	24.3	70"
 },
   {
    "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12793.63038016821!2d79.47824522849726!3d29.01189971631255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzQyLjgiTiA3OcKwMjknMTMuMiJF!5e1!3m2!1sen!2sin!4v1681036658010!5m2!1sen!2sin",
    "dataWell":"3	CRC 3rd	6.9	330	190	242	86.0	156.0	22	3	30.0	128	311	11.4	0.4	0.8	36.5	50								"
  },

   {
      
    "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12794.076153131722!2d79.4825452284958!3d29.0082997163348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzI5LjkiTiA3OcKwMjknMjguNyJF!5e1!3m2!1sen!2sin!4v1681036737796!5m2!1sen!2sin",
    "dataWell":"4	CRC 4th	6.7	350	200	236	105.5	130.5	18	6	42.3	125	305	14.9	0.5	0.9	30.4	60"								
 },
   {
    
    "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12791.62377683086!2d79.48764522850374!3d29.02809971621243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzQxLjIiTiA3OcKwMjknNDcuMCJF!5e1!3m2!1sen!2sin!4v1681036866028!5m2!1sen!2sin",
    "dataWell":"5	Ta Colony 1st	6.6	405	240	235	69.0	166.0	18	4	81.3	145	354	20.6	0.5	1.1	50.7	60"
  },

   {
    "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13663.634363153276!2d79.48734523128581!3d29.029199716205813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzQ1LjEiTiA3OcKwMjknNDYuMCJF!5e1!3m2!1sen!2sin!4v1681036956481!5m2!1sen!2sin",
    "dataWell":"6	TaColony	6.8	370	250	250	94.7	155.3	16	4	24.5	138	336	20.6	0.4	1.3	26.4	70"
 },
   {
    "srcWell":"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d13663.634365298085!2d79.4873452!3d29.0291997!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzMyLjIiTiA3OcKwMjknMjcuNiJF!5e1!3m2!1sen!2sin!4v1681037076867!5m2!1sen!2sin",
    "dataWell":"7	Golden	6.8	380	240	219	72.4	146.6	20	6	13.8	145	354	14.9	0.5	0.9	22.3	80"
  },

   {
      
    "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13665.06347878475!2d79.49634523128181!3d29.018399716272523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzA2LjIiTiA3OcKwMzAnMTguNCJF!5e1!3m2!1sen!2sin!4v1681037141544!5m2!1sen!2sin" ,
    "dataWell":"8	BeniPump	6.7	310	220	228	92.8	135.2	19	5	51.3	115	281	14.2	0.6	0.9	40.5	60								"								
 },

   {
    
    "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2494.563349960718!2d79.48553562067704!3d29.01847546195178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzA2LjYiTiA3OcKwMjknMTQuNiJF!5e1!3m2!1sen!2sin!4v1679546820917!5m2!1sen!2sin",
    "dataWell":"9	LichiOrchard	6.3	400	250	230	92.7	137.3	22	10	6.3	140	342	15.6	0.3	0.6	17.8	70"
  },

   {
      
   
    "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d8347.851100255111!2d79.48008735098306!3d29.014455646618586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzUxLjUiTiA3OcKwMjknMDguOSJF!5e1!3m2!1sen!2sin!4v1681036518504!5m2!1sen!2sin",
    "datawell":"10	Field	6.5	325	200	244	92.3	152.2	19	8	30	115	281	9.9	0.3	1.5	32.4	80"
 },
   {
    "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12793.63038016821!2d79.47824522849726!3d29.01189971631255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzQyLjgiTiA3OcKwMjknMTMuMiJF!5e1!3m2!1sen!2sin!4v1681036658010!5m2!1sen!2sin",
    "datawell":"11	Double	6.7	385	220	218	65	153	18	5	46.3	140	342	11.4	0.4	0.9	38.5	70"
  },

   {
    "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12794.076153131722!2d79.4825452284958!3d29.0082997163348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzI5LjkiTiA3OcKwMjknMjguNyJF!5e1!3m2!1sen!2sin!4v1681036737796!5m2!1sen!2sin",
    "datawell":"12	Lambert	6.8	310	210	217	55	162	23	6	52.5	120	293	10.7	0.6	0.5	22.3	60"							
 },
   {
    
    "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2494.563349960718!2d79.48553562067704!3d29.01847546195178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzA2LjYiTiA3OcKwMjknMTQuNiJF!5e1!3m2!1sen!2sin!4v1679546820917!5m2!1sen!2sin",
    "dataWell":"1	CRC1st	6.5	425	220	212	76.4	136.1	21	4	12.5	125	305	15.6	0.4	0.9	12.4	40"
 ` },

//    {
      
//    "nameWell":"card2",
//     "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d8347.851100255111!2d79.48008735098306!3d29.014455646618586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzUxLjUiTiA3OcKwMjknMDguOSJF!5e1!3m2!1sen!2sin!4v1681036518504!5m2!1sen!2sin",
//     "dataWell":"2	CRC 2nd	6.8	430	250	232	92.3	139.7	19	7	26.3	133	323	13.5	0.5	0.8	24.3	70"
//  `},
//    {
//     "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12793.63038016821!2d79.47824522849726!3d29.01189971631255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzQyLjgiTiA3OcKwMjknMTMuMiJF!5e1!3m2!1sen!2sin!4v1681036658010!5m2!1sen!2sin",
//     "dataWell":"3	CRC 3rd	6.9	330	190	242	86.0	156.0	22	3	30.0	128	311	11.4	0.4	0.8	36.5	50								"
//  ` },

//    {
      
//     "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12794.076153131722!2d79.4825452284958!3d29.0082997163348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzI5LjkiTiA3OcKwMjknMjguNyJF!5e1!3m2!1sen!2sin!4v1681036737796!5m2!1sen!2sin",
//     "dataWell":"4	CRC 4th	6.7	350	200	236	105.5	130.5	18	6	42.3	125	305	14.9	0.5	0.9	30.4	60"								
//  `},
//    {
    
//     "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2494.563349960718!2d79.48553562067704!3d29.01847546195178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzA2LjYiTiA3OcKwMjknMTQuNiJF!5e1!3m2!1sen!2sin!4v1679546820917!5m2!1sen!2sin",
//     "dataWell":"1	CRC1st	6.5	425	220	212	76.4	136.1	21	4	12.5	125	305	15.6	0.4	0.9	12.4	40"
//  ` },

//    {
      
//    "nameWell":"card2",
//     "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d8347.851100255111!2d79.48008735098306!3d29.014455646618586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzUxLjUiTiA3OcKwMjknMDguOSJF!5e1!3m2!1sen!2sin!4v1681036518504!5m2!1sen!2sin",
//     "dataWell":"2	CRC 2nd	6.8	430	250	232	92.3	139.7	19	7	26.3	133	323	13.5	0.5	0.8	24.3	70"
//  `},
//    {
//     "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12793.63038016821!2d79.47824522849726!3d29.01189971631255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzQyLjgiTiA3OcKwMjknMTMuMiJF!5e1!3m2!1sen!2sin!4v1681036658010!5m2!1sen!2sin",
//     "dataWell":"3	CRC 3rd	6.9	330	190	242	86.0	156.0	22	3	30.0	128	311	11.4	0.4	0.8	36.5	50								"
//  ` },

//    {
      
//     "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12794.076153131722!2d79.4825452284958!3d29.0082997163348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzI5LjkiTiA3OcKwMjknMjguNyJF!5e1!3m2!1sen!2sin!4v1681036737796!5m2!1sen!2sin",
//     "dataWell":"4	CRC 4th	6.7	350	200	236	105.5	130.5	18	6	42.3	125	305	14.9	0.5	0.9	30.4	60"								
//  `},
//    {
    
//     "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2494.563349960718!2d79.48553562067704!3d29.01847546195178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzA2LjYiTiA3OcKwMjknMTQuNiJF!5e1!3m2!1sen!2sin!4v1679546820917!5m2!1sen!2sin",
//     "dataWell":"1	CRC1st	6.5	425	220	212	76.4	136.1	21	4	12.5	125	305	15.6	0.4	0.9	12.4	40"
//  ` },

//    {
      
//    "nameWell":"card2",
//     "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d8347.851100255111!2d79.48008735098306!3d29.014455646618586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzUxLjUiTiA3OcKwMjknMDguOSJF!5e1!3m2!1sen!2sin!4v1681036518504!5m2!1sen!2sin",
//     "dataWell":"2	CRC 2nd	6.8	430	250	232	92.3	139.7	19	7	26.3	133	323	13.5	0.5	0.8	24.3	70"
//  `},
//    {
//     "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12793.63038016821!2d79.47824522849726!3d29.01189971631255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzQyLjgiTiA3OcKwMjknMTMuMiJF!5e1!3m2!1sen!2sin!4v1681036658010!5m2!1sen!2sin",
//     "dataWell":"3	CRC 3rd	6.9	330	190	242	86.0	156.0	22	3	30.0	128	311	11.4	0.4	0.8	36.5	50								"
//  ` },

//    {
      
//     "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12794.076153131722!2d79.4825452284958!3d29.0082997163348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzI5LjkiTiA3OcKwMjknMjguNyJF!5e1!3m2!1sen!2sin!4v1681036737796!5m2!1sen!2sin",
//     "dataWell":"4	CRC 4th	6.7	350	200	236	105.5	130.5	18	6	42.3	125	305	14.9	0.5	0.9	30.4	60"								
//  `},
//    {
    
//     "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2494.563349960718!2d79.48553562067704!3d29.01847546195178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzA2LjYiTiA3OcKwMjknMTQuNiJF!5e1!3m2!1sen!2sin!4v1679546820917!5m2!1sen!2sin",
//     "dataWell":"1	CRC1st	6.5	425	220	212	76.4	136.1	21	4	12.5	125	305	15.6	0.4	0.9	12.4	40"
//  ` },

//    {
      
//    "nameWell":"card2",
//     "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d8347.851100255111!2d79.48008735098306!3d29.014455646618586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzUxLjUiTiA3OcKwMjknMDguOSJF!5e1!3m2!1sen!2sin!4v1681036518504!5m2!1sen!2sin",
//     "dataWell":"2	CRC 2nd	6.8	430	250	232	92.3	139.7	19	7	26.3	133	323	13.5	0.5	0.8	24.3	70"
//  `},
//    {
//     "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12793.63038016821!2d79.47824522849726!3d29.01189971631255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzQyLjgiTiA3OcKwMjknMTMuMiJF!5e1!3m2!1sen!2sin!4v1681036658010!5m2!1sen!2sin",
//     "dataWell":"3	CRC 3rd	6.9	330	190	242	86.0	156.0	22	3	30.0	128	311	11.4	0.4	0.8	36.5	50								"
//  ` },

//    {
      
//     "srcWell":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12794.076153131722!2d79.4825452284958!3d29.0082997163348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzI5LjkiTiA3OcKwMjknMjguNyJF!5e1!3m2!1sen!2sin!4v1681036737796!5m2!1sen!2sin",
//     "dataWell":"4	CRC 4th	6.7	350	200	236	105.5	130.5	18	6	42.3	125	305	14.9	0.5	0.9	30.4	60"								
//  `},


 


// "card_7" : `
// <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

//  `,

//     "card_8" : `
          
//     <iframe src=width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
//  `,
// "card_9" : `
          
// <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13663.965220141343!2d79.49804523128492!3d29.02669971622125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzM2LjEiTiA3OcKwMzAnMjQuNSJF!5e1!3m2!1sen!2sin!4v1681037208907!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//  `,

//     "card_10" : `
          
//     <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13663.462307238859!2d79.49464523128634!3d29.030499716197774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzQ5LjgiTiA3OcKwMzAnMTIuMiJF!5e1!3m2!1sen!2sin!4v1681037268244!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
//  `,
// "card_11" : `
          
// <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13665.672028746414!2d79.50294523128008!3d29.013799716300973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzQ5LjciTiA3OcKwMzAnNDIuMSJF!5e1!3m2!1sen!2sin!4v1681037322112!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

//  `,

//     "card_12" : `
//     <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13664.335749083813!2d79.46364523128386!3d29.02389971623855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzI2LjAiTiA3OcKwMjgnMjAuNiJF!5e1!3m2!1sen!2sin!4v1681037370519!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
//  `,
// "card_13" : `
          
// <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13664.89148131004!2d79.45104523128234!3d29.019699716264487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzEwLjkiTiA3OcKwMjcnMzUuMyJF!5e1!3m2!1sen!2sin!4v1681037436498!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

//  `,

//     "card_14" : `
          
//     <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13665.341305998703!2d79.44374523128104!3d29.01629971628549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzU4LjciTiA3OcKwMjcnMDkuMCJF!5e1!3m2!1sen!2sin!4v1681037486742!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  
//  `,
// "card_15" : `
          
// <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13667.788038210301!2d79.4943452312741!3d28.99779971639992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDU5JzUyLjEiTiA3OcKwMzAnMTEuMiJF!5e1!3m2!1sen!2sin!4v1681037563354!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

//  `,

//     "card_16" : `
          
//     <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13668.343314087902!2d79.49424523127254!3d28.993599716425884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDU5JzM3LjAiTiA3OcKwMzAnMTAuOCJF!5e1!3m2!1sen!2sin!4v1681037602175!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   
//  `,
// "card_17" : `
// <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13666.875639830747!2d79.49264523127665!3d29.00469971635723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzE2LjkiTiA3OcKwMzAnMDUuMCJF!5e1!3m2!1sen!2sin!4v1681037685364!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

//  `,

//     "card_18" : `
          
//     <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13667.259135760594!2d79.48794523127556!3d29.001799716375178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzA2LjUiTiA3OcKwMjknNDguMSJF!5e1!3m2!1sen!2sin!4v1681037742842!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
//  `,
// "card_19" : `
          
// <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13667.325252209737!2d79.48874523127543!3d29.00129971637826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzA0LjciTiA3OcKwMjknNTEuMCJF!5e1!3m2!1sen!2sin!4v1681037798518!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

//  `,

//     "card_20" : `
          
//     <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13662.906386212444!2d79.43504523128792!3d29.034699716171833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAyJzA0LjkiTiA3OcKwMjYnMzcuNyJF!5e1!3m2!1sen!2sin!4v1681037853899!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   
//  `,
// "card_21" : `
          
// <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d13662.906388353123!2d79.4350452!3d29.0346997!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzI2LjAiTiA3OcKwMjYnMjAuOCJF!5e1!3m2!1sen!2sin!4v1681037964998!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

//  `,

//    " card_22" : `
          
//     <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13664.143872098208!2d79.42884523128443!3d29.025349716229577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzMxLjMiTiA3OcKwMjYnMTUuNCJF!5e1!3m2!1sen!2sin!4v1681038019251!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   
//  `,

// "card_23" : `
          
// <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13662.89314910269!2d79.43224523128795!3d29.034799716171243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAyJzA1LjMiTiA3OcKwMjYnMjcuNiJF!5e1!3m2!1sen!2sin!4v1681038084339!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

//  `,

//     "card_24" : `
          
//     <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13667.483927441095!2d79.43604523127499!3d29.00009971638568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzAwLjQiTiA3OcKwMjYnNDEuMyJF!5e1!3m2!1sen!2sin!4v1681038134417!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   
//  `,

// "card_25" : `
          
//     <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2494.563349960718!2d79.48553562067704!3d29.01847546195178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzA2LjYiTiA3OcKwMjknMTQuNiJF!5e1!3m2!1sen!2sin!4v1679546820917!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="map"></iframe>
   
//  `,

//     "card_26" : `
          
//     <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13663.674067365379!2d79.4058452312857!3d29.028899716207658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzQ0LjAiTiA3OcKwMjQnNTIuNiJF!5e1!3m2!1sen!2sin!4v1681038192956!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   
//  `,
    
// "card_27" : `
          
// <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13667.370210800635!2d79.46654523127528!3d29.000959716380354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzAzLjUiTiA3OcKwMjgnMzEuMSJF!5e1!3m2!1sen!2sin!4v1681039422390!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

//  `,

//     "card_28" : `
          
//     <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13664.42837622053!2d79.44254523128363!3d29.023199716242882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzIzLjUiTiA3OcKwMjcnMDQuNyJF!5e1!3m2!1sen!2sin!4v1681039483561!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
//  `,
    
// "card_29" : `
          
// <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13666.359848721646!2d79.48774523127814!3d29.008599716333137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzMxLjAiTiA3OcKwMjknNDcuNCJF!5e1!3m2!1sen!2sin!4v1681039538333!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

//  `,

//     "card_30" : `
          
//     <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13666.888864411174!2d79.48254523127666!3d29.004599716357852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzE2LjYiTiA3OcKwMjknMjguNyJF!5e1!3m2!1sen!2sin!4v1681039579963!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
//  `




 ]



export default WellsArray














// 1	CRC 1st	6.5	425	220	212	76.4	136.1	21	4	12.5	125	305	15.6	0.4	0.9	12.4	40

// 2	CRC 2nd	6.8	430	250	232	92.3	139.7	19	7	26.3	133	323	13.5	0.5	0.8	24.3	70

// 3	CRC 3rd	6.9	330	190	242	86.0	156.0	22	3	30.0	128	311	11.4	0.4	0.8	36.5	50

// 4	CRC 4th	6.7	350	200	236	105.5	130.5	18	6	42.3	125	305	14.9	0.5	0.9	30.4	60


// 6	Ta Colony	6.8	370	250	250	94.7	155.3	16	4	24.5	138	336	20.6	0.4	1.3	26.4	70

// 7	Golden	6.8	380	240	219	72.4	146.6	20	6	13.8	145	354	14.9	0.5	0.9	22.3	80

// 8	Beni pump	6.7	310	220	228	92.8	135.2	19	5	51.3	115	281	14.2	0.6	0.9	40.5	60

// 9	Lichi orchard	6.3	400	250	230	92.7	137.3	22	10	6.3	140	342	15.6	0.3	0.6	17.8	70

// 10	Field	6.5	325	200	244	92.3	152.2	19	8	30.0	115	281	9.9	0.3	1.5	32.4	80
// 11	Double	6.7	385	220	218	65	153	18	5	46.3	140	342	11.4	0.4	0.9	38.5	70
// 12	Lambert	6.8	310	210	217	55.0	162.0	23	6	52.5	120	293	10.7	0.6	0.5	22.3	60
// 13	Block D 1	6.8	370	210	217		160.1	21	6	63.8	112	272	14.2	0.6	0.3	38.5	30
// 14	Block D 2	6.8	320	220	209	22.6	186.5	17	10	62.5	128	311	14.9	0.5	0.5	32.4	50
// 15	S Block 1	6,9	265	180	182	127.1	54.9	16	8	63.8	93	226	10.7	0.5	1.5	38.5	80

// 16	S Block 2	6.7	335	220	209	96.1	112.9	18	9	62.5	133	323	13.5	0.4	0.3	38.1	80
// 17	S Block 3	6.6	340	230	198	109.1	88.9	15	4	76.3	130	317	17.0	0.6	0.4	41.7	90
// 18	I Block 1	6.7	370	240	209	96.0	113.0	18	5	78.8	143	348	14.9	0.5	0.2	40.5	70
// 19	I Block 2	6.8	360	240	238	72.8	165.2	19	5	75.0	113	276	14.9	0.5	0.9	44.2	40
// 20	Haldi 1st	6.7	330	210	264	127.1	136.9	16	6	78.8	118	287	12.1	0.6	0.7	44.7	75
// 21	Haldi 2nd	6.7	360	230	241	90.3	150.7	20	8	27.5	138	336	15.5	0.5	1.1	19.3	30
// 22	Haldi 3rd	6.7	330	220	225	64.8	160.7	19	7	81.3	140	342	13.5	0.6	1.2	45.7	70
// 23	Haldi 4th	6.8	320	230	235	88.6	146.4	15	6	76.3	130	317	14.2	0.5	0.4	40.3	90
// 24	Haldi 5th	6.6	350	220	257	79.2	177.8	25	5	72.5	133	323	13.5	0.6	0.2	44.9	70
// 25	Patharchatta	6.6	320	220	261	76.5	184.5	17	6	38.8	130	317	14.1	0.6	1.0	16.1	90
// 26	Kisak	6.4	360	250	252	63.7	188.8	16	6	81.3	143	348	16.3	0,5	0.3	45.9	40
// 27	P Block	6.4	330	230	240	72.2	167.8	18	8	37.5	95	232	14	0.6	10.7	18.8	80
// 28	H Block	6.5	380	230	370	186.1	183.9	19	9	56.3	130	317	16.3	0.6	1.5	54.7	60
// 29	T Block	6.6	360	240	222	120.1	101.9	20	5	61.3	105	256	13.5	0.4	0.4	56.8	80
// 30	Q Block	6.8	450	240	206	40	166	18	6	32.5	130	317	17	0.5	0.7	15.2	75