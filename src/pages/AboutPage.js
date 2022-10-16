import React  from "react";
import Layout from "../component/Layout";
const AboutPage = () => {
    return(
        <main>
        <Layout pageTitle="About Page">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
      </main>
    )
}

export const Head = () => <title>About Page</title>
export default AboutPage;  