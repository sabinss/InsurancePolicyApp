import React from 'react';

export let navigationRef: any = React.createRef();

export const setNavigator = (nav: any) => {
  navigationRef = nav;
};

export const navigate = (name: string, params?: any) => {
  navigationRef.current?.navigate(name, params);
};

export const goBack = () => navigationRef.current?.goBack();

export const getCurrentRouteName = () =>
  navigationRef.current?.getCurrentRoute();
