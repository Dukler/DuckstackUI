import { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from "@material-ui/core/styles";



function useResponsiveSize(props) {
    const theme = useTheme();
    const size = useWindowSize();
    const { offset, sidebar } = props;
    const matches = useMediaQuery(theme.breakpoints.up(sidebar.breakpoint));
    const [height, setHeight] = useState(Math.round(size.height - offset.height));
    const [width, setWidth] = useState(Math.round(size.width - (matches ? offset.width + sidebar.offset : offset.width)));

    useEffect(() => {
        //Resize window responsive
        setHeight(Math.round(size.height - offset.height));
        setWidth(Math.round(size.width - (matches ? offset.width + sidebar.offset : offset.width)));
    }, [matches, size, offset, sidebar.offset]);

    return { height, width }
}

export default useResponsiveSize