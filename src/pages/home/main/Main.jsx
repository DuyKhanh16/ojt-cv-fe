import React from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import JobList from '../homeUser/jobList/JobList'
import FormSearch from '../../../components/formSearch/FormSearch'

export default function Main() {
  return (
    <>
     <Header/>
     <FormSearch></FormSearch>
     <JobList></JobList>
    <Footer></Footer>

    </>
  )
}
