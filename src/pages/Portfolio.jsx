import React  from 'react'
import Portfolioinner from '../components/Portfolio/Portfolioinner'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';



const Portfolio = () => {

    return (
        <>
          <div id="breadcrumb">
                <Breadcrumb />
            </div>

            <CategoryFilter />


            {/* <Portfolioinner /> */}
        </>
    )
}

export default Portfolio