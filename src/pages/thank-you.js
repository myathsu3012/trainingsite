import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ThankYouPage = () => (
  <Layout>
    <Seo title="Thank you" />
    <h1>Thank you for your subscription</h1>
    <p>
      <Link to="/">Go back to the homepage</Link>
    </p>
  </Layout>
)

export default ThankYouPage
