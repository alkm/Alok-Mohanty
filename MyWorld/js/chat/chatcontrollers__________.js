function ChatController($scope, $rootScope, DataService, ServiceParam){
    $scope.welcomeUser = $rootScope.email;
    $rootScope.itemEmail = '';
    $rootScope.buddyWindowID = '';
    roomID = $rootScope.email;
    $scope.chatElements=[];
    $scope.buddyList = [];
    //Set Chat Windows Provider
    //Getting all chat users currently logged in
    ServiceParam.setData('getChatList', '');
    var successChatLsit = function (response) {
       // $scope.chatList = response.data;
        if(response.status){
            for (var x in response.data) {
                if(response.data[x] != $rootScope.email){
                    $scope.chatElements.push({email: $.trim(response.data[x])});
                    $scope.buddyList.push(response.data[x]);
                }
            }
        }
    }

    var errorChatList = function (status) {

    }
    DataService.call(successChatLsit, errorChatList);



  var connection = new RTCMultiConnection();
    connection.session = {
        audio: true,
        video: true
    };
    connection.enableSessionReinitiation = false;
    connection.openSignalingChannel = function(config) {
        var channel = config.channel || this.channel;
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
            console.log('emit');
            socket.emit('message', {
                sender: sender,
                data: message
            });
        };

        socket.on('message', config.onmessage);
    };

    var sessions = {};
    connection.onNewSession = function(session) {

        console.log("Getting session<<<<<<<<<<<<<"+roomID+"///"+session.extra['email']);
        if (sessions[session.sessionid]) return;
        sessions[session.sessionid] = session;

        session = sessions[session.sessionid];
        if (!session){
            alert('No chat to join.');
            return;
        }
        //if(session.sessionid == roomID){
        console.log("Getting session>>>>>>>>>>>>>>"+roomID+"///"+session.extra['email']);
        if(session.extra['email'] == roomID)
        {

            connection.join(session);
            //setUpNewBuddyConnection(session);
            $rootScope.buddyWindowID = session.windowID;
           // var chatWindow = document.getElementById('chatWindow'+session.extra['buddy_email']);

            displayChatWindow(session.extra['buddy_email']);
            console.log('joined111111');
           // chatWindow.style.display = 'none';
            //$('#chatWindow'+session.extra['buddy_email']).hide();
        }
        else{
        }
    };

    connection.onstream = function(e) {
        console.log(e.userid);
      //  videosContainer.insertBefore(e.mediaElement, videosContainer.firstChild);
       // rotateInCircle(e.mediaElement);
    };

    connection.onstreamended = function(e) {
        if (e.mediaElement.parentNode) {
            e.mediaElement.parentNode.removeChild(e.mediaElement);
            // scaleVideos();
        }
    };

    function setupNewSession() {

        /*var direction = 'many-to-many';
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
        connection.extra = {
            'session-name': sessionName || 'Anonymous',
            'email': $rootScope.itemEmail,
            'buddy_email': $rootScope.email
        };
       //session.windowID = $rootScope.itemEmail;
        connection.session = session;
        connection.maxParticipantsAllowed = maxParticipantsAllowed;
        //connection.userid= itemID;
        //connection.open(itemID);
        connection.open();
        console.log('opening conection');
       // isNewSession = true;*/

        //setupNewSession.disabled = true;

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
        connection.extra = {
            'session-name': sessionName || 'Anonymous'
        };

        connection.session = session;
        connection.maxParticipantsAllowed = maxParticipantsAllowed;
        connection.open();
    };

    connection.onError=function(){
        alert('no active session');
    }
    connection.onmessage = function(e) {
        console.log('crap');
        // $('.chatOutput-' + );
        try{
            displayChatWindow(e.data[0].id);
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
    connection.onopen = function(e) {
        console.log('connection opened'+ e.userid);
        //console.log('Getting connection from'+ e.userid);
    };



    $scope.openChatWindow = function(item){
        $rootScope.itemEmail = item.email;
        itemID = item.email;
        displayChatWindow(item.email);
        //if(!isNewSession)
         //{
            setupNewSession();
         //}
    };
    function displayChatWindow(item){
        console.log(item);
        if($rootScope.chatWindows.indexOf(item) == -1){
            $rootScope.chatWindows.push(item);
            connection.userid = item;
            $rootScope.$apply();
        }

    }

    $rootScope.$on("SEND_MESSAGE", function(event, data){
        console.log('send to'+data[0].id);

        connection.send(data);
        //displayChatWindow(data[0].id);
        appendDIV(data[0]);
    });

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

    }





	angular.element(document).ready(function () {
		//connection.connect();
	});
  connection.connect();



}
