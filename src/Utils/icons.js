export function getIcon (props) {
    const { className} = props;
    switch (className){
        case 'EventAvailable':
            return () => import(/* webpackMode: "eager",  webpackChunkName: 'MUI-Icons' */'@material-ui/icons/EventAvailable');
        case 'Contacts':
            return () => import(/* webpackMode: "eager",  webpackChunkName: 'MUI-Icons' */'@material-ui/icons/Contacts');
        case 'DateRange':
            return () => import(/* webpackMode: "eager",  webpackChunkName: 'MUI-Icons' */'@material-ui/icons/DateRange');
        case 'Notes':
            return () => import(/* webpackMode: "eager",  webpackChunkName: 'MUI-Icons' */'@material-ui/icons/Notes');
        default:
            throw new Error ("no icon");
    }
}