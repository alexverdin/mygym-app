import React from 'react'
import Menu from '../Menu/Menu';
import { SideBarHeader } from '../SideBarheader/SideBarHeader'


interface Props{
    children: any;
}

export const AdminLayout = ({children}:Props) => {
  return (
    <SideBarHeader links={<Menu/>} iconNav={<div>X</div>} infoNav={"Holi"} legendNav={'Gym Admin'}>
        {children}
    </SideBarHeader>
  )
}
