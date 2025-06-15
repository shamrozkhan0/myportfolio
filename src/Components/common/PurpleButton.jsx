import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PurpleButton = ({Event, ResponsiveWidth, Title}) => {
    return (
        <Button
            onClick={Event && Event}
            sx={{
                backgroundImage: theme => theme.palette.background.mainGradient,
                py: 1,
                px: 2,
                color: 'inherit',
                borderRadius: '30px',
                fontSize: '15px',
                fontWeight: 600,
                width: ResponsiveWidth ? {xs: '100%' , md: 'fit-content'} : 'fit-content',
                '& .icon-rotate': {
                    fontSize: '18px',
                    transition: 'all 0.3s ease',
                    transform: 'rotate(30deg)',
                },
                '&:hover .icon-rotate': {
                    transform: 'rotate(30deg) translate(5px, 0px)',
                }
            }}
            endIcon={<ArrowForwardIcon className="icon-rotate" />}
        >
            {Title}
        </Button>
    )
}

export default PurpleButton;