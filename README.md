## Setup Instructions
To run this application:
1. Install the following:
    - node v16.15.1
    - @angular/cli v14.0.7
2. Run the following commands
    - npm install
    - npm run start
3. Open your browser to http://localhost:4200/

## Running with traffic generator
The traffic generator provided by Mr. Strother allows one to view the application's functionality with random events.

To run the traffic generator:
1. Start both the frontend and backend applications:
    - Both applications have documentation on how to run them
2. Ensure you have python installed
2. Running the following command:
    - Use your python installation to run the application
    - Example: `python3 ./python_trafficgenarator.py`

## Project Documentation
This is the frontend of our Software Engineering Photon implementation. It is built with Angular and leverages tools such as Ngrx Component Store to manage state in the application.
Upon receiving a UDP event, the backend application sends a Server Sent Event containing that id of both the player that scored, and the player that got hit. The frontend application uses that data to update the UI accordingly (the score feed, the team scores, etc.).