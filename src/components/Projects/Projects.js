import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider/>
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
          {projects.map(({ id, image, title, description, tags, source, visit} ) => (
              <BlogCard key={id}>
                  <Img src={image}/>
                 <div>
                     <TitleContent>
                         <HeaderThree title>{title}</HeaderThree>
                         <Hr/>
                         <CardInfo>{description}</CardInfo>
                         <TitleContent>Stack</TitleContent>
                         <TagList>
                             {tags.map((tag, i) => (
                                 <Tag key={1}>{tag}</Tag>
                             ))}
                         </TagList>
                     </TitleContent>
                 </div>
                  <UtilityList>
                      <ExternalLinks href={visit}>Code</ExternalLinks>
                      <ExternalLinks href={visit}>Source</ExternalLinks>
                  </UtilityList>
              </BlogCard>
              ))}
      </GridContainer>
  </Section>
);

export default Projects;
