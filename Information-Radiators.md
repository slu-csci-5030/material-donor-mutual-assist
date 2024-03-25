# Information Radiators for Material Donor Mutual Assist

## Task-1 : Current sprint progress (e.g., burndown chart)

- Assigned To :
- Explain :

## Task-2 : Team member availability and workload

- Assigned To :
- Explain :

## Task-3 : Number of open, closed, and in-progress tasks

- Assigned To :
- Explain :

## Task-4 : Cumulative flow diagram

- Assigned To :
- Explain :

## Task-5 : Code quality metrics (e.g., code coverage, code smells)

- Assigned To :
- Explain :

## Task-6 : Build and deployment status

- Assigned To :
- Explain :

## Task-7 : Customer feedback and satisfaction ratings

- Assigned To :
- Explain :

## Task-8 : Key performance indicators (KPIs) for the project

- Assigned To :
- Explain :

## Task-9 : Team goals and objectives

- Assigned To :
- Explain :

## Task-10: Upcoming milestones and deadlines

- Assigned To :
- Explain :

## Task-11: Risk assessment and mitigation strategies

- Assigned To :
- Explain :

## Task-12: Feature roadmap and backlog prioritization

- Assigned To :
- Explain :

## Task-13: Incident and bug tracking

- Assigned To :
- Explain :

## Task-14: Team celebrations and recognitions

- Assigned To :
- Explain :

## Task-15: External dependencies and blockers

- Assigned To : Yenkatarajalaxmimanohar Meda
- Explain :
- Objective:
  The objective of this documentation is to provide a comprehensive overview of the "External Dependency and Blockers" component implemented in our information radiator. This component focuses on visualizing the status of external dependencies and blockers affecting our project.

Based on our discussions, we identified the "External Dependency and Blockers" component as essential for highlighting dependencies on external services and any blockers hindering project progress.

- Implementation:

### Integration of External Dependencies and Blockers:

### Amazon SES for Donor Email Notifications:

Description : This component displays the status of integrating Amazon SES for sending donor email notifications. It indicates whether the integration is successful or facing issues.
Impact: Without the Amazon SES or any other third party email API's it makes our system unreliable and difficult for montiroring large number of emails.
Status: Done.
Resolution Plan: Made all the set up by looking at the node js and AWS SES offical documentation.
Owner: Yenkatarajalaxmimanohar Meda.

### Integrate Postman for API Testing and Documentation:

Description: Visualizes the progress of integrating Postman for API testing and documentation. It shows if the integration is complete or encountering obstacles. For perfoming GET and POST requests, validating and testing the api endpoints.
Impact: Very difficult in testing the api endpoints. Must and should use tool
Status: Done.
Resolution Plan: Learnt by revising and practising the postman from the youtube tutorial.
Owner: Yenkatarajalaxmimanohar Meda.

### Integrate AWS for Deployment Platform:

Description: Integration with AWS is essential for deploying the application, leveraging AWS services for scalability and reliability.
Impact: Delay in AWS integration may hinder deployment and scalability, affecting project timelines and performance.
Status: AWS integration in progress, facing challenges with deployment configurations.
Resolution Plan: Resolve deployment configuration issues, complete AWS integration, and ensure smooth deployment processes.
Owner: Yenkatarajalaxmimanohar Meda.

### Integrate PostgreSQL Database for Backend Data Storage:

Description: Integration with PostgreSQL is necessary for backend data storage, ensuring data integrity and reliability.
Impact: Without proper database integration, data storage and retrieval functionalities may be compromised, affecting application functionality.
Status: PostgreSQL integration ongoing, facing issues with database connectivity and setup.
Resolution Plan: Troubleshoot database connectivity issues, ensure proper setup, and migrate data as needed.
Owner: Siri Chandhana.

- Blockers:

#### Unable to Send Emails to Unregistered Users via Amazon SES:

