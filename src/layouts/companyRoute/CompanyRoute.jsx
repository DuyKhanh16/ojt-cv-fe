import React from 'react'
import HeaderCompany from '../../components/headerCompany/HeaderCompany'
import FormSearch from '../../components/formSearch/FormSearch'
import { Outlet } from 'react-router'
import Footer from '../../components/footer/Footer'

export default function CompanyRoute() {
  return (
    <>
    <HeaderCompany></HeaderCompany>
    <FormSearch></FormSearch>
    <Outlet></Outlet>
    <Footer></Footer>
    
    </>
  )
}
