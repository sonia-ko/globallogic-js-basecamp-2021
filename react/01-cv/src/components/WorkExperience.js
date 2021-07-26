import OnePositionJob from "./OnePositionJob";
import MultiPositionJob from "./MultiPositionJob";
import JobPosition from "./JobPosition";
import Education from "./education";

function WorkExperience(){
    return <section id="experience" className="section right-paragraph-section">
    <div className="right-paragraph-section-wrapper">
      <h2 className="right-heading">Work experience:</h2>

     <OnePositionJob title={'Front-End developer. Freelance (part-time)'} duration={'01/2021 - 02/2021'} description={'created a website for the clients that can be found on nixor.com.ua . Used HTML, CSS and Javascript. Communicated with the clients regarding the website content and updating it accordingly.'}> </OnePositionJob>

    <MultiPositionJob company={'Namecheap.com'} duration={'10/2016 - 12/2020'}> </MultiPositionJob>

    <JobPosition duration={"09/2019 - 12/2020"} position={"Upgrade Coordinator (full-time)"} description={"I participated in creation of internal online courses for the employees. I worked with the courses content, also, I used HTML and CSS to create course pages and uploaded them to the internal learning management system."}></JobPosition>

    <JobPosition duration={"05/2019 - 12/2020"} position={"Middle QA analyst (additional task)"} description={"Evaluated the quality of work of other CS representatives, provided recommendations and explanations on how to improve personal performance as well as technical explanations related to our external APIs, website building tools, VPN, etc."}></JobPosition>

    <JobPosition duration={"01/2019 - 05/2020"} position={"CS supervisor (full-time)"} description={"I helped our newbies to get acquainted with Namecheap services, explained how to work with internal tools and provided the explanations related to the technical aspects of our work."}></JobPosition>

    <JobPosition duration={"10/2016 - 01/2019"} position={"Customer Support representative(full-time)"} description={"As CS representative, I helped our clients to work with Namecheap services, such as website building applications and tools, hosting, VPN and Namecheap API."}></JobPosition>
     
    <OnePositionJob title={'Wordpress developer Freelancer (part-time)'} duration={'08/2018 - 09/2018'} description={'Created 2 Wordpress websites for the clients. Communicated with the clients regarding the websites content and updated them  accordingly.'}> </OnePositionJob>

    <OnePositionJob title={'Customer Support Representative at UA call'} duration={'02/2012 - 09/2016'} description={'Helped clients with the services provided by our company and with the navigation through the company website.'}> </OnePositionJob>
  
    <Education duration={'09/2010 - 08/2015'} description={'Ivan Franko National University of Lviv. Arabic language and literature.'}></Education>
       
    </div>
  </section>
}

export default WorkExperience;