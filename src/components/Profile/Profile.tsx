import React from 'react';
import { useDispatch } from 'react-redux';
import withLoading from '../../hoc/withLoading';
import { setProfile } from '../../redux/slices/containers/profileSlice';

const onProfileLoad = (dispatch: ReturnType<typeof useDispatch>) => {
  dispatch(setProfile('some profile value'));
};

const Profile: React.FC = () => {
  return <div>Profile</div>;
};

const WrappedProfile = withLoading(Profile, 'profile', onProfileLoad);

export default WrappedProfile;
