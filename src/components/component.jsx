import { Grid, Box, Nav, Anchor, Sidebar, Button, Heading, Calendar, Chart, Paragraph, Tabs, Tab, FormField, TextInput } from "grommet";
import * as Icons from "grommet-icons";

export function Ui()
{
    return (
        <>
        <Grid
            fill
            rows={['xxsmall','auto']}
            columns={['xsmall','auto']}
            gap={'xxsmall'}
            areas={[
                {name:'header',start:[0,0],end:[1,0]},
                {name:'nav',start:[0,1],end:[0,1]},
                {name:'main',start:[1,1],end:[1,1]}
            ]}
            >
                <Box fill gridArea="header" background={'brand'}>
                    <Grid fill
                        columns={['auto','auto']}
                        >
                        <Nav direction="row" justify="start" background={'brand'} pad={'xxxsmall'}>
                            <Anchor icon={<Icons.HomeRounded/>} hoverIndicator/>
                            <Anchor icon={<Icons.Analytics/>} hoverIndicator/>
                            <Anchor icon={<Icons.Contact/>} hoverIndicator />
                            <Anchor icon={<Icons.Achievement/>} hoverIndicator />
                        </Nav>
                        <Nav direction="row" justify="end" background={'brand'} pad={'xxxsmall'}>
                            <Anchor icon={<Icons.Logout/>} hoverIndicator />
                        </Nav>
                    </Grid>
                </Box>
                <Box fill gridArea="nav" background={'light-2'}>
                    <Sidebar align="center">
                        <Nav gap={'small'}>
                            <Button icon={<Icons.Home/>} hoverIndicator/>
                            <Button icon={<Icons.Task/>} hoverIndicator/>
                            <Button icon={<Icons.Alarm/>} hoverIndicator/>
                        </Nav>
                    </Sidebar>
                </Box>
                <Box fill gridArea="main" background={'light-1'} pad={'medium'} gap={'medium'}>
                    <Tabs justify="start" gap={'medium'}>
                        <Tab title="Tab 1">
                            <Box justify="start" gap={'medium'}>
                                <Heading level={2}>Personal Details</Heading>
                                <FormField label="Name" name="name" required>
                                    <TextInput name="name" placeholder="John..." />
                                </FormField>
                                <FormField label="Mobile" name="mobile" required>
                                    <TextInput name="name" placeholder="+91 XXXXXXXX" />
                                </FormField>
                                <Button label="Submit" />
                            </Box>
                            </Tab>
                        <Tab title="Tab 2">
                            yash
                            </Tab>
                    </Tabs>
                </Box>
            </Grid>
        </> 
    ) ;
}