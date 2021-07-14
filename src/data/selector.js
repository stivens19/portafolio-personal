import { portfolios } from "./portfolios";

export const selectPortfolioByType=(type)=>{
    if(type==='todos'){
        return portfolios;
    }else{
        const repos=portfolios.filter((portfolio)=>portfolio.type === type);
        return repos;
    }
    

    

}