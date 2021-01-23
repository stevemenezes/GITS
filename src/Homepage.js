import React, { Component } from 'react'
import { Button, Image, Segment, Grid, Divider, List, Form } from 'semantic-ui-react'
import pic from './images/carefiiler_mobile.png';

class Homepage extends Component {
    handleChange = (e, { value }) => this.setState({ value })

    state = {}

    render() {
        const { value } = this.state
        return (
            <div>
                <div className="intro">
                    <p>Empowering top <br />
                    healthcare workers</p>

                    <p style={{ fontSize: "50%" }}>Our platform is uniquely designed for <br /><br />
                        independent healthcare professionals.
                    </p>

                    <p><Button
                        circular
                        color=""
                        size="medium">
                        Signup
                    </Button>
                    </p>
                </div>

                <div >
                    <Image
                        className="mobilePhone"
                        src={pic}
                        size='medium'
                        href='http://google.com'
                        target='_blank'
                    />
                </div>
                <br /><br />
                <Segment secondary textAlign="justified">
                    Facilities Served
                </Segment>


                <div className="whycarefiler">
                    <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "185%", paddingBottom: "2%" }}> Why work with Carefiler?</p>
                    <Grid divided='vertically'>
                        <Grid.Row columns={3}>
                            <Grid.Column>
                                <p><b>Set your own hours</b></p>
                                <p>You decide when you work</p>
                            </Grid.Column>
                            <Grid.Column>
                                <p><b>Get paid fast</b></p>
                                <p>Instant cash outs when you're ready</p>
                            </Grid.Column>
                            <Grid.Column>
                                <p><b>We support you</b></p>
                                <p>Resources to help you be successful</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>

                <Divider />

                <div>
                    <div className="means">This means</div>
                    <List style={{ paddingTop: "2.5%", fontFamily: 'Open Sans ,sans-serif' }} >
                        <List.Item>No job hunting</List.Item><br />
                        <List.Item>No pressure hires</List.Item><br />
                        <List.Item>No forced fits</List.Item><br />
                        <List.Item>No non-competes</List.Item><br />
                    </List>

                </div>
                <Divider />

                <div className="signup" >
                    <div className="child" style={{ paddingLeft: "5%" }}>
                        <p style={{ fontSize: "250%" }}>
                            How to get started
                        </p>

                        <p><span class="signup-subhead">Step 1: Sign up request </span><br />
                            <p class="step">Sign up using the form to the right or through our mobile app</p>
                        </p>

                        <p><span class="signup-subhead">Step 2: Upload Your credentials </span><br />
                            <p class="step">Carefiller’s secure online platform safely houses relevant hiring <br />
                    information, including ID, certifications, background checks, proof<br />
                    of licenses, and current insurances.</p>
                        </p>

                        <p><span class="signup-subhead">Step 3: Complete safety screenings </span><br />
                            <p class="step">Every worker must complete a background check, drug screening<br />
                    and TB test. Safety screenings can take a few weeks, making it<br />
                    important to complete these quickly if you are eager start.</p>
                        </p>

                        <p><span class="signup-subhead">Step 4: Start searching</span><br />
                            <p class="step">Once your file is complete, you’re officially ready to launch your<br />
                    Carefiller search! Learn our intuitive system, find relevant jobs,<br />
                    and submit as you see fit.</p>
                        </p>

                    </div>

                    <div className="child" style={{ width: "50%"  }} >
                        <span style={{ fontFamily: "sans-serif", fontSize: "140%",width: "50%" }}>Become a healthcare worker</span> <br /><br />
                        <Form className="form" >
                            <Form.Group>
                                <Form.Radio
                                    label="HealthCare Worker"
                                    value='hcw'
                                    checked={value === 'hcw'}
                                    onChange={this.handleChange}
                                />
                                <Form.Radio
                                    label="HealthCare Facility"
                                    value='hcf'
                                    checked={value === 'hcf'}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input placeholder='Email' width={8} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input placeholder='First Name' width={4} />
                                <Form.Input placeholder='Last Name' width={4} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input placeholder='Phone' width={8} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input placeholder='City' width={8} />
                            </Form.Group>
                            <div style={{ fontFamily: "sans-serif", fontSize: "80%", width:"50%"}}>
                                <p>
                                    By proceeding, I agree to Carefiller’s Terms of Use and
                            acknowledge that I have read the Privacy Notice.</p>
                                <p>
                                    By proceeding, I am also consenting to receive calls or SMS
                                    messages, including by automatic dialer, from Carefiller and its
                            affiliates to the number I provide. </p>
                                <p>
                                    By proceeding, I am also agreeing to receive marketing
                                    communications (including by automatic dialer) by SMS from
                                    Carefiller at the phone number provided. I understand that
                                    consent to receiving these marketing messages is not required
                                    to use Carefiller’s services. I may always opt out by texting
                                    STOP in reply to a message from Carefiller.
                            </p>
                            </div>


                        </Form>
                    </div>
                </div>
            </div >

        )
    }
}

export default Homepage;