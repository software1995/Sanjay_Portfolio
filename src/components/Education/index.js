import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education, experiences } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @media (max-width: 660px) {
        align-items: end;
    }
`;

// Tabs Container
const TabsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px 0 10px 0;
    @media (max-width: 768px) {
        margin: 20px 0;
    }
`;

const TabsWrapper = styled.div`
    display: inline-flex;
    background: #1e1e24;
    border-radius: 8px;
    padding: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TabButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: ${(props) => (props.active ? "#fff" : "#aaa")};
    background: ${(props) =>
        props.active
            ? "linear-gradient(90deg, #854CE6 0%, #AF4BF8 100%)"
            : "transparent"};

    &:hover {
        color: ${(props) => (!props.active ? "#fff" : "#fff")};
    }

    @media (max-width: 768px) {
        padding: 6px 12px;
        font-size: 14px;
    }
`;

const EmptyMessage = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.text_secondary};
    margin-top: 40px;
    font-size: 18px;
`;

const EducationSection = () => {
    // Define education categories
    const categories = ["Engineering", "Senior Secondary", "High School"];

    // State to track active tab
    const [activeCategory, setActiveCategory] = useState("Engineering");

    // Get education data for the active category
    // This assumes your education items have a 'type' or similar property
    // If they don't, you would need to filter based on other criteria
    const filteredEducation = useMemo(() => {
        // This is a placeholder. Replace the filtering logic with the actual property in your data
        // Example: if your education items have a 'level' property that matches the category names
        return education.filter(item => {
            // If your education data doesn't have a category property,
            // you can infer it from other properties. For example:

            // For engineering - check if degree contains "Engineering", "Computer Science", etc.
            if (activeCategory === "Engineering") {
                return item.degree?.includes("Engineering") ||
                    item.degree?.includes("B.Tech") ||
                    item.degree?.includes("M.Tech") ||
                    item.degree?.includes("Computer Science");
            }

            // For Senior Secondary - check for "Senior Secondary", "12th", "Higher Secondary" etc.
            else if (activeCategory === "Senior Secondary") {
                return item.degree?.includes("Senior Secondary") ||
                    item.degree?.includes("12th") ||
                    item.degree?.includes("Higher Secondary") ||
                    item.school?.includes("Senior Secondary");
            }

            // For High School - check for "High School", "10th", "Secondary" etc.
            else if (activeCategory === "High School") {
                return item.degree?.includes("High School") ||
                    item.degree?.includes("10th") ||
                    item.degree?.includes("Secondary") ||
                    item.school?.includes("High School");
            }

            return false;
        });
    }, [activeCategory]);

    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </Desc>

                {/* Tab Navigation */}
                <TabsContainer>
                    <TabsWrapper>
                        {categories.map((category) => (
                            <TabButton
                                key={category}
                                active={activeCategory === category}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </TabButton>
                        ))}
                    </TabsWrapper>
                </TabsContainer>

                <TimelineSection>
                    {filteredEducation.length > 0 ? (
                        <Timeline>
                            {filteredEducation.map((edu, index) => (
                                <TimelineItem key={`edu-${index}`}>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <EducationCard education={edu} />
                                    </TimelineContent>
                                    <TimelineSeparator>
                                        {/* <TimelineDot variant="outlined" color="secondary" /> */}
                                        {index !== filteredEducation.length - 1 && (
                                            <TimelineConnector style={{ background: '#854CE6' }} />
                                        )}
                                    </TimelineSeparator>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    ) : (
                        <EmptyMessage>No education data available for this category.</EmptyMessage>
                    )}
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default EducationSection;