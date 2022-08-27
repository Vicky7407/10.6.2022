import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Alert(props) {
  const { enqueueSnackbar } = useSnackbar();
  const alert = useSelector(state => state.alert);

  useEffect(() => {
      if(alert.text!==''){
        setTimeout(() => {
          enqueueSnackbar(alert.text, {
            variant: alert.color,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            }
          })
        }, 2000);
      }
  }, [alert.text])
  
  return (
    <div>
      
    </div>
  );
}

export default Alert;