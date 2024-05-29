import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";

const globalStyles = css`
    html {
        scroll-behavior: smooth;
    }

    @media screen and (prefers-reduced-motion: reduce) {
        html {
            scroll-behavior: smooth;
        }
    }
`;

const Layout = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    footer {
        margin-top: auto;
    }
`;

interface StaticProps {
    children: React.ReactNode;
}

const Static = ({ children }: StaticProps) => {
    return (
        <Layout>
            <Global styles={globalStyles} />
            <main>{children}</main>
        </Layout>
    );
};

export default Static;
