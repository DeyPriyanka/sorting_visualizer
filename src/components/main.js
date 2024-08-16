
import {React, Component} from 'react';
import Header from './header';
import SortInterface from './sortingInterface';
import Footer from './footer';

class Main extends Component{

    render(){

        return (
            <div>
                <Header/>
                <SortInterface/>
                <Footer/>
                
            </div>
        )
    }
}

export default Main;