import React from "react"
import { Link } from "gatsby"
import { FaBeer } from 'react-icons/fa';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Steps from "../components/steps"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="Title">PORTFOLIOS SUR-MESURE</h1>
    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ullam enim commodi labore adipisci laborum sunt itaque obcaecati placeat ducimus tenetur praesentium, eligendi expedita nisi, maiores pariatur ipsum eaque odio! Modi magnam, asperiores autem dolorum rem nulla, tempore dignissimos veniam reiciendis voluptas accusantium officiis ipsam repellendus voluptatibus quaerat. In vero architecto ipsam odio optio, maiores nam dolor omnis. Ipsum vero perspiciatis repudiandae velit dolor doloribus reprehenderit cumque vel, veritatis, recusandae. Maiores culpa et exercitationem ea eveniet impedit corrupti ad debitis, nulla sapiente illo, accusamus nam corporis neque ut numquam eum non illum eius mollitia repellat. Tempora ratione eaque eius magnam?</p>

    <div style={{ maxWidth: `400px`, marginBottom: `1.45rem`, marginLeft: '1rem', zIndex:5 }}>
      <Image />
    </div>
    <Steps/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
