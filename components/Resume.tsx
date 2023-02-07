'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

type Props = {};

function Resume({}: Props) {
  return (
    <div className="h-screen custom-img11 relative overflow-hidden z-0 max-w-full">
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: [1, 0.3, 0.6] }}
        transition={{ duration: 1.5 }}
        className="absolute left-0 top-0 right-0 bottom-0 bg-cover bg-black z-[0] flex justify-evenly items-center"
      />
      <div className="relative flex flex-col text-left md:flex-row max-w-full px-10 justify-center items-center mx-auto">
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-300 text-5xl">
          My Resume
        </h3>
        <div className="h-screen flex flex-col text-left md:flex-row max-w-full px-10 justify-center items-center mx-auto text-gray-200">
          <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-proximity">
            <ResumeCard />
            <ResumeCard />
            <ResumeCard />
            <ResumeCard />
          </div>
          {/* <div>
            <h3>July 2022 - October 2022</h3>
            <h1>
              Atria Wealth Solutions, Vice President of Corporate Communications
            </h1>
            <p>
              Supported the rollout of communications strategies to deliver
              Atria’s content to relevant targets through a multi-channel
              approach, including earned media, social media, owned digital
              properties, and internal communications. Partnered with corporate,
              commercial, and functional leaders across the organization to
              provide perspective, and guidance, and led the development of
              proactive external and integrated communications strategies and
              programs, including innovative storytelling and engagement ideas
              to communicate and align key messages.
            </p>
          </div> */}
        </div>
      </div>
      <div>
        {/* BG IMAGE with text in the middle*/}

        {/* <div>
          <h3>August 2021 - May 2022</h3>
          <h1>Cetera Financial Group, Director of Internal Communications</h1>
          <p>
            Owner and architect of Cetera Financial Group’s internal
            communications. Assessed the current state of the internal
            communications program to identify gaps and design solutions.
            Influenced change across the organization by creating opportunities
            for genuine dialogue between leadership and employees. Implemented
            key processes to ensure maximum efficiency and authenticity of
            leadership communications. Co-chaired Cetera’s culture revolution
            efforts to “reset” Cetera culture, using the massive change from the
            pandemic to kick-start the opportunity for employees and leaders to
            rethink how we worked at Cetera and how we could create more
            human-centric experiences for employees and advisors.
          </p>
          <h2>Select Achievements:</h2>
          <ul>
            <li>
              Created the Executive Communications Advisory Board to bridge the
              gap between employees and executives.
            </li>
            <li>
              In the first two months of the role, conducted a massive internal
              communications audit which included a survey of employees, several
              focus groups and interviews with more than 60 leaders and internal
              influencers.
            </li>
            <li>
              Launched Yammer, a companywide digital community to enable
              cross-functional collaboration and socialization for all
              employees. The platform has more than a 90 percent adoption from
              employees.
            </li>
          </ul>
        </div>
        <div>
          <h3>November 2018 - July 2021</h3>
          <h1>Illumina, Customer Experience Communications Specialist</h1>
          <p>
            Manager of the company’s customer communications processes and
            campaigns as part of the Marketing organization. Led and executed
            communications strategy to resolve critical customer issues.
            Designed key customer communications processes to notify customers
            about product changes, quality issues, and obsolescence. Identified
            and resolved gaps in business procedures to enable customer success.
            Global trainer of customer-facing teams for increased empathy and
            understanding of the customer journey. Fostered relationships with
            customers through online engagement, such as e-mail marketing,
            social media, and promotional materials. Led cross-functional
            campaign to transform company culture, ensuring a customer-first
            focus within every department. Drafted executive messaging for
            internal customer experience campaigns. Supported vendor management
            for various communications and customer experience tools and
            services.
          </p>
          <h2>Select Achievements:</h2>
          <ul>
            <li>
              Created tailored empathy communications curriculum and trained
              Illumina’s customer-facing employees to empower compassionate,
              effective customer communications.
            </li>
            <li>
              Reformed the company’s customer notification process to create
              consistent, timely, customer-focused notifications.
            </li>
            <li>
              Provided strategic direction for crisis communications and
              customer communications, as well as messaging and execution for
              various company-wide issues (e.g., company acquisitions, COVID-19
              response, digital transformation efforts).
            </li>
          </ul>
        </div>
        <div>
          <h3>August 2017 - October 2018</h3>
          <h1>First Republic Bank, Internal Communications Manager</h1>
          <p>
            Owner and producer of the bank’s internal communications as part the
            Marketing organization. Led the bank’s internal communications
            strategy and vision, and developed the corporate communications
            program. Evolved the internal newsroom into an employee-centered
            channel with a focus on storytelling, client service, and company
            culture. Created a new all-company channel in the form of a
            bi-weekly employee newsletter. Directed crisis communications
            strategy through emergencies such as natural disasters and
            reputational risks.
          </p>
          <h2>Select Achievements:</h2>
          <ul>
            <li>
              Created and produced a bi-weekly all-company newsletter which had
              an industry-leading open rate of 80 percent and a click-through
              rate of 14 percent.
            </li>
            <li>
              Evolved the internal newsroom through authentic, employee-focused
              content, resulting in an average of more than 90 percent
              readership companywide month over month.
            </li>
            <li>
              Co-founded Financial Literacy Week, coordinating more than 200
              hours of employee volunteer hours.
            </li>
          </ul>
        </div>
        <div>
          <h3>April 2014 - August 2017</h3>
          <h1>Pacific Gas & Electric, Expert Communications Representative</h1>
          <h2>
            Expert Communications Representative (Community Relations), January
            2016 to August 2017
          </h2>
          <p>
            Owner and implementer of a broad spectrum of strategic initiatives
            to drive positive awareness of the company’s philanthropic efforts
            internally and externally. Led communications and corporate strategy
            and brand development for employee-giving and volunteer programs.
            Produced human-centric stories and videos on the company’s community
            outreach efforts. Developed strong collaboration across multiple
            cross-functional teams to maximize positive media. Performed market
            research, developed documentation, and delivered PowerPoint and
            Keynote presentations to prepare executives for multiple speaking
            engagements.
          </p>
          <h2>Select Achievements:</h2>
          <ul>
            <li>
              Developed communications strategy for companywide employee-giving
              campaign which helped break the company record gift amount of $8
              million.
            </li>
            <li>
              Created thought leadership presentations, articles, and materials
              for executives as part of PG&E’s comprehensive Thought Leadership
              Program
            </li>
            <li>
              Helped achieve the highest percentage of positive news coverage of
              the company in five years. .
            </li>
          </ul>
          <h2>
            Senior Communications Representative (Gas Organization), April 2014
            to January 2016
          </h2>
          <p>
            Built strong relationships with media and cross-functional teams to
            help tell PG&E’s key stories internally and externally. Served as
            the team’s photographer and videographer in creating human-centric
            productions to intrigue audiences and drive record viewership.
            Created unique media campaigns to highlight the company’s use of
            technology and innovation to drive PG&E’s gas safety narrative.
          </p>
        </div>
        <div>
          <h3>September 2009 - April 2014</h3>
          <h1>Duke Energy, Communications Consultant</h1>
          <h2>
            Communications Consultant (Internal Communications), January 2012 to
            April 2014
          </h2>
          <p>
            Consultant, planner, and producer of internal communications and
            engagement initiatives that informed employees of company-wide
            programs, changes, and strategic priorities. Drove employee
            engagement, awareness, and buy-in by researching and writing
            multi-generational news pieces/narratives and feature stories, while
            facilitating live intranet chats, lunch-and-learns, and CEO-led open
            forums.
          </p>
          <h2>
            Communications Representative (McGuire Nuclear Station), September
            2009 to January 2012
          </h2>
          <p>
            Creator and implementer of internal and external communications
            strategies and content that supported the business, safety, and
            human-performance goals of a high-profile nuclear operations
            facility. Owned projects that influenced the community and school
            systems, and managed crisis communications, media relations, and
            internal engagement efforts.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Resume;
