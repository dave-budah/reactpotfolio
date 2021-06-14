import React from 'react';
import {DiAndroid, DiCode, DiFirebase, DiReact, DiZend} from 'react-icons/di';
import {Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {List, ListContainer, ListItem, ListParagraph, ListTitle} from './TechnologiesStyles';

const Technologies = () => (
    <Section id='tech'>
        <SectionDivider/>
        <br/>
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            I work with a range of technologies, these I choose based on the job at hand. Here are some of them.
        </SectionText>
        <List>
            <ListItem>
                <DiCode size='4rem'/>
                <ListContainer>
                    <ListTitle>Frontend</ListTitle>
                    <ListParagraph>
                        Materialize CSS <br/>
                        Angular <br/>
                        Tailwind CSS <br/>
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiFirebase size='3rem'/>
                <ListContainer>
                    <ListTitle>Backend</ListTitle>
                    <ListParagraph>
                        Laravel <br/>
                        Node.js <br/>
                        ASP .Net <br/>
                        Spring Boot <br/>
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiAndroid size='3rem'/>
                <ListContainer>
                    <ListTitle>Mobile App Dev</ListTitle>
                    <ListParagraph>
                        Kotlin <br/>
                        Flutter <br/>
                        Java <br/>
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
