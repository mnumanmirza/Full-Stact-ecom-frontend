import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SummaryApi from '../common/com'
import VerticalCard from '../Components/VerticalCard'

const SearchProduct = () => {
    const query = useLocation()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchProduct = async() => {
        setLoading(true)
        try {
            const response = await fetch(SummaryApi.searchProduct.url + query.search)
            const dataResponse = await response.json()
            
            // Safe data setting with default array
            setData(dataResponse?.data || [])
            
        } catch (error) {
            console.error("Fetch error:", error)
            setData([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [query])

    return (
        <div className='container mx-auto p-4'>
            {loading && (
                <p className='text-lg text-center'>Loading ...</p>
            )}

            <p className='text-lg font-semibold my-3'>
                Search Results : {data?.length || 0}
            </p>

            {data?.length === 0 && !loading && (
                <p className='bg-white text-lg text-center p-4'>No Data Found....</p>
            )}

            {data?.length > 0 && !loading && (
                <VerticalCard loading={loading} data={data}/>
            )}
        </div>
    )
}

export default SearchProduct