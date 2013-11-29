function ChatWindowController($scope, $rootScope){
    console.log('invoke chat window');
    $scope.closeChatWindow = function(window){
        if($rootScope.chatWindows.indexOf(window) != -1){
            $rootScope.chatWindows.splice($rootScope.chatWindows.indexOf(window), 1);
        }
    }

    console.log('class name'+ $rootScope.itemEmail);


    $scope.buddyWindowName = $rootScope.itemEmail;
    $scope.sendMessage = function(windowID){
            var msg = document.getElementById('chatMsg'+windowID);
            var data=[{id: windowID, message: msg.value}];
            $rootScope.$emit("SEND_MESSAGE", data);
            //buddyConnection.send(data);
            //displayChatWindow(data[0].id);
            //appendDIV(data[0]);
            msg.value='';
            msg.focus();
    }


  /*  var buddyConnection = new RTCMultiConnection();
    buddyConnection.session = {
        audio: true,
        video: true
    };
    if($rootScope.joiningSession != []){

        //buddyConnection.join($rootScope.joiningSession);
        $rootScope.joiningSession = [];
    }

   // buddyConnection.enableSessionReinitiation = false;
    buddyConnection.openSignalingChannel = function(config) {
        var channel = $rootScope.buddyWindowID;
        var SIGNALING_SERVER = 'https://www.webrtc-experiment.com:2013/';
        //var SIGNALING_SERVER = 'localhost:2013/';
        var sender = Math.round(Math.random() * 999999999) + 999999999;

        io.connect(SIGNALING_SERVER).emit('new-channel', {
            channel: channel,
            sender: sender
        });

        var socket = io.connect(SIGNALING_SERVER + channel);
        socket.channel = channel;
        socket.on('connect', function() {
            if (config.callback) config.callback(socket);
        });

        socket.send = function(message) {
           // setupNewBuddySession();
            socket.emit('message', {
                sender: sender,
                data: message
            });
        };

        socket.on('message', config.onmessage);
    };

    function setupNewBuddySession() {

        var direction = 'many-to-many';
        var _session = 'data';
        var splittedSession = _session.split('+');

        var session = { };
        for (var i = 0; i < splittedSession.length; i++) {
            session[splittedSession[i]] = true;
        }

        var maxParticipantsAllowed = 256;

        if (direction == 'one-to-one') maxParticipantsAllowed = 1;
        if (direction == 'one-to-many') session.broadcast = true;
        if (direction == 'one-way') session.oneway = true;

        var sessionName = '';
        buddyConnection.extra = {
            'session-name': sessionName || 'Anonymous',
            'buddy_email': $rootScope.itemEmail
        };
        buddyConnection.session = session;
        buddyConnection.maxParticipantsAllowed = maxParticipantsAllowed;
        buddyConnection.open($rootScope.itemEmail);
        // isNewSession = true;
    };

    var sessions = {};
   // buddyConnection.userid = $rootScope.itemEmail;
    buddyConnection.onNewSession = function(session) {
        console.log("Getting buddy session"+session.sessionid);

        if (sessions[session.sessionid]) return;
        sessions[session.sessionid] = session;

        session = sessions[session.sessionid];
        if (!session) alert('No chat to join.');
        if(session.sessionid == $rootScope.email){
            buddyConnection.join(session);
        }
        else{
        }
    };

    buddyConnection.onstream = function(e) {
        console.log(e.userid);
        //  videosContainer.insertBefore(e.mediaElement, videosContainer.firstChild);
        // rotateInCircle(e.mediaElement);
    };

    buddyConnection.onstreamended = function(e) {
        if (e.mediaElement.parentNode) {
            e.mediaElement.parentNode.removeChild(e.mediaElement);
            // scaleVideos();
        }
    };

    buddyConnection.onError=function(){
        alert('no active session');
    }
    buddyConnection.onmessage = function(e) {
        // $('.chatOutput-' + );
        alert('ljkhhjjkjk');
        try{
           // displayChatWindow(e.data[0].id);
            appendDIV(e.data[0]);
        }
        catch(err){
            console.log('oops'+err);
        }
        console.debug(e.userid, 'posted', e.data);
        console.log('latency:', e.latency, 'ms');
    };

    // connection.on

    // on data connection gets open
    buddyConnection.onopen = function(e) {
        alert('connection opened');
        console.log('Getting connection from'+ e.userid);

    };

    buddyConnection.connect();

    function appendDIV(data, parent) {

        try{
            var div = document.createElement('div');
            div.innerHTML = "<img class='buddyImage' style='height:30px; width:30px; float:left;' src='images/chat/default.jpg'/><label class='componentLabel' style='color: #000000; line-height: 35px;'>"+data.message+"</label>";
            div.className='chatItem';
            var chatData = document.getElementById('chatData'+data.id);
            if (!parent) chatData.insertBefore(div, chatData.firstChild);
            //else fileProgress.insertBefore(div, fileProgress.firstChild);
            console.log("$('#chatData'+e.data[0].id................)"+chatData);
            div.tabIndex = 0;
            div.focus();
        }
        catch(err){
            console.log('Failed to create div'+err);
        }

    }*/

   /* var buddyConnection = new RTCMultiConnection();
    buddyConnection.session = {
        audio: true,
        video: true
    };
    //buddyConnection.enableSessionReinitiation = false;
    buddyConnection.openSignalingChannel = function(config) {
        var channel = config.channel || this.channel;
        var SIGNALING_SERVER = 'https://www.webrtc-experiment.com:2013/';
        //var SIGNALING_SERVER = 'localhost:2013/';
        var sender = Math.round(Math.random() * 999999999) + 999999999;

        io.connect(SIGNALING_SERVER).emit($rootScope.itemEmail, {
            channel: channel,
            sender: sender
        });

        var socket = io.connect(SIGNALING_SERVER + channel);
        socket.channel = channel;
        socket.on('connect', function() {

            if (config.callback) config.callback(socket);
        });

        console.log('CCCCCCCCCCCCCCCemit buddy');

        socket.send = function(message) {

            socket.emit('message', {
                sender: sender,
                data: message
            });
        };

        socket.on('message', config.onmessage);
    };

    buddyConnection.connect();

    buddyConnection.onNewSession = function(session) {
        console.log('Getting new buddy session'+session.sessionid);
        if (sessions[session.sessionid]) return;
        sessions[session.sessionid] = session;

           // session = sessions[this.getAttribute('data-sessionid')];
            if (!session) alert('No room to join.');
           // if(session.sessionid)
            //connection.join(session);
    };

    function setupNewSession() {

        var direction = 'many-to-many';
        var _session = 'data';
        var splittedSession = _session.split('+');

        var session = { };
        for (var i = 0; i < splittedSession.length; i++) {
            session[splittedSession[i]] = true;
        }

        var maxParticipantsAllowed = 256;

        if (direction == 'one-to-one') maxParticipantsAllowed = 1;
        if (direction == 'one-to-many') session.broadcast = true;
        if (direction == 'one-way') session.oneway = true;

        var sessionName = $rootScope.buddyWindowID;
        buddyConnection.extra = {
            'session-name': sessionName || 'Anonymous',
            'buddy-email': $rootScope.itemEmail

        };

        buddyConnection.session = session;
        buddyConnection.maxParticipantsAllowed = maxParticipantsAllowed;
        buddyConnection.open($rootScope.buddyWindowID);
        alert('set up session');
    };

    setupNewSession();
*/

}