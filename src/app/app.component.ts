import { Component, OnInit } from '@angular/core';
import { Util } from 'src/Util';

declare const $: any;

declare const VCCCient: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-vcc2';

  token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpcHBob25lIjoiNDM1Ml8wMDEifQ.NGi3dnpstPXZ_cMbcVoRCQZnTzmmgo5GVjdrgg-pfjU';
  domain: string = '0888815096';
  phoneNumber: string = '0376491393';

  ngOnInit(): void {
    Util.StringeeObject.init(this.token, this.domain);

    Util.StringeeObject.listener({
      endCall: () => {
        console.log("Call is ended");
        const el = document.getElementById("phoneNo");
        if (el) {
          el.innerHTML = "";
        }

      },
      callRingingAgent: () => {
        console.log("Has a new call to agent");
      },
      callRinging: (param: any) => {
        console.log("Has a new call to customer: " + param?.phone);
        const el = document.getElementById("phoneNo");
        if (el) {
          el.innerHTML = param?.phone + " đang gọi ...";
        }
      },
      acceptCall: () => {
        console.log("Call is Accepted");
        const el = document.getElementById("phoneNo");
        if (el) {
          el.innerHTML = "Đang trả lời";
        }
      },
      customerAccept: () => {
        console.log("csCustomerAccept");
        const el = document.getElementById("phoneNo");
        if (el) {
          el.innerHTML = "Đang trả lời";
        }

      },
      muteCall: () => {
        console.log("Call is muted");
      },
      unMuteCall: () => {
        console.log("Call is unmuted");
      },
      holdCall: () => {
        console.log("Call is holded");
      },
      unHoldCall: () => {
        console.log("Call is unholded");
      },
      showCalloutInfo: (number: string) => {
        console.log("callout to " + number);
      },
      showCalloutError: (param: any) => {
        console.log("callout error " + param?.errorCode + " - " + param?.sipCode);
      },
      showEnableVoice: (enableVoice: any) => {
        if (enableVoice) {
          $("#enable").attr("disabled", "disabled");
        } else {
          $("#enable").removeAttr("disabled");
        }
      },
      showDeviceType: (param: any) => {
        console.log("csShowDeviceType");
      },
      showCallStatus: (param: any) => {
        console.log("csShowCallStatus");
      },
      initComplete: (param: any) => {
        console.log("csInitComplete");
      },
      currentCallId: (param: any) => {
        console.log("csCurrentCallId: " + param?.callId);
      },
      initError: (param: any) => {
        console.log("error: " + param?.error);
      }
    });

  }

  csEnableCall() {
    Util.StringeeObject.enableCall();
  }
  changeCallStatus() {
    Util.StringeeObject.changeCallStatus();
  }

  onCallout() {
    Util.StringeeObject.csCallout(this.phoneNumber);
  }

  endCall() {
    Util.StringeeObject.endCall();
  }

  onAcceptCall() {
    Util.StringeeObject.onAcceptCall();
  }

  muteCall() {
    Util.StringeeObject.muteCall();
  }

  holdCall() {
    Util.StringeeObject.holdCall();
  }


}
