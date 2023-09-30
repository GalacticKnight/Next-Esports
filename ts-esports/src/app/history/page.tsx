import React from 'react';
import Navbar from '../../components/shared/Navbar'
import Introduction from '../../components/history/Introduction'
import Footer from '../../components/shared/Footer'

const Page = () => {
    return (
        <>
            <div style={{backgroundColor:'black'}}>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Navbar/>
                <Introduction/>
                <Footer/>
            </div>
            {/* <Contact/>
            <Footer/> */}
        </>
    );
}

export default Page;