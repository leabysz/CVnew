import * as React from "react"
import Block from "../components/block"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <Block title="404: Not Found">
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Block>
  </>
)

export default NotFoundPage
