import React from 'react'
import styled from 'styled-components';

const About = () => {
  return (
    <div>
        <Container>
            <h2>JOURNAL FOR UNDERGRADUATE RESEARCH (JUR)</h2>
            <h1>CENTRE FOR UNDERGRADUATE RESEARCH, UNIVERSITY OF ABUJA, ABUJA, Federal Capital Territory, NIGERIA</h1>
        </Container>
        <Container2>
            <Wrapper>
                <Div>
                    <h3>About</h3>
                    <p>
                    Journal for Undergraduate Research (JUR) is an international multidisciplinary biannual publication of the Centre for Undergraduate Research, University of Abuja. It is an Open Access Peer-Reviewed Research Journal that publishes original research and innovations by undergraduate students globally. 
                    </p>
                </Div>
                <Div>
                    <h3>Scope</h3>
                    <p>
                    JUR publishes original research in the management, arts and humanities, social, behavioral, education, agriculture, science, technology, engineering, mathematics, environmental science, pharmacy, nursing and medicine. 
                    </p>
                </Div>
                <Div>
                    <h3>Eligibility</h3>
                    <p>
                    Any undergraduate student (within or outside University of Abuja) can submit paper for publication in JUR. The research must be mentored by academic staff or senior researcher to be eligible for publication. Manuscripts submitted for publication must include a signed note from at least one of the student’s mentors indicating the student’s status and their own mentorship role.  
                    </p>
                </Div>
                <Div>
                    <h3>Article Processing Charge</h3>
                    <p>
                    JUR does not charge any processing fee
                    </p>
                </Div>
                <Div>
                    <h3>Publication Frequency</h3>
                    <p>
                    JUR is published twice in a year (June and December). Papers are received all-year-round, however, last dates of submission for June and December editions are 1st April and 1st October respectively. 
                    </p>
                </Div>
                <Div>
                    <h3>Review and Publication Process</h3>
                    <p>
                    The journal uses a double-blind pair-reviewing process with experts in the discipline of the paper. The review process comprises of the following steps:

                    <ul>
                        <li>Paper is reviewed for compliance to guidelines and plagiarism by managing editor</li>
                    </ul>
                    </p>
                </Div>
            </Wrapper>
        </Container2>
    </div>
  )
}

export default About;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1{
        width: 900px;
        text-align: center;
    }
`;
const Container2 = styled.div`
    width: 100%;
    padding: 20px 0px 20px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blue;
`;
const Wrapper = styled.div`
    width: 95%;
    padding: 10px 0px 10px 0px;
    background-color: red;
`;
const Div = styled.div``;