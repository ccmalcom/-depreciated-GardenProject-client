let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3010';
        break;
    case 'team-b-plant-it.herokapp.com':
    APIURL = 'https://git.heroku.com/team-b-plant-it.git'
}

export default APIURL;


