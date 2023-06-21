import React from 'react'

import { Container, MainHeading } from '../../globalStyle';
import { DesignVideo, DesignSection, DesignText, ButtonWrapper, } from './DesignStyles';
import Wireframe1 from "../Blogs/Homepage.png";
import Wireframe2 from "../Blogs/BlognDesign.png";
import Wireframe3 from "../Blogs/InternetArt.png";


const DesignSect = () => {
  return <DesignSection> 
    <DesignVideo src = "./assets/Coffee.mp4" autoPlay muted/>
    <Container>
        <MainHeading>Design Rationale </MainHeading>
        <DesignText>

       My new site with React is true to what I wanted to do from the beginning, make a website that is inspired by Jack Staubers art. The arts chaoticness, creativity and beauty. My design goals did not change but from Assignments one’s feedback I had new goals. One of my concerns I addressed in my design rationale was convention and familiarity. I felt like as much as I wanted a blog that was unique, challenged a lot of web design boundaries because that is what Jack’s art does, I still had to consider the assignment and the rubric. In my last website I thought I had considered good UI and UX but that was not the case because I didn’t get marked well on that. My new goals for my website were familiarity and good UI and UX design, specifically fixing my navigation. My marker had expressed that my website could be confusing when they landed on certain pages especially pages that did not have my original navbar that was on the landing/homepage. This made it difficult to keep track of where you are on my website. Navigating through the blogs was also difficult. Beginning my blog I had a new set of goals including still having some shock value for my site after having extensively analysed a website called Screenfull for Assignment 2 I was inspired. My assignment feedback really made me think about what my site was about, I had said my site was going to be inspired by Jack Stauber’s art but I only focused on Opal, the short film. In this new site, the website does not solely focus on Opal but rather on Jack Stauber. The homepage displays some of his work in a carousel style. Work that is not complimentary to the colourway I had chosen in that last assignment. My last assignments colourways included shades of dusty green, greys and black. This new site has white negative spaces to balance once especially the home page with a lot of components. The site also has shades of blue evident on the footer and scroll icons as well as the navabar. The content on the navbar fits perfectly. I’ve added videos as backgrounds on all of the pages for that chaoticness I wanted to experiment with on my last assignment. One thing I realised with Screenfull was that the pages on the site did not correlate but it still worked because it created a beautiful mess, a content overload website that the users intended for. My pages have different videos all from Jack’s work. One of the requirements for this assignment were to make the website an internet artwork itself. My website still has a door animation that users can interact with, another way there is interactivity on the web is through the carousel. Users can scroll and see all of the pictures featured on the carousel. To stay true to making the website about Jack Stauber and his art and exclusively the internet art about Opal I used the footer as a medium to get a sense of Jack. The footer has all the things people have said about Jack Stauber and his art quoted,  all the descriptions about the type of artist he is, including music genres and distinct features in his art like teeth. The quotes are links. I noticed that Screenfull had a lot of links that led to different pages, for this assignment I could not do that because of the time and size of site. I wanted the links to lead to different pages and that would mean my site would have to have multiple pages which was not ideal. The quotes all lead to the homepage. On my last site the navbar had a different logo. It was a hand with an eyeball inside it.  This was because I was still following Opal’s theme around the site and not necessarily Jack. After doing research I found that Jack Stauber has an obsession with teeth, teeth also make a feature even in Opal hence the new logo which is teeth with eyes.
               
         </DesignText>
        <ButtonWrapper>
          
        </ButtonWrapper>
    </Container>
    <Container>
        <MainHeading>UI and UX </MainHeading>
        <DesignText>

      For my new site, I have considered spacing and negative space extensively. The spacing in between components. I wanted the website to not be clustered. As mentioned in my rationale, Screenfull is a website that inspired me. I felt thought that Screenfull was clustered and user experience was not considered but as the creators have mentioned in interviews, that was the whole point of the website. My website was also made to be an experience but there is also content and writing and I did not want to get in the way of that thus the improvement in spacing. Another UI and UX consideration is consideration the type of videos I was using as background videos. The videos on the homepage and design page are some of Jack’s dark eerie work. This was international because I wanted the user to focus on the content of the page. The homepage has too many components hence the background video is just of Opal dancing, the colours are dark and don’t take away from the activity happening on the rest of the page. The design section has both images and text. This I felt was already to look at hence the video. Completely different from the two pages I’ve discussed, the blogs pages has a colourful background video. On this page I felt I wanted to be experimental. The content is minimal on a black background. Although this is what I intended, I did see that the video was distracting when reading the blogs, to consider user experience the background video only loops twice and stops playing which gives the user a chance to read the blogs. The video only plays again after the page is refreshed. My whole site is responsive which is an improvement because some pages in Assignment 1 were not responsive. The users can easily use components on my website. There is text that indicates that a certain component is a door. There is text that indicates that users can scroll to use the carousel. The scroll icons also change colour on hover to indicate that the user may interact with them. Another thing I wanted to consider this time was consistent navigation. My navbar is on all of my pages including the placeholder internet artwork page. It is sticky, the user can scroll down and they will still have access to the navbar. React made things easier for me. I was able to create a navbar function and add it to app.js and have it appear on all of my pages. I also created a global styles page to insist on consistency in my blog. The font is consistent, the spacing, the font size and etc.
         </DesignText>
        <ButtonWrapper>
          
        </ButtonWrapper>
    </Container>

    <Container>
        <MainHeading>Internet Artwork Rationale and Preparation </MainHeading>
        <DesignText>
        For my internet artwork I’m still sticking to storytelling through images, text and audio. I plan to have the same swinging collage but different I want the users to want to view the images in full. All the images in the collage are highlights in the short film. For users to get a full picture of the video and the story I want to implement audio. The dialogue that goes on between characters at that point, the images will be placed in such a way that it is the beginning of the film till the end. The user will be seeing a picture, listening to audio and creating and visualising the events in their head. The internet artwork will have a background video like the rest of the videos and will solely focus on Opal the film. I hope I am able to tell the story that is it true to the video and true to how mesmerising the video is. That is my internet artwork proposal.
    
         </DesignText>
        <ButtonWrapper>
          
        </ButtonWrapper>
    </Container>

    <Container>
        <MainHeading>Wireframes </MainHeading>
        <DesignText>
          <h1>Homepage Wireframe</h1>
        
         <img style={{ width: 500, height: 400 }} src={Wireframe1} alt="" />
   
       
         </DesignText>
        <ButtonWrapper>
          
        </ButtonWrapper>
    </Container>

    <Container>
      
        <DesignText>
          <h1>Blog Section and Design Section Wireframe</h1>
        
         <img style={{ width: 500, height: 400 }} src={Wireframe2} alt="" />
   
       
         </DesignText>
        <ButtonWrapper>
          
        </ButtonWrapper>
    </Container>
    <Container>
      
      <DesignText>
        <h1>InternetArt Wireframe</h1>
      
       <img style={{ width: 500, height: 400 }} src={Wireframe3} alt="" />
 
     
       </DesignText>
      <ButtonWrapper>
        
      </ButtonWrapper>
  </Container>


    



    
    
  </DesignSection>

  
}

export default DesignSect