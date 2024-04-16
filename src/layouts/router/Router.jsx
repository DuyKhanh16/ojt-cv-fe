import React from 'react'
import Header from '../../components/header/Header'
import FormSearch from '../../components/formSearch/FormSearch'
import Footer from '../../components/footer/Footer'
import { Outlet } from 'react-router'

export default function Router() {
  return (
    <>
    <Header></Header>
    <FormSearch></FormSearch>
    <Outlet/>
    <Footer></Footer>
    </>
  )
}
