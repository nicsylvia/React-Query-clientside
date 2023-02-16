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

                        <li>Paper is sent to 2 reviewers for review.</li>

                        <li>The reviewers’ and editorial team’s recommendations determine whether a paper will be accepted / accepted subject to minor revisions / accepted subject to major revisions / rejected, may revise with significant changes and resubmit for review / rejected.</li>

                        <li>For papers which require revisions, the same reviewers will be used to ensure that the quality of the revised paper is acceptable.</li>

                        <li>If the paper is recommended by the reviewers, acceptance letter will be provided. </li>
                        
                        <li>Mentor approval form is completed </li>

                        <li>Author/Corresponding Author will be notified about the possible date of publication </li>
                    </ul>
                    </p>
                </Div>
                <Div>
                    <h3>Style of Paper</h3>
                    <p>
                        <ul>
                            <li>
                                <h4>Language:</h4>
                                <p>Papers should be written in clear, concise and grammatically correct UK or American English.  </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h4>Length:</h4>
                                <p>Paper should not be more than 4000 words including abstract and references.
 </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h4>Tables and Figures:</h4>
                                <p>Tables and figures should be appropriately labeled and presented within the body of the paper. Tables and figures should be self-explanatory. Each table should have a table title, source and legend. 
  </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h4>Format:</h4>
                                <p>Paper should be written using 12 font size, New Times Roman font style and typed in double line spacing. All pages should be numbered consecutively in the bottom 7 excluding the title page. The paper should be divided into clearly defined and numbered sections. Sections should be numbered 1, 2. (then subsections 1.1, 1.1.1, 1.1.2), 1.2, etc. The abstract is not included in section numbering. The author(s)’s information should be provided only in the title page and not in other parts of the manuscript. The paper should be presented in the following order:
  </p>
                            </li>
                        </ul>
                    </p>
                </Div>

                <Div>
                    <Title>
                    Title Page
                    </Title>
                    <Desc>The title page should include title and author(s) information. Title should be a compact and brief (capitalize first letter of each word in the title) describing the contents of the paper. Title Page should include the authors’ full names and affiliations, the name of the mentor(s) along with phone numbers and e-mail information. Indicate the details of corresponding author.</Desc>
                </Div>
                <Div>
                    <Title>
                    Abstract
                    </Title>
                    <Desc>Abstract should not exceed 250 words and should describe the scope, methodology and main findings in clear terms. The abstract should be written in past tense with complete sentences and active verbs.  Abstract should use Standard Nomenclature and not include abbreviations. No literature should be cited in the abstract</Desc>
                </Div>
            </Wrapper>
        </Container2>
    </div>
  )
}

export default About;

const Desc = styled.p`
    
`
const Title = styled.h2`
    
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1{
        margin: 0;
        width: 900px;
        text-align: center;
        color: #000000d1;
    }
`;
const Container2 = styled.div`
    width: 100%;
    padding: 20px 0px 20px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: blue; */
`;
const Wrapper = styled.div`
    width: 95%;
    padding: 10px 0px 10px 0px;
    /* background-color: red; */

`;
const Div = styled.div`
li{
    /* display: flex; */

    p{
        margin: 0;
        margin-left: 10px;

        text-align: justify;
    
    }
    h4{
        margin: 0;
        /* width: 160px; */

    }
}`;