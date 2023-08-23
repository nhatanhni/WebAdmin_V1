import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
interface Props {
       
}

const Home = (props: Props) => {
    const [items, setItems] = useState<any>();
    useEffect(() => {
 
    }, [])  
    const DashboardRender = () => {
        let html = [];
        if(items) {
            html.push(<></>)
        }
        return html;
    }
    return(
        <section className="section dashboard">
            {
                DashboardRender()
            }
        </section>
    )
}
const mapState = ({ ...state }) => ({
    
});
const mapDispatchToProps = {
    
};

export default connect(mapState, mapDispatchToProps)(Home);