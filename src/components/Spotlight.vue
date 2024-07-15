<template>
    <v-container>
            <br>
            <h1 class="text-h4 font-weight-bold">BPG Spotlight</h1>
            <br>
            <v-img cover src="@/assets/Spotlight_Header.png"></v-img>
            <br>
            <h1 class="text-h5 font-weight-bold">Background</h1>
            <h1 class="text-h5 font-weight-light"> The NCSC wants to make the UKs networks the safest in the world. There are over 150 Internet Service Providors (ISPs) in the UK and vulnerabilities in the technology that enables the internet are being exploited by foreign actors. UK ISPs are responsible for monitoring and securing their BGP Messages however they do not have the tools to do it effectivley. The NCSC asked BT, one of the largest ISPs, in the UK to create a free tool which would help all UK ISPs to monitor their BGP messages. </h1>
            <br>
            <br>
            <v-img src="@/assets/Spotlight_Example1.png"></v-img>
            <br>
            <br>
            <h1 class="text-h5 font-weight-bold">Implimentation</h1>
            <h1 class="text-h5 font-weight-light">I joined the project before any code had been written, so I was able to choose the tech-stack and develop as the product did. Over the space of a year I'd created a web-based analytics tool using <a class="text-h5 font-weight-bold"> Vue.js</a> which was integrated with an <a class="text-h5 font-weight-bold">Amazon Web Service</a> hosted server via a <a class="text-h5 font-weight-bold">GraphQL</a> API. The UI visualises data from a privatly hosted <a class="text-h5 font-weight-bold">MySQL</a> database, which is populated by a <a class="text-h5 font-weight-bold">python</a> analytics service collecting data from <a class="text-h5 font-weight-bold">RouteViews.</a></h1>
            <br>
            <br>
            <v-timeline>
                <v-timeline-item>
                <template v-slot:opposite>
                    <div class="d-flex justify-center ga-2">
                        <v-chip>
                        RouteViews
                        </v-chip>
                        <v-chip>
                            Python
                        </v-chip>
                        <v-chip>
                            AWS Lambda
                        </v-chip>
                        <v-chip>
                            AWS S3
                        </v-chip>
                    </div>
                    
                </template>
                <div>
                    <div class="text-h6">Data Ingestion: 25 Million BGP Messages collected per hour</div>
                    <p>
                    BGP Messages are collected via Routviews - an open source BGP message collection service.
                    </p>
                </div>
                </v-timeline-item>

                <v-timeline-item>
                <template v-slot:opposite>
                    <div class="d-flex justify-center ga-2">
                        <v-chip>
                            MySQL
                        </v-chip>
                        <v-chip>
                            Python
                        </v-chip>
                        <v-chip>
                            AWS Lambda
                        </v-chip>
                        <v-chip>
                            AWS EC2
                        </v-chip>
                    </div>
                </template>
                <div>
                    <div class="text-h6"> Triage: 80% of data is removed </div>
                    <p>
                    Data is cleansed, removing duplicates and formatting it ready for analysis.
                    </p>
                </div>
                </v-timeline-item>

                <v-timeline-item>
                <template v-slot:opposite>
                    <div class="d-flex justify-center ga-2">
                        <v-chip>
                            MySQL
                        </v-chip>
                        <v-chip>
                            Python
                        </v-chip>
                        <v-chip>
                            AWS Lambda
                        </v-chip>
                        <v-chip>
                            AWS EC2
                        </v-chip>
                    </div>
                </template>
                <div>
                    <div class="text-h6">Analysis: Messages are scored</div>
                    <p>
                    Messages are grouped and analysed based on 13 criteria, these are then given a 'Hijack' and 'impact' score.
                    </p>
                </div>
                </v-timeline-item>
                <v-timeline-item>
                <template v-slot:opposite>
                    <div class="d-flex justify-center ga-2">
                        <v-chip>
                            MySQL
                        </v-chip>
                        <v-chip>
                            AWS SES
                        </v-chip>
                        <v-chip>
                            AWS EC2
                        </v-chip>
                    </div>
                </template>
                <div>
                    <div class="text-h6">Notifications: Impacted owners are notified</div>
                    <p>
                    ISPs which have flagged their intent to be notifified are emailed when a Autonoums System within their network reaches a user-defined threshold.
                    </p>
                </div>
                </v-timeline-item>
                <v-timeline-item>
                <template v-slot:opposite>
                    <v-chip>
                            Vue.js
                        </v-chip>
                        <v-chip>
                            Node.js
                        </v-chip>
                        <v-chip>
                            GraphQL
                        </v-chip>
                        <v-chip>
                            AWS AppSync
                        </v-chip>
                        <v-chip>
                            MySQL
                        </v-chip>
                </template>
                <div>
                    <div class="text-h6">Data Visualisation: Web-based Dashboard</div>
                    <p>
                    A variety of visualisation techniques are used to make analysis of large datasets easier to manage.
                    </p>
                </div>
                </v-timeline-item>
            </v-timeline>
            <br>
            <h1 class="text-h5 font-weight-light"> Initially I presented the POC to the Annual <a class="font-weight-bold">UK ISP Security Council</a> on behalf of BT and the NCSC, to gather feedback and gauge interest from across the country. Feedback was positive, ISPs were keen to include their data streams and had ideas for analytics tools. I implimented a number of tools including scores for severity and risk and subsequntly left the project to join another. Having spoken to a number of people in BT since i'm to understand the product is still in use and has been able to identify and prevent a number of harmful hijacks. </h1>
            </v-container>

</template>