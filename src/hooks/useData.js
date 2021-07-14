
import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';

export const useData=(initialState=[])=>{
    const [portfolios, setportfolios] = useState(initialState)
    useEffect(() => {
        db.collection("projects")
        .onSnapshot((snapshot) => {
            setportfolios(snapshot.docs.map((portfolio)=>{
                return {
                    ...portfolio.data(),id:portfolio.id
                }
            }));
    
        });
    }, []);

    return {portfolios}
}