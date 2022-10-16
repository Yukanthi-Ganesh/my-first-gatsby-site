import React from "react"
import Layout from "../component/Layout"

const IndexPage = () => {
  return (
  <main>
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
  </main>
  )
}

export const Head  = () => <title>Home Page</title>

export default IndexPage