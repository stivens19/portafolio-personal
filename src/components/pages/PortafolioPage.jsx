import React, { useEffect, useState } from 'react';
import { useData } from '../../hooks/useData';
import CardProject from '../ui/CardProject';
import { selectPortfolioByType } from './../../data/selector';

const PortafolioPage = () => {
    const [type, setType] = useState('todos')
    const {portfolios}=useData([]);
    const [portfoliosfilter, setPortfoliosfilter] = useState(portfolios);
    useEffect(() => {
        setPortfoliosfilter(portfolios)
    }, [portfolios]);
    useEffect(() => {
    
        if(type==='todos'){
            setPortfoliosfilter(portfolios)
        }else{
            const repos=portfolios.filter((portfolio)=>portfolio.type === type);
            setPortfoliosfilter(repos)
        }
    }, [type]);
    return (
        <section className="portfoliosection p-main-service">
            <div className="categories">
                <div className="category" onClick={()=>setType('todos')}>
                    <span>Todos</span>
                </div>
                <div className="category" onClick={()=>setType('trabajo')}>
                    <span>Trabajos</span>
                </div>
                <div className="category" onClick={()=>setType('personal')}>
                    <span>Personal</span>
                </div>
            </div>
            <div className="projects">
                {
                    portfoliosfilter.map(portfolio=>(
                        <CardProject key={portfolio.id} {...portfolio} />
                    ))
                }
            </div>
        </section>
    );
}

export default PortafolioPage;
