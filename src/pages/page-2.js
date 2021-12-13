import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Starter Plan</p>
    <p>
      <Link to="https://myathsu-test.chargebee.com/hosted_pages/checkout?subscription_items[item_price_id][0]=Starter-USD-Yearly" target="_blank">Advanced</Link>
    </p>
    <p>Customer Portal</p>
    <p>
      <Link to="https://myathsu-test.chargebeeportal.com" target="_blank">Manage Your Subscription</Link>
    </p>
    <p>
      <Link to="/">Go back to the homepage</Link>
    </p>
  </Layout>
)

export default SecondPage
