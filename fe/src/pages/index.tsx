import { ReactElement } from "react"
import { NextPageWithLayout } from "@/pages/_app";

const Page: NextPageWithLayout = () => {
  return (
    <h1>login</h1>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return page
}

export default Page
