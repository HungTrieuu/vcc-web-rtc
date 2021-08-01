$(window).bind("beforeunload", function (e) {
  if (1 == 1) {
    return "abc";
  }
});

$(window).bind("unload", function () {
  csUnregister();
  if (csVoice.enableVoice) {
    reConfigDeviceType();
  }
});

var VCCCient = (function () {
  var me = this;

  me.listener = function (params) {
    for (const key in params) {
      if (Object.hasOwnProperty.call(params, key)) {
        if (!me.eventAction) {
          me.eventAction = {};
        }
        const element = params[key];
        me.eventAction[key] = element;
      }
    }
  };

  me.callAction = function (actionName, params = null) {
    processEvent(actionName, params);
  };

  processEvent = function (actionName, params = null) {
    if (!me.eventAction) {
      return;
    }
    if (
      me.eventAction[actionName] &&
      typeof me.eventAction[actionName] === "function"
    ) {
      me.eventAction[actionName](params);
    }
  };

  return me;
})();

// kết thúc cuộc gọi ra/vào
function csEndCall() {

  VCCCient.callAction("endCall");
}

// đổ chuông trình duyệt của agent khi gọi ra
function csCallRingingAgent() {

  VCCCient.callAction("callRingingAgent");
}

// đổ chuông trình duyệt của agent khi gọi vào
// đổ chuông tới khách hàng khi gọi ra
function csCallRinging(phone) {

  VCCCient.callAction("callRinging", { phone });
}

// cuộc gọi vào được agent trả lời
function csAcceptCall() {

  VCCCient.callAction("acceptCall");
}

// cuộc gọi ra được khách hàng trả lời
function csCustomerAccept() {
  VCCCient.callAction("customerAccept");
}

function csMuteCall() {
  VCCCient.callAction("muteCall");
}

function csUnMuteCall() {
  VCCCient.callAction("unMuteCall");
}

function csHoldCall() {
  VCCCient.callAction("holdCall");
}

function csUnHoldCall() {
  VCCCient.callAction("unHoldCall");
}

function showCalloutInfo(number) {


  VCCCient.callAction("showCalloutInfo", { number });
}

function showCalloutError(errorCode, sipCode) {


  VCCCient.callAction("showCalloutError", { errorCode, sipCode });
}

function csShowEnableVoice(enableVoice) {
  VCCCient.callAction("showEnableVoice", { enableVoice });
}

function csShowDeviceType(type) {
  VCCCient.callAction("showDeviceType", { type });
}

function csShowCallStatus(status) {
  VCCCient.callAction("showCallStatus", { status });
}

function csInitComplete() {
  if (!csVoice.enableVoice) {
    csEnableCall();
  }

  VCCCient.callAction("initComplete");
}

function csCurrentCallId(callId) {
  VCCCient.callAction("currentCallId", { callId });
}

function csInitError(error) {
  VCCCient.callAction("initError", { error });
}
