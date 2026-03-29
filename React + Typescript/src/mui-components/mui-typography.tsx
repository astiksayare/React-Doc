import { Stack, Typography } from "@mui/material";



const MuiTypography = () => {

    return (

        <>
        <Stack direction={"column"} spacing={2}>
        <Typography variant="h1">H1 Heading</Typography>
        <Typography variant="h2">H2 Heading</Typography>
        <Typography variant="h3">H3 Heading</Typography>
        <Typography variant="h4">H4 Heading</Typography>
        <Typography variant="h5">H5 Heading</Typography>
        <Typography variant="h6">H6 Heading</Typography>
        </Stack>

        <Stack direction={"column"} spacing={2}>
            <Typography>Paragraph</Typography>
            <Typography variant="body1" color="error">Paragraph</Typography>
            <Typography variant="body2" color="info">Paragraph</Typography>
            <Typography variant="subtitle1" color="success">Subtitle 1</Typography>
            <Typography variant="subtitle2" color="warning">Subtitle 2</Typography>
            <Typography variant="overline" color="primary">Overline</Typography>
            <Typography variant="caption" color="primary">Caption</Typography>
        </Stack>
        </>
    )
}

export default MuiTypography;