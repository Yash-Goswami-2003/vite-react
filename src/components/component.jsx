import { Field, Formik, Form } from "formik";
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
                        <Tab title="Contact Details">
                            <Formik
                                initialValues={{name:'',email:'',phone:''}}
                                onSubmit={(values, actions) => {
                                    console.log('Form submitted:', values);
                                    actions.setSubmitting(false);
                                }}
                            >
                                {({ handleSubmit }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <Box gap="medium" pad="small">
                                            <FormField name="name" label="Name">
                                                <Field name="name" component={TextInput} />
                                            </FormField>
                                            <FormField name="email" label="Email">
                                                <Field name="email" component={TextInput} />
                                            </FormField>
                                            <FormField name="phone" label="Phone">
                                                <Field name="phone" component={TextInput} />
                                            </FormField>
                                            <Button type="submit" primary label="Submit" />
                                        </Box>
                                    </Form>
                                )}
                            </Formik>
                                
                            </Tab>
                        <Tab title="about me">
                            <Box justify="start" gap={'medium'}>
                                <Heading level={2}>About me</Heading>
                                <Paragraph>
                                    I am a software developer with 1 years of experience in web development.
                                </Paragraph>
                            </Box>
                            </Tab>
                    </Tabs>
                </Box>
            </Grid>
        </> 
    ) ;
}