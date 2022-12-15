# angular-better-call-saul

Angular was used to create the front end of the "Better Call Saul" single page web application.  Express Server Framework was used to create the backend.

Steps to run this project<br>
<ul>
   <li><i>Open one terminal on VS Studio Code to run the server, which can be accessed through the server directory through "node .\index.js"</i></li>
    <ul>
      <li>Possible routes</li>
      <ul>
          <li>localhost:3000 ---- Used to display all of the appointments that were made through a get request</li>
          <li>localhost:3000 ---- Used to book an appointment through a post request</li>
          <li>localhost:3000/:UUID ---- Used to display the details of a specific appointment through a get request</li>
          <li>localhost:3000/:UUID ---- Used to update a specific appointment through a patch request</li>
          <li>localhost:3000/:UUID ---- Used to delete a specific appointment through a delete request</li>
      </ul>
     </ul>
</ul>

<ul>
   <li><i>Open another terminal to execute the angular app, which can be accessed through the "saul" directory</i></li>
    <ul>
      <li>Once your in the client directory, please type in "npm install" followed by "npm start"</li>
      <li>Angular Route --- localhost:4200</li>
</ul>
