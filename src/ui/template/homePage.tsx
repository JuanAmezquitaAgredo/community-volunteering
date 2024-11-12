'use client'
import styled from "styled-components"
import HeaderHomePage from "../organisms/homePage/header";
import BodyHomePage from "../organisms/homePage/body";

const PageContainer = styled.div`
  width: 100;
  height: 100vh;
  background-image: linear-gradient(to bottom, #e6f0ff, #ffffff);
`;
export default function HomePage() {

    return (
        <PageContainer>
            <HeaderHomePage/>
            <BodyHomePage/>
        </PageContainer>
    )
}