import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { enableLoading, disableLoading } from '../redux/slices/loadingSlice';
import { RootState } from '../redux/store';

type OnLoadFunction = (dispatch: ReturnType<typeof useDispatch>) => void;

const withLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  key: keyof RootState['containers'],
  onLoad?: OnLoadFunction
): React.FC<P> => {
  return (props: P) => {
    const dispatch = useDispatch();
    const containerState = useSelector(
      (state: RootState) => state.containers[key]
    );

    React.useEffect(() => {
      // Call onLoad function if the key of the container state is null
      if (onLoad && containerState === null) {
        onLoad(dispatch);
      }

      if (containerState !== null) {
        dispatch(disableLoading());
      }

      return () => {
        dispatch(enableLoading());
      };
    }, [dispatch, containerState]);

    return <WrappedComponent {...props} />;
  };
};

export default withLoading;
