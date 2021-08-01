
declare const VCCCient: any;
declare let csInit: any;
declare let endCall: any;
declare let changeCallStatus: any;
declare let onAcceptCall: any;
declare let muteCall: any;
declare let holdCall: any;
declare let csEnableCall: any;
declare let csCallout: any;

export class Util {

  public static StringeeObject = {
    init: csInit,
    enableCall: csEnableCall,
    changeCallStatus: changeCallStatus,
    endCall: endCall,
    onAcceptCall: onAcceptCall,
    csCallout: csCallout,
    muteCall: muteCall,
    holdCall: holdCall,
    listener: (params: object) => {
      VCCCient.listener(params)
    }

  }
}
