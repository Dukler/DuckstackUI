import SimpleList from './../Wrappers/SimpleList';
import DynamicList from './../BeLazy/DynamicList';
import React from 'react';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function useRouter () {
    const LinkList = () => {
        return (
            <SimpleList>
                <DynamicList element="linkList" wrapper={{ id: "root" }} />
            </SimpleList>
        );
    };
    const ContentRoutes = ()=> {
        return (
            <Switch>
                <DynamicList element="contentRoutes" />
            </Switch>
        );
    };
    const Router = (
            BrowserRouter
    );

  return [Router, LinkList, ContentRoutes];
}

export default useRouter;
