import { ReactElement } from "react"
import { NextPageWithLayout } from "@/pages/_app";

const Page: NextPageWithLayout = () => {
  return (
    <div>
        <div className="container-xs">
            <section className="d-flex flex-column gap-3">
                <h1>Login</h1>
                <p>Enter your email and password to login:</p>
            </section>
            <form className="d-flex flex-column">
                <input 
                    type="text"  
                    className="form-control"  
                    placeholder="E-mail"
                />
                <input 
                    type="password"  
                    className="form-control"  
                    placeholder="Password"
                />
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return page
}

export default Page
