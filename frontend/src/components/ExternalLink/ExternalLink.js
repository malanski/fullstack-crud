import { Box } from '@mui/material';

export const ExternalLink = ({ myHref, myTitle, children }) => {
    return (
      <Box
        as="a"
        href={myHref}
        title={myTitle}
        
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </Box>
    )
  }