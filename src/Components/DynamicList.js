import React from 'react';
import PropTypes from "prop-types";
import useDynamicList from '../Hooks/useDynamicList';


const DynamicList = React.memo(function DynamicList (props) {
    
    const [list] = useDynamicList(props);
    
    return (
        <>
            {list.map(comp => {
                const { AsyncImport, actions, ...cleanComp } = comp;
                return (
                    <AsyncImport
                        key={comp.id}
                        {...cleanComp}
                        actions={actions}
                    />
                    )
                }
            )}
        </>
    );
});

DynamicList.propTypes = {
    className: PropTypes.string.isRequired
};

export default DynamicList