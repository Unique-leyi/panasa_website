import { Fragment } from "react"
import Footer from "../Footer/Footer"


function Layout(props) {
    return <Fragment>
                    <div>
                        {props.children}
                    </div>
                <Footer/>
           </Fragment>
}

export default Layout