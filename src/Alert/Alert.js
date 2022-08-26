import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import  { useSelector } from 'react-redux';

function Alert(props) {
    const { enqueueSnackbar } = useSnackbar();
    const alert = useSelector(state => state.alert);
    


    useEffect(() => {
        enqueueSnackbar(alert.text, { variant:'sucess'})
        enqueueSnackbar(alert.text, {
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            }
          })
    
    }, [alert.text])
    
    return (
        <div>
            
        </div>
    );
}

export default Alert;