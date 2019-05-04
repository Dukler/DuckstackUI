export const getIcon = (props) =>{
    const { className} = props;
    switch (className){
        case 'EventAvailable':
            return () => import('@material-ui/icons/EventAvailable');
        case 'Contacts':
            return () => import('@material-ui/icons/Contacts');
        case 'DateRange':
            return () => import('@material-ui/icons/DateRange');
        case 'Notes':
            return () => import('@material-ui/icons/Notes');
        default:
            throw new Error ("no icon");
    }
}