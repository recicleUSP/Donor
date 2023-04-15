import P from 'prop-types';
import {useReducer} from 'react'

import { DonorContext } from "./context";
import { reducer } from "./reducer";
import { donor } from "./data";

export const DonorProvider = ({children}) => {
    const [donorState, donorDispach] = useReducer(reducer, donor);

    return (
        <DonorContext.Provider value={{donorState, donorDispach}}>
            {children}
        </DonorContext.Provider>);
};

DonorProvider.propTypes = {
    children: P.node.isRequired
};