Description: This blocker indicates Inability to send emails to unregistered users via Amazon SES poses a significant obstacle to donor engagement and communication.
Impact: Limits the reach of communication efforts, potentially leading to missed opportunities for donor engagement and conversion.
Status: Issue identified, ongoing efforts to address SES configuration and email sending functionality.
Resolution Plan: Investigate SES configuration settings, troubleshoot email sending issues, and implement necessary fixes.
Owner: Yenkatarajalaxmimanohar Meda.

#### Database Not Creating Automatically Through Docker:

Description: Automatic database creation through Docker is crucial for streamlined development and deployment processes.
Impact: Manual database creation adds complexity and increases the likelihood of errors, potentially affecting development and deployment workflows.
Status: Database creation issue identified, ongoing efforts to automate database creation through Docker.
Resolution Plan: Troubleshoot Docker configurations, ensure proper initialization scripts, and automate database creation processes.
Owner: Yenkatarajalaxmimanohar Meda.

- Work implemented in GitHub :
  Under "projects section" in our project repository

  I created issues for the External dependencies and blockers and gave labels like External dependencies and Blockers. Upon creating the issue i created the project blocks and dividing the project blocks into Todo, In progress, done and Blockers. I added the issues into project blocks to monotor the issues for the external dependencies and blocker.

#### Instructions for Maintaining and Updating the Information Radiator:

- Instructions for Maintaining and Updating the Information Radiator:

### Regular Review:

Schedule regular review sessions to assess the current status of external dependencies and blockers displayed on the information radiator.
Determine if any updates or changes are needed based on the progress made in resolving dependencies or mitigating blockers.

### Data Updates:

Ensure that the status of each dependency or blocker is kept up-to-date by regularly updating relevant information.
Assign a team member responsible for updating the information radiator with the latest status and progress of each dependency or blocker.

### Communication:

Maintain open communication channels within the team to report any changes or developments related to external dependencies and blockers.
Encourage team members to provide timely updates on the resolution of dependencies or blockers to ensure accurate representation on the information radiator.

### Documentation:

Document any changes or updates made to the status of external dependencies and blockers, including resolutions implemented and progress achieved.
Keep a record of past issues and their resolutions for reference and to track patterns or recurring issues.

## Task-16: Communication channels and contact information

- Assigned To :
- Explain :

## Task-17: Continuous integration/delivery pipeline status

- Assigned To : Yenkatarajalaxmimanohar Meda
- Explain :

### Description :

This component visualizes the status of the continuous integration/continuous delivery (CI/CD) pipeline, which automates the process of building, testing, and deploying code changes.
It displays information about each stage of the pipeline, including build, test, and deployment phases.

- Implementation Steps in Github Actions and code:

#### Code changes : Created .github/workflow folder and added test.yml file to execute all steps automatically upon push like build, test and deploy.

#### GitHub Actions: In Github actions i defined workflows to automate build, test, and deployment processes.

#### Workflow Status Badge: Added a status badge to our repository's project documentation to display the overall status of the CI/CD pipeline. This badge reflects the latest workflow run status.

#### Workflow Visualization: Using the Actions tab in our GitHub repository we can visualize the status and history of workflow runs. View details such as workflow duration, triggered events, and individual job outcomes.

#### Notifications: Configured GitHub Actions to send notifications or status updates to my github registered email id upon completion or failure of pipeline runs. This ensures timely awareness of pipeline status.

#### Workflow Logs: Review workflow logs and artifacts within GitHub to troubleshoot issues, analyze failures, and track deployment outcomes. GitHub provides detailed logs for each workflow run, aiding in debugging and resolution.

- Maintenance and Updating:

#### Regularly review and update external dependencies and blockers as new information becomes available.

#### Monitor CI/CD pipeline status and performance, addressing any failures or issues promptly.

#### Encourage collaboration and communication among team members to ensure accurate tracking and resolution of dependencies and pipeline issues.

## Task-18: User story mapping

- Assigned To :
- Explain :

## Task-19: Resource allocation and budget tracking

- Assigned To :
- Explain :

## Task-20: Project velocity and throughput

- Assigned To :
- Explain :
