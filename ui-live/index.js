const uiLive = {
    config: require('./ui-live.config.json'),
    credentials: require('./ui-live.credentials.json')
};

if (!uiLive.config.appName) throw 'Please configure app name in ui-live.config.js';
if (!uiLive.credentials.host) throw 'Please configure FTP host in ui-live.credentials.js';
if (!uiLive.credentials.username) throw 'Please configure FTP username in ui-live.credentials.js';
if (!uiLive.credentials.password) throw 'Please configure FTP password in ui-live.credentials.js';

const remoteDir = 'site/wwwroot/apps/' + uiLive.config.appName;

module.exports = function (ftp) {
    const ftpConnection = ftp.create({
        host: uiLive.credentials.host,
        user: uiLive.credentials.username,
        pass: uiLive.credentials.password
    });

    return {
        filterNewer: filterNewer,
        toAzure: toAzure
    };

    function filterNewer() {
        return ftpConnection.newer(remoteDir);
    }

    function toAzure() {
        console.log('Copying to Azure. Remote directory:', remoteDir);

        return ftpConnection.dest(remoteDir);
    }
}