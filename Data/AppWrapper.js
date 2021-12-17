import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

export const AppWrapper = ({ children })  => {

    let sharedState = {
        defalutValue: 20,
        chatPoints : [ 
            { value: 10, label: 'General' },
            { value: 20, label: "Let's discuss your idea" },
            { value: 20, label: 'Improve your product' },
            { value: 20, label: 'Data and business analysis'}
        ]
    };

    return (
        <AppContext.Provider value={sharedState}>
            {children}
        </AppContext.Provider>
    );
};

