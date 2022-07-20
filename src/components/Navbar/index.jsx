import './style.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';

export default function MyHeader() {
    const [shadowClass, setShadowClass] = useState('navbar head ')
    window.addEventListener('scroll', function() {
        if(this.scrollY >= 10) {
            setShadowClass('navbar head shadowasd')
        } else {
            setShadowClass('navbar head ')
        }
      })
    return(
        <>        
            <div className='navbar-background'>
                <div className={shadowClass}>
                    <div className="container">
                        <ul className='navbar-ul'>
                            <li className='menu-items'><NavLink to='/'>Home</NavLink></li>
                            <li className='menu-items'><NavLink to='/about'>About</NavLink></li>
                            <li className='menu-items'><NavLink to='/my-works'>Works</NavLink></li>
                            <li className='menu-items'><NavLink to='/my-works/memory-game'>Writing</NavLink></li>
                        </ul>
                        <ul className='navbar-ul-icon'>
                            <li className='menu-iems-icon'><NavLink to='/'><HomeOutlinedIcon /></NavLink></li>
                            <li className='menu-iems-icon'><NavLink to='/about'><InfoOutlinedIcon /></NavLink></li>
                            <li className='menu-iems-icon'><NavLink to='/my-works'><WorkspacesOutlinedIcon /></NavLink></li>
                            <li className='menu-iems-icon'><NavLink to='/my-works/memory-game'><CreateOutlinedIcon /></NavLink></li>
                        </ul>
                        <ul className='rig'>
                            <li><NavLink to='/contact' >Contact</NavLink></li>
                        </ul>
                        <ul className='rig-icon'>
                            <li><NavLink to='/contact' ><AddIcCallOutlinedIcon /></NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )    
}
